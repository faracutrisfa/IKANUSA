import ApplicationLogo from '@/Components/ApplicationLogo';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function LoginAdmin({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <section
            style={{
                backgroundImage: `
                url('./build/assets/authPage/BG1.webp'),
                url('./build/assets/authPage/BG2.webp'),
                url('./build/assets/authPage/BG3.webp'),
                url('./build/assets/authPage/BG4.webp'),
                linear-gradient(#7AB9D4, #123342)
            `,
                backgroundPosition: `
                top left, 
                top right, 
                bottom left, 
                bottom right, 
                center
            `,
                backgroundSize: '20%, 20%, 60%, 20%, cover',
                backgroundBlendMode: 'normal, normal, normal, normal, overlay'
            }}
            className='bg-cover bg-no-repeat h-screen px-5 lg:px-28 py-20 font-poppins'
        >
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <ApplicationLogo />
                </div>
                <GuestLayout>
                    <Head title="Log in Admin" />

                    <div className="flex items-center justify-center w-96 mt-10">
                        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
                            {status && (
                                <div className="mb-4 text-sm font-medium text-green-600">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4 block">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}

                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Log in
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </GuestLayout>
            </div>
        </section>
    );
}