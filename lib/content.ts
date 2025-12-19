import fs from 'fs';
    import path from 'path';
    import matter from 'gray-matter';

    const contentDir = path.join(process.cwd(), 'content');

    export interface Article {
        slug: string;
        title: string;
        date: string;
        description: string;
        author?: string;
        category?: string;
        image?: string;
        featuredImage?: string;
        content: string;
    }

    // gray-matter parses YAML dates as Date objects, convert to string
    function formatDate(date: unknown): string {
        if (!date) return new Date().toISOString().split('T')[0];
        if (date instanceof Date) return date.toISOString().split('T')[0];
        if (typeof date === 'string') return date;
        return new Date().toISOString().split('T')[0];
    }

    // Structural page slugs to exclude from article listings
    const STRUCTURAL_SLUGS = ['about', 'privacy', 'terms', 'contact', 'disclaimer'];

    export function getAllArticles(): Article[] {
        if (!fs.existsSync(contentDir)) return [];

        const files = fs.readdirSync(contentDir)
            .filter(f => f.endsWith('.md'))
            .filter(f => !STRUCTURAL_SLUGS.includes(f.replace(/\.md$/, '')));
        if (files.length === 0) return [];

        return files.map((file) => {
            const slug = file.replace(/\.md$/, '');
            const fullPath = path.join(contentDir, file);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                date: formatDate(data.date),
                description: data.description || '',
                author: data.author,
                category: data.category,
                image: data.image || data.featuredImage,
                featuredImage: data.featuredImage || data.image,
                content
            };
        }).sort((a, b) => (a.date < b.date ? 1 : -1));
    }

    export function getArticleBySlug(slug: string): Article | null {
        try {
            const fullPath = path.join(contentDir, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
            slug,
            title: data.title || slug,
            date: formatDate(data.date),
            description: data.description || '',
            author: data.author,
            category: data.category,
            image: data.image || data.featuredImage,
            featuredImage: data.featuredImage || data.image,
            content
        };
    } catch {
        return null;
    }
}

    // Interface for structural pages
    export interface StructuralPage {
        slug: string;
        title: string;
        content: string;
        html: string;
    }

    // Simple markdown to HTML converter
    function markdownToHtml(markdown: string): string {
        return markdown
            // Headers
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^# (.+)$/gm, '<h1>$1</h1>')
            // Bold and italic
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
            // Lists
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>\n?)+/gm, '<ul>$&</ul>')
            // Paragraphs
            .split('\n\n')
            .map(para => {
                para = para.trim();
                if (!para) return '';
                if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<li')) return para;
                return '<p>' + para.replace(/\n/g, ' ') + '</p>';
            })
            .join('\n');
    }

    // Get structural page (about, privacy, terms, contact)
    export function getStructuralPage(slug: string): StructuralPage | null {
        try {
            const fullPath = path.join(contentDir, `${slug}.md`);
            if (!fs.existsSync(fullPath)) return null;
            
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            
            return {
                slug,
                title: data.title || slug.charAt(0).toUpperCase() + slug.slice(1),
                content,
                html: markdownToHtml(content)
            };
        } catch {
            return null;
        }
    }
