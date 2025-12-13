import { getAllArticles } from '../lib/content';
import Link from 'next/link';

export default function Home() {
    const articles = getAllArticles();
    
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>299Riyal</h1>
                    <p className="hero-tagline">Best Tech Under 299 SAR</p>
                </div>
            </section>
            
            <section className="container">
                {articles.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Fresh content coming soon. Stay tuned!
                        </p>
                    </div>
                ) : (
                    <div className="articles-grid">
                        {articles.map((article) => (
                            <article key={article.slug} className="article-card">
                                <div className="article-card-image">📄</div>
                                <div className="article-card-content">
                                    <span className="article-card-category">Article</span>
                                    <h3>
                                        <Link href={`/${article.slug}`}>{article.title}</Link>
                                    </h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', marginBottom: '1rem' }}>
                                        {article.description || 'Read this article to learn more...'}
                                    </p>
                                    <div className="article-card-meta">
                                        <span>{article.date}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}
