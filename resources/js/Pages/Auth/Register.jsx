import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center">Register</h2>
                {errors && errors.email && (
                    <div className="text-red-500 text-center mb-4">{errors.email}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={password_confirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;