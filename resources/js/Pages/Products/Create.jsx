import { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ConfirmationPopup from '@/Components/ConfirmationPopup';  // Import the reusable component

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        description: '',
        image: null,
        category: '',
        min: '',
        price: '',
        address: '',
        kelurahan: '',
        kecamatan: '',
        user_id: auth.user.id,
    });

    const [showPopup, setShowPopup] = useState(false); // State for controlling the popup visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true); // Show the popup when the form is submitted
    };

    const handleCreateProduct = () => {
        post(route('products.store'), {
            onSuccess: () => {
                reset({
                    name: '',
                    description: '',
                    image: null,
                    category: '',
                    min: '',
                    price: '',
                    address: '',
                    kelurahan: '',
                    kecamatan: '',
                    user_id: auth.user.id,
                });
                setShowPopup(false); // Close the popup and reset the form after successful submission
            },
        });
    };

    const handleCancel = () => {
        setShowPopup(false); // Close the popup without submitting
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-darker-blue leading-tight">Tambah Produk</h2>}
        >
            <Head title="Tambah Produk" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="shadow-lg bg-white rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Nama</label>
                                    <TextInput
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block w-full"
                                        required
                                    />
                                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Deskripsi</label>
                                    <TextInput
                                        as="textarea"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="block w-full"
                                        required
                                    />
                                    {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Gambar</label>
                                    <TextInput
                                        type="file"
                                        onChange={(e) => setData('image', e.target.files[0])}
                                        className="mt-1 block w-full py-2 pl-2 border border-gray-300 shadow-sm"
                                    />
                                    {errors.image && <div className="text-red-500 text-xs mt-1">{errors.image}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Kategori</label>
                                    <select
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className="rounded-md mt-1 block w-full border border-gray-300 shadow-sm"
                                        required
                                    >
                                        <option value="">Pilih Kategori</option>
                                        <option value="laut">Laut</option>
                                        <option value="tawar">Tawar</option>
                                    </select>
                                    {errors.category && <div className="text-red-500 text-xs mt-1">{errors.category}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Minimal Order</label>
                                    <TextInput
                                        type="number"
                                        value={data.min}
                                        onChange={(e) => setData('min', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                    {errors.min && <div className="text-red-500 text-xs mt-1">{errors.min}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Harga</label>
                                    <TextInput
                                        type="number"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className="mt-1 block w-full"
                                        required
                                    />
                                    {errors.price && <div className="text-red-500 text-xs mt-1">{errors.price}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Alamat Lengkap</label>
                                    <TextInput
                                        type="text"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="mt-1 block w-full"
                                        required
                                    />
                                    {errors.address && <div className="text-red-500 text-xs mt-1">{errors.address}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Kelurahan</label>
                                    <TextInput
                                        type="text"
                                        value={data.kelurahan}
                                        onChange={(e) => setData('kelurahan', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                    {errors.kelurahan && <div className="text-red-500 text-xs mt-1">{errors.kelurahan}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Kecamatan</label>
                                    <TextInput
                                        type="text"
                                        value={data.kecamatan}
                                        onChange={(e) => setData('kecamatan', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                    {errors.kecamatan && <div className="text-red-500 text-xs mt-1">{errors.kecamatan}</div>}
                                </div>

                                <PrimaryButton type="submit" className="mt-4">
                                    Simpan
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Using the ConfirmationPopup component */}
            {showPopup && (
                <ConfirmationPopup
                    message="Apakah kamu yakin ingin menambah produk ini?"
                    onConfirm={handleCreateProduct}
                    onCancel={handleCancel}
                />
            )}
        </AuthenticatedLayout>
    );
}