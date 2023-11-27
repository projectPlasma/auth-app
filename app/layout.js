import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './Providers';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AltVICE',
  description: 'AltVice - Embrace your kinks',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <AuthProvider>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
