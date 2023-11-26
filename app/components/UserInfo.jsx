'use client';

import { signOut } from 'next-auth/react';

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='flex flex-col gap-2 my-6 shadow-lg shadow-[#FDFD96] p-8 bg-zinc-300/10 rounded-lg border-t-4 border-t-teal-500'>
        <div>
          Name: <span className='font-bold'>John Smith</span>
        </div>
        <div>
          Email: <span className='font-bold'>john@example.com</span>
        </div>
        <button
          onClick={() => signOut()}
          className='bg-red-500 text-white shadow-md shadow-red-400/80 rounded-full font-bold px-6 py-2 mt-3'
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
