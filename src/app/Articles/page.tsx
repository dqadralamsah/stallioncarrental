import { getAllArticles } from '@/lib/getArticles';
import AutoBreadcrumb from '@/components/module/AutoBreadcrumb';
import ArticleList from '@/components/pages/articles/ArticleList';

export default function ArticlePage() {
  const articles = getAllArticles();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="w-full h-75 bg-gray-300"></div>

      {/* Breadcrumb */}
      <div className="px-4 lg:px-8">
        <AutoBreadcrumb />
      </div>

      {/* Article List */}
      <section className="px-4 space-y-8 lg:px-8">
        <div className="justify-items-center text-center">
          <p className="w-fit text-sm font-medium border-b">ARTICLES</p>
          <h1 className="text-3xl font-semibold lg:text-4xl">What's on Stellion Car Rental</h1>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
}
