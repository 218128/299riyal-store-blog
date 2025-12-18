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
