import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Index({ faqs, auth }) {
    const handleDelete = (id) => {
        if (confirm('Apakah anda yakin ingin menghapus faq ini?')) {
            axios.delete(route('faqs.destroy', id))
                .then(() => {
                    alert("Faq berhasil dihapus");
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Error deleting faq:', error);
                })
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-darker-blue">
                    Tambah FAQ
                </h2>
            }
        >
            <Head title="Faq" />

            <div className="py-12">
                <div className="max-w-[1320px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="lg:text-2xl font-bold text-darker-blue">Tambah FAQ</h3>
                                <Link href={route('faqs.create')}>
                                    <PrimaryButton className='bg-blue-700 hover:bg-blue-600'>
                                        Create New FAQ
                                    </PrimaryButton>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-300 bg-white rounded-lg shadow table-auto">
                                    <thead>
                                        <tr className='text-left text-xs font-medium text-darker-blue tracking-wider'>
                                            <th className="px-4 py-3">QUESTION</th>
                                            <th className="px-4 py-3">ANSWER</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {faqs.map((faq) => (
                                            <tr key={faq.id} className="hover:bg-gray-50 whitespace-nowrap text-sm">
                                                <td className="px-4 py-2">{faq.question}</td>
                                                <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-normal">
                                                    {faq.answer}
                                                </td>
                                                <td className="px-4 py-2 space-x-2">
                                                    <Link href={route('faqs.edit', faq.id)}>
                                                        <PrimaryButton className="border-2 bg-green-600 hover:border-green-600 text-green-600 hover:bg-transparent hover:text-green-600 focus:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:bg-green-600 active:text-white">
                                                            Edit
                                                        </PrimaryButton>
                                                    </Link>

                                                    <PrimaryButton
                                                        onClick={() => handleDelete(faq.id)}
                                                        className="border-2 bg-red-600 hover:border-red-600 text-red-600 hover:bg-transparent hover:text-red-600 focus:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 active:bg-red-600 active:text-white"
                                                    >
                                                        Delete
                                                    </PrimaryButton>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}