<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function index() 
    {
       $review = Review::latest()->get()->map(function ($review) {
        $review->image = asset('images/' . $review->image);
        return $review;
       });

       return inertia('Review/Index', [
        'reviews' => $review
        ]);
    }

    public function create()
    {
        return inertia('Review/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ]);

        $filename = time() . '.' . $request->file('image')->getClientOriginalExtension();
        $request->file('image')->move(public_path('images'), $filename);

        Review::create([
            'image' => $filename,
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('reviews.index')->with('success', 'Review berhasil ditambahkan.');
    }

    public function show(Review $review)
    {
        //
    }

    public function edit($id)
    {
        $review = Review::findOrFail($id);

        return inertia('Review/Update', [
            'review' => $review,
        ]);
    }

    public function update(Request $request, Review $review, $id)
    {
        $review = Review::findOrFail($id);
    
        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'name' => 'required',
            'description' => 'required'
        ]);
    
        if ($request->hasFile('image')) {
            $oldImagePath = public_path('images/' . $review->image);
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }
    
            $filename = time() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('images'), $filename);
            $review->image = $filename;
        }
    
        // Perbarui data review
        $review->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'image' => $review->image, // Tetap gunakan gambar lama jika tidak diunggah gambar baru
            'user_id' => auth()->user()->id,
        ]);
    
        return redirect()->route('reviews.index')->with('success', 'Review berhasil diupdate.');
    }    

    public function destroy(Review $review, $id)
    {
        $review = Review::findOrFail($id);

        $imagePath = public_path('images/' . $review->image);
        if (file_exists($imagePath)) {
            unlink($imagePath); 
        }

        $review->delete();

        return response()->json(['message' => 'Review berhasil dihapus.']);

    }
}