import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function RegisterAdmin() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <section
            style={{
                backgroundImage: `
                url('./assets/authPage/BG1.webp'),
                url('./assets/authPage/BG2.webp'),
                url('./assets/authPage/BG3.webp'),
                url('./assets/authPage/BG4.webp'),
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
            className="bg-cover bg-no-repeat h-screen px-5 lg:px-28 py-20 font-poppins"
        >
            <div className="flex flex-col items-center justify-center">
                <div>
                    <ApplicationLogo />
                </div>
                <GuestLayout>
                    <Head title="Register Admin" />

                    <div className="flex items-center justify-center w-96 mt-10">
                        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
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
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                    />
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData('password_confirmation', e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <Link
                                        href={route('login')}
                                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Already registered?
                                    </Link>

                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Register
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