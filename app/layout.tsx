import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Hottrix IT Services - Innovating IT & Telecom Solutions',
  description: 'Leading IT services company providing innovative technology solutions, CCTV systems, biometrics, AMC services, and more for a secure digital future.',
  keywords: 'IT services, telecom solutions, CCTV, biometrics, AMC, contact center, AI chatbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}