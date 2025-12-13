import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface Article {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
}

export function getAllArticles(): Article[] {
    if (!fs.existsSync(contentDir)) return [];
    const files = fs.readdirSync(contentDir);
    return files.map((file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(contentDir, file);
        const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
        return { slug, content, ...data } as Article;
    }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
    try {
        const fullPath = path.join(contentDir, `${slug}.md`);
        const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
        return { slug, content, ...data } as Article;
    } catch {
        return null;
    }
}
