import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: '299Riyal',
    description: 'Best Tech Under 299 SAR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <Script
                    id="google-adsense"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1658375151633555"
                    crossOrigin="anonymous"
                    strategy="beforeInteractive"
                />
            </head>
            <body>
                <header className="header">
                    <div className="header-inner">
                        <Link href="/" className="logo">
                            <span className="logo-icon">2</span>
                            <span>299Riyal</span>
                        </Link>
                        <nav className="nav">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                        </nav>
                    </div>
                </header>
                
                <main>{children}</main>
                
                <footer className="footer">
                    <div className="footer-inner">
                        <div className="footer-section">
                            <h5>299Riyal</h5>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                                Best Tech Under 299 SAR
                            </p>
                        </div>
                        <div className="footer-section">
                            <h5>Quick Links</h5>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h5>Legal</h5>
                            <ul>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        © {new Date().getFullYear()} 299Riyal. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
