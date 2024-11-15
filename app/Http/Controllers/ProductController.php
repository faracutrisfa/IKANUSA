<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all posts
        $products = Product::latest()->get()->map(function ($product) {
            $product->image = asset('images/' . $product->image); 
            return $product;
        });

        //return view
        return inertia('Products/Index', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category' => 'required',
            'min' => 'required',
            'price' => 'required',
            'address' => 'required',
            'kelurahan' => 'required',
            'kecamatan' => 'required',
            'user_id' => 'required'
        ]);

        $filename = time() . '.' . $request->file('image')->getClientOriginalExtension();
        $request->file('image')->move(public_path('images'), $filename);

        Product::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'image' => $filename,
            'category' => $request->input('category'),
            'min' => $request->input('min'),
            'price' => $request->input('price'),
            'address' => $request->input('address'),
            'kelurahan' => $request->input('kelurahan'),
            'kecamatan' => $request->input('kecamatan'),
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('products.index')->with('success', 'Product berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return inertia('Products/Update', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category' => 'required',
            'min' => 'required',
            'price' => 'required',
            'address' => 'required',
            'kelurahan' => 'required',
            'kecamatan' => 'required',
            'user_id' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $oldImage = public_path('images/' . $product->image);
            if (file_exists($oldImage)) {
                unmin($oldImage); // Hapus image lama
            }
            $filename = time() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->move(public_path('images'), $filename);
            $product->image = $filename;

            $product->name = $request->name;
            $product->description = $request->description;
            $product->category = $request->category;
            $product->min = $request->min;
            $product->price = $request->price;
            $product->address = $request->address;
            $product->kelurahan = $request->kelurahan;
            $product->kecamatan = $request->kecamatan;
            $product->user_id = $request->user_id;

            $product->save();

            return redirect()->route('products.index')->with('success', 'Product berhasil diperbarui.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product = Product::findOrFail($id);

        $imagePath = public_path('images/' . $product->image);
        if (file_exists($imagePath)) {
            unlink($imagePath); 
        }

        $product->delete();

        return response()->json(['message' => 'Product berhasil dihapus.']);
    }
}
