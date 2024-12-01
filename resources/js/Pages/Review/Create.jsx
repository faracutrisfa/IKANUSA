import { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ConfirmationPopup from '@/Components/ConfirmationPopup';

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        image: null,
        name: '',
        description: '',
        user_id: auth.user.id,
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleCreateReview = () => {
        post(route('reviews.store'), {
            onSuccess: () => {
                reset({
                    image: null,
                    name: '',
                    description: '',
                    user_id: auth.user.id,
                });
                setShowPopup(false);
            },
        });
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-darker-blue leading-tight">Tambah Review</h2>}
        >
            <Head title="Tambah Review" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="shadow-lg bg-white rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
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
                    message="Apakah kamu yakin ingin menambah review ini?"
                    onConfirm={handleCreateReview}
                    onCancel={handleCancel}
                />
            )}
        </AuthenticatedLayout>
    );
}