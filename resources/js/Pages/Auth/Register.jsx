import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';

const Register = ({ errors }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/registerBuyer', { name, email, telephone, address, password, password_confirmation });
    };

    return (
        <section className='font-poppins'>
            <Head title="Register" />
            <div className='flex'>
                <div id='image' className='w-4/12'>
                    <img src="./assets/authPage/HeroRegister.webp" alt="image" />
                </div>
                <div className="min-h-screen w-8/12 flex bg-light-blue-active items-center justify-center">
                    <div className="p-8 rounded-lg w-full max-w-md">
                        <h2 className="mb-4 text-5xl font-medium text-dark-blue-active">Daftar Akun</h2>
                        {errors && errors.email && (
                            <div className="text-red-500 text-center mb-4">{errors.email}</div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 bg-normal-blue-hover border-transparent rounded-xl"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 bg-normal-blue-hover border-transparent rounded-xl"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone</label>
                                <input
                                    type="text"
                                    id="telephone"
                                    className="w-full px-3 py-2 bg-normal-blue-hover border-transparent rounded-xl"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="w-full px-3 py-2 bg-normal-blue-hover border-transparent rounded-xl"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 bg-normal-blue-hover border-transparent rounded-xl"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    className="w-full px-3 py-2 bg-normal-blue-hover border-transparent rounded-xl"
                                    value={password_confirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <PrimaryButton>
                                    Register
                                </PrimaryButton>
                                <Link href='loginBuyer'>
                                    Sudah punya akun? <span className='font-bold'>Masuk</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;