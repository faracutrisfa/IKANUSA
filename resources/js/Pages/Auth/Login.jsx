import React from 'react'

const Login = () => {
  return (
    <div>
      INI LOGIN USER
    </div>
  )
}

export default Login


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Checkbox from '@/Components/Checkbox';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';

// const Login = ({ status, canResetPassword }) => {
//     const [data, setData] = useState({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const [errors, setErrors] = useState({});
//     const [processing, setProcessing] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setData((prev) => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setProcessing(true);

//         try {
//             const response = await fetch('/buyer/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 navigate('/buyer/dashboard');
//             } else {
//                 const result = await response.json();
//                 setErrors(result.errors || {});
//             }
//         } catch (error) {
//             setErrors({ general: 'An error occurred during login.' });
//         } finally {
//             setProcessing(false);
//         }
//     };

//     return (
//         <GuestLayout>
//             <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">Login Pembeli</h2>

//                 {status && (
//                     <div className="mb-4 text-sm font-medium text-green-600">
//                         {status}
//                     </div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                     {/* Email Field */}
//                     <div>
//                         <InputLabel htmlFor="email" value="Email" />
//                         <TextInput
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={data.email}
//                             className="mt-1 block w-full"
//                             autoComplete="username"
//                             isFocused={true}
//                             onChange={handleChange}
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
//                             autoComplete="current-password"
//                             onChange={handleChange}
//                         />
//                         <InputError message={errors.password} className="mt-2" />
//                     </div>

//                     {/* Remember Me Checkbox */}
//                     <div className="mt-4 flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={handleChange}
//                         />
//                         <span className="ms-2 text-sm text-gray-600">Remember me</span>
//                     </div>

//                     {/* Error Message */}
//                     {errors.general && (
//                         <div className="mt-2 text-sm text-red-600">
//                             {errors.general}
//                         </div>
//                     )}

//                     {/* Forgot Password */}
//                     <div className="mt-4 flex items-center justify-between">
//                         {canResetPassword && (
//                             <a
//                                 href="/buyer/password/request"
//                                 className="text-sm text-gray-600 hover:underline"
//                             >
//                                 Forgot your password?
//                             </a>
//                         )}

//                         <PrimaryButton
//                             className="ml-4"
//                             disabled={processing}
//                         >
//                             Log in
//                         </PrimaryButton>
//                     </div>
//                 </form>

//                 {/* Register Link */}
//                 <div className="mt-4 text-center">
//                     Belum punya akun?{' '}
//                     <a
//                         href="/buyer/register"
//                         className="text-blue-600 hover:underline"
//                     >
//                         Daftar
//                     </a>
//                 </div>
//             </div>
//         </GuestLayout>
//     );
// };

// export default Login;
