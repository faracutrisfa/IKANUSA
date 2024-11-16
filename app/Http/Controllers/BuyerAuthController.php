<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class BuyerAuthController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login'); 
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
    
        if (Auth::guard('buyer')->attempt($credentials)) {
            return redirect()->intended('/');
        }
    
        return Inertia::render('Auth/Login', [
            'errors' => ['message' => 'Invalid credentials'],
        ]);
    }

    public function showRegisterForm()
    {
        return Inertia::render('Auth/Register');
    }

    public function registerBuyer(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:buyers',
            'telephone' => 'required|string|max:15', 
            'address' => 'required|string|max:255', 
            'password' => 'required|string|confirmed|min:8',
        ]);
    
        $buyer = Buyer::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'telephone' => $validated['telephone'], 
            'address' => $validated['address'], 
        ]);
    
        Auth::guard('buyer')->login($buyer);
    
        $buyer->sendEmailVerificationNotification();
    
        return redirect()->route('loginBuyer')->with('status', 'Verification email sent!');
    }

    public function showConfirmPasswordForm()
    {
        return Inertia::render('Auth/ConfirmPassword');
    }

    public function confirmPassword(Request $request)
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        if (Hash::check($request->password, Auth::user()->password)) {
            return redirect()->route('dashboard'); 

        return back()->withErrors(['password' => 'The provided password is incorrect.']);
    }
    }

    public function logout(Request $request)
    {
        Auth::guard('buyer')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home');
    }


    public function resendVerificationEmail(Request $request)
    {
        if ($request->user('buyer')->hasVerifiedEmail()) {
            return redirect()->route('home');
        }

        $request->user('buyer')->sendEmailVerificationNotification();

        return back()->with('status', 'Verification link sent!');
    }
}
