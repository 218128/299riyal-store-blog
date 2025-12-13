import { getArticleBySlug, getAllArticles } from '@/lib/content';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return <div>Not found</div>;
    return (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1>{article.title}</h1>
            <ReactMarkdown>{article.content}</ReactMarkdown>
        </main>
    );
}
