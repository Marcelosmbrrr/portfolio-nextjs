import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
// Custom
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio - SMBR',
    description: 'development portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <ThemeProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
