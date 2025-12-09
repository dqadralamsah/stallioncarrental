import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ArticleMeta, Article } from '@/types/articles';

const articlesDir = path.join(process.cwd(), 'src/data/articles');

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir);

  const articles = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(articlesDir, filename), 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      thumbnail: data.thumbnail,
      date: data.date,
    };
  });

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const files = fs.readdirSync(articlesDir);
  const filename = files.find((file) => file.includes(slug));

  if (!filename) return null;

  const fileContent = fs.readFileSync(path.join(articlesDir, filename), 'utf8');
  const { data, content } = matter(fileContent);

  return {
    meta: data as ArticleMeta,
    content,
  };
}
