'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are necessary.');
      return;
    }

    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError('User already exists.');
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push('/');
      } else {
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error during registration: ', error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg shadow-[#FDFD96] rounded-lg border-t-4 border-t-teal-500'>
        <h1 className='text-xl font-bold px-2 my-4'>Register</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 px-2 py-4'>
          <input
            type='text'
            placeholder='Full Name'
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>

          {error && (
            <div className='bg-red-500 text-white w-fit rounded-b-md text-sm font-semibold mt-2 ml-2 py-1 px-3'>
              {error}
            </div>
          )}

          <Link href={'/'} className='text-sm mt-3 text-right'>
            Already have an account? <span className='underline'>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
