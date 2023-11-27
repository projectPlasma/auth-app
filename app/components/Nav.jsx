'use client';

import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className=''>
      <Link href='/' className='grid justify-center items-center pt-3'>
        <Image
          src='/images/altvice_web_logo.png'
          alt='AltVICE Logo'
          width={300}
          height={300}
        />
      </Link>
    </nav>
  );
};

export default Nav;
