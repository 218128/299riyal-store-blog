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
    content: string;
}

export function getAllArticles(): Article[] {
    if (!fs.existsSync(contentDir)) return [];

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
    if (files.length === 0) return [];

    return files.map((file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(contentDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title || slug,
            date: data.date ? new Date(data.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            description: data.description || '',
            author: data.author,
            category: data.category,
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
            date: data.date ? new Date(data.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            description: data.description || '',
            author: data.author,
            category: data.category,
            content
        };
    } catch {
        return null;
    }
}
