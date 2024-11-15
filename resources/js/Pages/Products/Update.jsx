import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Update({ auth, product }) {
    const { data, setData, put, errors, reset } = useForm({
        name: product.name || '',
        description: product.description || '',
        image: null,
        category: product.category || '',
        min: product.min || '',
        price: product.price || '',
        address: product.address || '',
        kelurahan: product.kelurahan || '',
        kecamatan: product.kecamatan || '',
        user_id: product.user_id,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [customErrors, setCustomErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};
        if (data.image && !data.name) {
            validationErrors.name = 'Nama wajib diisi ketika gambar diunggah';
        }

        if (Object.keys(validationErrors).length > 0) {
            setCustomErrors(validationErrors);
            return;
        }

        put(route('products.update', product.id), {
            data: {
                ...data,
                image: data.image || product.image,
            },
            onSuccess: () => reset(),
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Update Produk</h2>}
        >
            <Head title="Update Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Nama</label>
                                    <TextInput
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block w-full"
                                    />
                                    {(errors.name || customErrors.name) && (
                                        <div className="text-red-500 text-xs mt-1">{errors.name || customErrors.name}</div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                                    <TextInput
                                        as="textarea"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="block w-full"
                                    />
                                    {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Gambar</label>
                                    <TextInput
                                        type="file"
                                        className="mt-1 block w-full py-2 pl-2 border border-gray-300 shadow-sm"
                                        onChange={handleFileChange}
                                    />
                                    {errors.image && <div className="text-red-500 text-xs mt-1">{errors.image}</div>}
                                    {imagePreview && <img src={imagePreview} alt="Image preview" className="mt-4 h-32 w-32 object-cover" />}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Kategori</label>
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
                                    <label className="block text-sm font-medium text-gray-700">Harga</label>
                                    <TextInput
                                        type="text"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className="block w-full"
                                    />
                                    {errors.price && <div className="text-red-500 text-xs mt-1">{errors.price}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Alamat</label>
                                    <TextInput
                                        type="text"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="block w-full"
                                    />
                                    {errors.address && <div className="text-red-500 text-xs mt-1">{errors.address}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Kelurahan</label>
                                    <TextInput
                                        type="text"
                                        value={data.kelurahan}
                                        onChange={(e) => setData('kelurahan', e.target.value)}
                                        className="block w-full"
                                    />
                                    {errors.kelurahan && <div className="text-red-500 text-xs mt-1">{errors.kelurahan}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Kecamatan</label>
                                    <TextInput
                                        type="text"
                                        value={data.kecamatan}
                                        onChange={(e) => setData('kecamatan', e.target.value)}
                                        className="block w-full"
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
        </AuthenticatedLayout>
    );
}