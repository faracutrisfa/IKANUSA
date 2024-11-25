<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BuyerAuthController;
use App\Models\Faq;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//buyers
Route::get('/', [BuyerAuthController::class,'welcome'])->name('welcome');

Route::get('/produk', function () {
    $products = Product::latest()
        ->get()
        ->map(function ($product) {
            $product->image = asset('images/' . $product->image);
            return $product;
        });

    return Inertia::render('Produk', [
        'products' => $products,  
    ]);
})->name('produk');

Route::get('/edukasi', function () {
    return Inertia::render('Edukasi');
})->name('Edukasi');

Route::get('/layanan', function () {
    return Inertia::render('Layanan');
})->name('Layanan');

Route::get('/faq', function () {
    $faqs = Faq::latest()->get();

    return Inertia::render('Faq', [
        'faqs' => $faqs,
    ]);
})->name('faq');

Route::middleware('guest')->group(function () {
    Route::get('loginBuyer', [BuyerAuthController::class, 'showLoginForm'])->name('loginBuyer');
    Route::post('loginBuyer', [BuyerAuthController::class, 'login']);
    Route::get('registerBuyer', [BuyerAuthController::class, 'showRegisterForm'])->name('registerBuyer');
    Route::post('registerBuyer', [BuyerAuthController::class, 'registerBuyer']);
    Route::post('/logoutBuyer', [BuyerAuthController::class, 'logout'])->name('logoutBuyer');
});

// Route dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Product routes
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/edit/{id}', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{id}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');

    //Faq routes
    Route::get('/faqs', [FaqController::class, 'index'])->name('faqs.index');
    Route::get('/faqs/create', [FaqController::class, 'create'])->name('faqs.create');
    Route::post('/faqs', [FaqController::class, 'store'])->name('faqs.store');
    Route::get('/faqs/edit/{id}', [FaqController::class, 'edit'])->name('faqs.edit');
    Route::put('/faqs/{id}', [FaqController::class, 'update'])->name('faqs.update');
    Route::delete('/faqs/{id}', [FaqController::class, 'destroy'])->name('faqs.destroy');
});

require __DIR__.'/auth.php';