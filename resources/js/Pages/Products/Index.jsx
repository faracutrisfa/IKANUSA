import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Index({ products, auth }) {
    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
            axios.delete(route('products.destroy', id))
                .then(() => {
                    alert('Produk berhasil dihapus');
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
                <h2 className="text-xl font-semibold leading-tight text-darker-blue">
                    Tambah Produk
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-[1320px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="lg:text-2xl font-bold text-darker-blue">Tambah Produk</h3>
                                <Link href={route('products.create')}>
                                    <PrimaryButton className='bg-blue-700 hover:bg-blue-600'>
                                        Create New Product
                                    </PrimaryButton>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-300 bg-white rounded-lg shadow table-auto">
                                    <thead>
                                        <tr className='text-left text-xs font-medium text-darker-blue tracking-wider'>
                                            <th className="px-4 py-3">NAMA</th>
                                            <th className="px-4 py-3">DESKRIPSI</th>
                                            <th className="px-4 py-3">GAMBAR</th>
                                            <th className="px-4 py-3">KATEGORI</th>
                                            <th className="px-4 py-3">MINIMAL ORDER</th>
                                            <th className="px-4 py-3">HARGA</th>
                                            <th className="px-4 py-3">ALAMAT</th>
                                            <th className="px-4 py-3">KELURAHAN</th>
                                            <th className="px-4 py-3">KECAMATAN</th>
                                            <th className="px-4 py-3">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-50 whitespace-nowrap text-sm">
                                                <td className="px-4 py-2">{product.name}</td>
                                                <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-normal">
                                                    {product.description}
                                                </td>
                                                <td className="px-4 py-2">
                                                    <img src={product.image} alt="" />
                                                </td>
                                                <td className="px-4 py-2">{product.category}</td>
                                                <td className="px-4 py-2">{product.min}</td>
                                                <td className="px-4 py-2">{product.price}</td>
                                                <td className="px-4 py-2">{product.address}</td>
                                                <td className="px-4 py-2">{product.kelurahan}</td>
                                                <td className="px-4 py-2">{product.kecamatan}</td>
                                                <td className="px-4 py-2 space-x-2">
                                                    <Link href={route('products.edit', product.id)}>
                                                        <PrimaryButton className="border-2 bg-green-600 hover:border-green-600 text-green-600 hover:bg-transparent hover:text-green-600 focus:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 active:bg-green-600 active:text-white">
                                                            Edit
                                                        </PrimaryButton>
                                                    </Link>

                                                    <PrimaryButton
                                                        onClick={() => handleDelete(product.id)}
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
    );
}
