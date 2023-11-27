import LoginForm from './components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/dashboard');

  return (
    <main className='flex h-screen flex-col items-center justify-between p-24'>
      <LoginForm />
    </main>
  );
};

export default Home;

// GTCoding => 54:49 => "Authentication using Next Auth"
