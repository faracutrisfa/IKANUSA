import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({reviews, auth}) {
    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus ulasan ini?')) {
            axios.delete(route('reviews.destroy', id))
                .then(() => {
                    alert('Review berhasil dihapus');
                    window.location.reload(); 
                })
                .catch((error) => {
                    console.error('Error deleting experience:', error);
                });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Ulasan
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Lihat Ulasan
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
