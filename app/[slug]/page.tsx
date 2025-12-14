import { getArticleBySlug, getAllArticles } from '../../lib/content';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    return {
        title: article?.title || 'Article',
        description: article?.description || '',
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return (
            <div className="article">
                <div className="content-wrapper" style={{ textAlign: 'center' }}>
                    <h1>Article Not Found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <article className="article">
            <header className="article-header">
                {article.image && (
                    <div className="article-hero-image" style={{ marginBottom: '2rem' }}>
                        <img
                            src={article.image}
                            alt={article.title}
                            style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover', maxHeight: '500px' }}
                        />
                    </div>
                )}
                <h1>{article.title}</h1>
                <div className="article-meta">
                    <div className="article-author">
                        <span className="author-avatar">AA</span>
                        <span>Ahmed Al-Rashid</span>
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                </div>
            </header>

            <div className="article-content">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            <div className="author-box">
                <div className="author-box-avatar">AA</div>
                <div className="author-box-content">
                    <h4>Ahmed Al-Rashid</h4>
                    <p className="author-box-role">Tech Editor</p>
                    <p className="author-box-bio">Tech enthusiast with 8+ years helping Saudi shoppers find the best deals on quality gadgets.</p>
                </div>
            </div>
        </article>
    );
}
