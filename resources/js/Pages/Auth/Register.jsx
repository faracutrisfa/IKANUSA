import React from 'react'

const Register = () => {
    return (
        <div>
            Ini Register User
        </div>
    )
}

export default Register


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';

// const Register= () => {
//     const [data, setData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//     });

//     const [errors, setErrors] = useState({});
//     const [processing, setProcessing] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setProcessing(true);

//         try {
//             // Kirim data ke backend untuk registrasi
//             const response = await fetch('/buyer/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 navigate('/buyer/login'); // Redirect setelah registrasi sukses
//             } else {
//                 const result = await response.json();
//                 setErrors(result.errors || {});
//             }
//         } catch (error) {
//             setErrors({ general: 'An error occurred during registration.' });
//         } finally {
//             setProcessing(false);
//         }
//     };

//     return (
//         <GuestLayout>
//             <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">Daftar Pembeli</h2>

//                 {/* Formulir Register */}
//                 <form onSubmit={handleSubmit}>
//                     {/* Name Field */}
//                     <div>
//                         <InputLabel htmlFor="name" value="Nama" />
//                         <TextInput
//                             id="name"
//                             name="name"
//                             value={data.name}
//                             className="mt-1 block w-full"
//                             autoComplete="name"
//                             isFocused={true}
//                             onChange={handleChange}
//                             required
//                         />
//                         <InputError message={errors.name} className="mt-2" />
//                     </div>

//                     {/* Email Field */}
//                     <div className="mt-4">
//                         <InputLabel htmlFor="email" value="Email" />
//                         <TextInput
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={data.email}
//                             className="mt-1 block w-full"
//                             autoComplete="email"
//                             onChange={handleChange}
//                             required
//                         />
//                         <InputError message={errors.email} className="mt-2" />
//                     </div>

//                     {/* Password Field */}
//                     <div className="mt-4">
//                         <InputLabel htmlFor="password" value="Password" />
//                         <TextInput
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={data.password}
//                             className="mt-1 block w-full"
//                             autoComplete="new-password"
//                             onChange={handleChange}
//                             required
//                         />
//                         <InputError message={errors.password} className="mt-2" />
//                     </div>

//                     {/* Password Confirmation Field */}
//                     <div className="mt-4">
//                         <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
//                         <TextInput
//                             id="password_confirmation"
//                             type="password"
//                             name="password_confirmation"
//                             value={data.password_confirmation}
//                             className="mt-1 block w-full"
//                             autoComplete="new-password"
//                             onChange={handleChange}
//                             required
//                         />
//                         <InputError message={errors.password_confirmation} className="mt-2" />
//                     </div>

//                     {/* Error Message */}
//                     {errors.general && (
//                         <div className="mt-2 text-sm text-red-600">
//                             {errors.general}
//                         </div>
//                     )}

//                     {/* Submit Button and Link to Login */}
//                     <div className="mt-4 flex items-center justify-between">
//                         <a
//                             href="/buyer/login"
//                             className="text-sm text-gray-600 hover:underline"
//                         >
//                             Sudah punya akun? Login
//                         </a>
//                         <PrimaryButton className="ml-4" disabled={processing}>
//                             Daftar
//                         </PrimaryButton>
//                     </div>
//                 </form>
//             </div>
//         </GuestLayout>
//     );
// };

// export default Register;