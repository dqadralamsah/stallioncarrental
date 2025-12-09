import Image from 'next/image';
import { cars } from '@/data/cars/cars';
import { getAllArticles } from '@/lib/getArticles';
import PromotionSection from '@/components/section/PromotionSection';
import FeatureSection from '@/components/section/FeatureSection';
import CarSection from '@/components/section/CarSection';
import AboutSection from '@/components/section/AboutSection';
import CtaSection from '@/components/section/CtaSection';
import ArticleSection from '@/components/section/ArtcleSection';

export default function Home() {
  // Fetch Cars
  const carsRecomended = [...cars].sort(() => Math.random() - 0.5).slice(0, 6);

  // Fetch Artciles
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="mt-16 space-y-8">
      {/* Hero Section */}
      <section className="px-4 lg:px-8">
        <div className="bg-gray-300 w-full h-150 rounded-lg"></div>
      </section>

      {/* Promotion Section */}
      <PromotionSection />

      {/* Cars Section */}
      <CarSection cars={carsRecomended} />

      {/* Features Section */}
      <FeatureSection />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action */}
      <CtaSection />

      {/* Articles */}
      <ArticleSection articles={articles} />
    </div>
  );
}
