import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'The best app for tracking your mood through out your life. All you have to do is be honest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="w-screen h-screen flex justify-center items-center">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
