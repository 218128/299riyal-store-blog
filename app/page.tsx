import { getAllArticles } from '@/lib/content';
import Link from 'next/link';

export default function Home() {
    const articles = getAllArticles();
    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1>Blog</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.slug}>
                        <Link href={`/${article.slug}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
