<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateFaqRequest;
use App\Models\Faq;

class FaqController extends Controller
{
    public function index() 
    {
       $faq = Faq::latest()->get();

       return inertia('Faq/Index', [
        'faqs' => $faq
        ]);
    }

    public function create()
    {
        return inertia('Faq/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'question' => 'required',
            'answer' => 'required',
            'user_id' => 'required'
        ]);

        Faq::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('faqs.index')->with('success', 'Faq berhasil ditambahkan.');
    }

    public function show(Faq $faq)
    {
        //
    }

    public function edit($id)
    {
        $faq = Faq::findOrFail($id);

        return inertia('Faq/Update', [
            'faq' => $faq,
        ]);
    }

    public function update(Request $request, Faq $faq, $id)
    {

        $faq = Faq::findOrFail($id);

        $request->validate([
            'question' => 'required',
            'answer' => 'required'
        ]);

        $faq->update([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->route('faqs.index')->with('success', 'Faq berhasil diupdate.');
    }

    public function destroy(Faq $faq, $id)
    {
        $faq = Faq::findOrFail($id);
        $faq->delete();

        return response()->json(['message' => 'Faq berhasil dihapus.']);

    }
}