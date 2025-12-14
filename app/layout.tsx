import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: '299Riyal - Best Tech Under 299 SAR',
        template: '%s | 299Riyal'
    },
    description: 'Your go-to destination for the best budget tech products under 299 SAR. Reviews, comparisons, and buying guides.',
    keywords: ['budget tech', 'affordable electronics', 'Saudi Arabia', '299 SAR', 'tech reviews'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://299riyal.store',
        siteName: '299Riyal',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    id="google-adsense"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1658375151633555"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </head>
            <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen`}>
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                299Riyal
                            </Link>
                            <nav className="flex gap-6">
                                <Link href="/" className="text-slate-600 hover:text-purple-600 transition">Home</Link>
                                <Link href="/about" className="text-slate-600 hover:text-purple-600 transition">About</Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-6xl mx-auto px-4 py-8">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">299Riyal</h3>
                                <p className="text-sm">Best Tech Under 299 SAR</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/" className="hover:text-purple-400 transition">Home</Link></li>
                                    <li><Link href="/about" className="hover:text-purple-400 transition">About Us</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-3">Legal</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="hover:text-purple-400 transition">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
                            © 2024 299Riyal. All rights reserved.
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
