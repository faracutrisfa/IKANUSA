import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Register() {
    const [errors, setErrors] = useState([]);
    const { data, setData, post, processing } = useForm({
        name: '',
        email: '',
        telephone: '',
        address: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('registerBuyer'), {
            onError: (errors) => {
                setErrors(errors);
            },
            onSuccess: (response) => {
                console.log(response);
                window.location.href = '/';
            },
        });
    };

    return (
        <section className='font-poppins'>
            <Head title="Register" />
            <div className='flex'>
                <div className='w-4/12'>
                    <img src="./assets/authPage/HeroRegister.webp" className='w-full h-screen' />
                </div>
                <div className='w-8/12 items-center flex pl-28 bg-light-blue-active container'>
                    <GuestLayout>
                        <div>
                            <ApplicationLogo />
                            <h2 className='text-5xl mt-5 animate-fade-down'>Daftar Akun</h2>
                            <div>
                                {errors.message && (
                                    <div className=" text-red-500 text-center mt-2">{errors.message}</div>
                                )}

                                <form onSubmit={handleSubmit} className='flex justify-between items-center gap-16 my-5'>
                                    <div className='flex flex-col w-full gap-4'>
                                        <div>
                                            <InputLabel htmlFor="name" value="Nama" />
                                            <TextInput
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="mt-1 block w-full bg-normal-blue-hover"
                                                required
                                            />
                                            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                                        </div>


                                        <div>
                                            <InputLabel htmlFor="telephone" value="Telepon" />
                                            <TextInput
                                                id="telephone"
                                                type="tel"
                                                value={data.telephone}
                                                onChange={(e) => setData('telephone', e.target.value)}
                                                className="mt-1 block w-full bg-normal-blue-hover"
                                                required
                                            />
                                            {errors.telephone && <p className="text-red-500 text-xs">{errors.telephone}</p>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="address" value="Alamat" />
                                            <TextInput
                                                id="address"
                                                type="text"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                className="mt-1 block w-full bg-normal-blue-hover"
                                                required
                                            />
                                            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full gap-4'>
                                        <div>
                                            <InputLabel htmlFor="email" value="Email" />
                                            <TextInput
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="mt-1 block w-full bg-normal-blue-hover"
                                                required
                                            />
                                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <InputLabel htmlFor="password" value="Password" />
                                            <TextInput
                                                id="password"
                                                type="password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                className="mt-1 block w-full bg-normal-blue-hover"
                                                required
                                            />
                                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
                                            <TextInput
                                                id="password_confirmation"
                                                type="password"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                className="mt-1 block w-full bg-normal-blue-hover"
                                                required
                                            />
                                            {errors.password_confirmation && (
                                                <p className="text-red-500 text-xs">{errors.password_confirmation}</p>
                                            )}
                                        </div>
                                    </div>
                                </form>
                                <div className="flex justify-center ">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={processing}
                                        className="py-2 px-9 rounded-lg"
                                    >
                                        {processing ? 'Mendaftar...' : 'Daftar'}
                                    </PrimaryButton>
                                </div>

                                <div className="mt-4 text-center">
                                    <a href="/loginBuyer" className="text-darker-blue">
                                        Sudah punya akun? <span className='font-bold'>Masuk</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </GuestLayout>
                </div>
            </div>
        </section>
    );
}