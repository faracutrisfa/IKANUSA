import { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import ConfirmationPopup from '@/Components/ConfirmationPopup';

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        question: '',
        answer: '',
        user_id: auth.user.id,
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleCreateFaq = () => {
        post(route('faqs.store'), {
            onSuccess: () => {
                reset({
                    question: '',
                    answer: '',
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
            header={<h2 className="font-semibold text-xl text-darker-blue leading-tight">Tambah FAQ</h2>}
        >
            <Head title="Tambah FAQ" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="shadow-lg bg-white rounded-lg overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Question</label>
                                    <TextInput
                                        type="text"
                                        value={data.question}
                                        onChange={(e) => setData('question', e.target.value)}
                                        className="block w-full"
                                        required
                                    />
                                    {errors.question && <div className="text-red-500 text-xs mt-1">{errors.question}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-darker-blue">Answer</label>
                                    <TextInput
                                        type="text"
                                        value={data.answer}
                                        onChange={(e) => setData('answer', e.target.value)}
                                        className="block w-full"
                                        required
                                    />
                                    {errors.answer && <div className="text-red-500 text-xs mt-1">{errors.answer}</div>}
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
                    message="Apakah kamu yakin ingin menambah faq ini?"
                    onConfirm={handleCreateFaq}
                    onCancel={handleCancel}
                />
            )}
        </AuthenticatedLayout>
    );
}