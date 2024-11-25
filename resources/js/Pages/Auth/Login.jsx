import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';

const Login = ({ errors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/loginBuyer', { email, password });
  };

  return (
    <section className='font-poppins'>
      <Head title="Log in" />
      <div className='flex'>
        <div className="min-h-screen w-8/12 flex px-20 items-center bg-light-blue-active">
          <div className="w-full max-w-md">
            <h2 className="mb-4 text-5xl font-medium text-dark-blue-active">Selamat Datang!</h2>
            {errors && errors.message && (
              <div className="text-red-500 text-center mb-4">{errors.message}</div>
            )}
            <form onSubmit={handleSubmit}>
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

              <div className='flex flex-col items-center justify-center gap-2'>
                <PrimaryButton>
                  Masuk
                </PrimaryButton>
                <Link href='registerBuyer'>
                  Belum punya akun? <span className='font-bold'>daftar</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div id='image' className='w-4/12'>
          <img src="./assets/authPage/HeroLogin.webp" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Login;