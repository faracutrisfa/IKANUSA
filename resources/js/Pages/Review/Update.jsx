import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ConfirmationPopup from '@/Components/ConfirmationPopup';

export default function Update({ auth, review }) {
    const { data, setData, put, errors, reset } = useForm({
        image: null,
        name: review.name || '',
        description: review.description || '',
        user_id: review.user_id,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

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

        put(route('reviews.update', review.id), {
            data: {
                ...data,
                image: data.image || review.image,
            },
            onSuccess: () => reset(),
        });

        setShowPopup(true);
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

    const handleUpdateReview = () => {
        put(route('reviews.update', review.id), {
            onSuccess: () => setShowPopup(false),
        });
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-darker-blue leading-tight">Update Review</h2>}
        >
            <Head title="Update Review" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="shadow-lg bg-white rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
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
                                    <label className="block text-sm font-medium text-darker-blue">Name</label>
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
                                    <label className="block text-sm font-medium text-darker-blue">Description</label>
                                    <TextInput
                                        type="text"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="block w-full"
                                        required
                                    />
                                    {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
                                </div>

                                <PrimaryButton type="submit" className="mt-4">
                                    Simpan
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <ConfirmationPopup
                    message="Apakah kamu yakin ingin mengubah Review ini?"
                    onConfirm={handleUpdateReview}
                    onCancel={handleCancel}
                />
            )}
        </AuthenticatedLayout>
    );
}