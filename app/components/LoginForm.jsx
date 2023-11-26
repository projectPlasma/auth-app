'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError('Invalid Credentials.');
        return;
      }

      router.replace('dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg shadow-[#FDFD96] rounded-lg border-t-4 border-t-teal-500'>
        <h1 className='text-xl font-bold px-2 my-4'>Login</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 px-2 py-4'>
          <input
            type='text'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='bg-green-600 font-bold cursor-pointer px-6 py-2 rounded-full hover:bg-green-700'>
            Login
          </button>

          {error && (
            <div className='bg-red-500 text-white w-fit rounded-b-md text-sm font-semibold mt-2 ml-2 py-1 px-3'>
              {error}
            </div>
          )}

          <Link href={'/register'} className='text-sm mt-3 text-right'>
            Don't have an account? <span className='underline'>Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
