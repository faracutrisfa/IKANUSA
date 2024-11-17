import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login() {
  const [errors, setErrors] = useState([]);
  const { data, setData, post, processing } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('loginBuyer'), {
      onError: (errors) => {
        setErrors(errors);
      },
      onSuccess: (response) => {
        console.log(response);
        window.location.href = '/';
      }
    });
  };

  return (
    <section className='font-poppins'>
      <Head title="Log in" />
      <div className='flex'>
        <div className='w-8/12 bg-light-blue-active container'>
          <GuestLayout>
            <div className='max-w-md'>
              <ApplicationLogo />
              <h2 className='text-5xl mt-5 animate-fade-right'>Selamat datang!</h2>
              <div>
                {errors.message && (
                  <div className="mb-4 text-red-500 text-center mt-2">{errors.message}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4 mt-5">
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

                  <div className="mb-6">
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

                  <div className="flex justify-center mb-4">
                    <PrimaryButton
                      type="submit"
                      disabled={processing}
                      className="py-2 px-9 rounded-lg"
                    >
                      {processing ? 'Logging in...' : 'Masuk'}
                    </PrimaryButton>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <a href="/registerBuyer" className="text-darker-blue">
                    Belum punya akun? <span className='font-bold'>Daftar</span>
                  </a>
                </div>
              </div>
            </div>
          </GuestLayout>
        </div>
        <div className='w-4/12'>
          <img src="./build/assets/authPage/HeroLogin.webp" />
        </div>
      </div>
    </section>

  );
}
