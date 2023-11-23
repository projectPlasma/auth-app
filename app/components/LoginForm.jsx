import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg shadow-[#FDFD96] rounded-lg border-t-4 border-t-teal-500'>
        <h1 className='text-xl fonr-bold my-4'>Enter the details</h1>

        <form className='flex flex-col gap-3 px-2 py-4'>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />

          <button className='bg-green-600 font-bold cursor-pointer px-6 py-2 rounded-full hover:bg-green-700'>
            Login
          </button>

          <div className='bg-red-500 text-white w-fit rounded-b-md text-sm font-semibold mt-2 py-1 px-3'>
            Error Message
          </div>

          <Link href={'/register'}>
            Don't have an account? <span className='underline'>Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
