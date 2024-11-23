<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;

class FaqController extends Controller
{
    /**
     * Menampilkan daftar semua FAQ
     */
    public function index()
    {
        $faqs = Faq::with('user')->latest()->get();

        return inertia('Faq/Index', [
            'faqs' => $faqs,
        ]);
    }

    /**
     * Menampilkan halaman untuk membuat FAQ baru
     */
    public function create()
    {
        return inertia('Faq/Create');
    }

    /**
     * Menyimpan FAQ baru ke database
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
        ]);

        // Simpan data FAQ
        Faq::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('faqs.index')->with('success', 'FAQ berhasil ditambahkan.');
    }

    /**
     * Menampilkan halaman untuk mengedit FAQ tertentu
     */
    public function edit(Faq $faq)
    {
        return inertia('Faq/Update', [
            'faq' => $faq,
        ]);
    }

    /**
     * Memperbarui FAQ yang sudah ada
     */
    public function update(Request $request, Faq $faq)
    {
        // Validasi input
        $request->validate([
            'question' => 'required|string|max:255',
            'answer' => 'required|string',
        ]);

        // Perbarui data FAQ
        $faq->update([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
            'user_id' => auth()->id(), // Bisa dihapus jika tidak ingin mengubah pemilik
        ]);

        return redirect()->route('faqs.index')->with('success', 'FAQ berhasil diperbarui.');
    }

    /**
     * Menghapus FAQ dari database
     */
    public function destroy(Faq $faq)
    {
        try {
            $faq->delete();

            return response()->json(['message' => 'FAQ berhasil dihapus.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Gagal menghapus FAQ.'], 500);
        }
    }
}
