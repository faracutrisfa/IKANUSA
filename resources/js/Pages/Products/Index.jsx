import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

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
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tambah Produk
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 bg-gray-100 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tambah Produk</h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-300 bg-white rounded-lg shadow table-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nama</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Deskripsi</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Image</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">category</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">min</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">price</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">address</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">kelurahan</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">kecamatan</th>
                                            {/* <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.name}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.description}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">
                                                    <img src={product.image} alt="" />
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.category}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.min}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.price}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.address}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.kelurahan}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm">{product.kecamatan}</td>
                                                {/* <td className="px-4 py-2 whitespace-nowrap text-sm flex space-x-2">
                                                    
                                                    <Link
                                                        href={route('products.edit', product.id)}
                                                        className="border border-green-600 text-green-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-green-600 hover:text-white text-sm"
                                                    >
                                                        Edit
                                                    </Link>

                                                   
                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        className="border border-red-600 text-red-600 px-4 py-2 rounded-lg shadow transition-colors duration-300 ease-in-out hover:bg-red-600 hover:text-white text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </td> */}
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
