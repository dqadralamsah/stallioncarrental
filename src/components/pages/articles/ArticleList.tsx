import type { ArticleMeta } from '@/types/articles';
import ArticleCard from '@/components/module/ArticleCard';

type Props = {
  articles: ArticleMeta[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.slug} data={article} />
      ))}
    </div>
  );
}
