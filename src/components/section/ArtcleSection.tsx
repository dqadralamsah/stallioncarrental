'use client';

import type { ArticleMeta } from '@/types/articles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ArticleCard from '../module/ArticleCard';

type ArticleSectionProps = {
  articles: ArticleMeta[];
};

export default function ArticleSection({ articles }: ArticleSectionProps) {
  return (
    <section className="p-4 space-y-8 lg:px-8">
      <div className="justify-items-center text-center">
        <p className="w-fit text-sm font-medium border-b">ARTICLES</p>
        <h1 className="text-3xl font-semibold lg:text-4xl">What's on Stellion Car Rental</h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {articles.map((item) => (
          <SwiperSlide key={item.slug} className="justify-items-center pb-8">
            <ArticleCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
