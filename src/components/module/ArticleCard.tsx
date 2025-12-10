'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArticleMeta } from '@/types/articles';

type ArticleProps = {
  data: ArticleMeta;
};

export default function ArticleCard({ data }: ArticleProps) {
  const { title, excerpt, date } = data;

  return (
    <>
      <div className="w-fit max-w-100 space-y-2">
        {/* Image */}
        <div className="w-full rounded-2xl overflow-hidden bg-blue-50">
          <Image
            src="/image/cars/Innova-Zenix.png"
            width={400}
            height={0}
            alt="Toyota-New-Kijang-Innova-Zenix"
            className="object-contain transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* Date */}
        <p className="text-sm">{date}</p>

        {/* Title */}
        <h1 className="font-bold line-clamp-2">{title}</h1>

        {/* Excerpt */}
        <p className="text-sm line-clamp-5">{excerpt}</p>

        <Link href="/" className="text-sm font-bold">
          SEE DETAIL
        </Link>
      </div>
    </>
  );
}
