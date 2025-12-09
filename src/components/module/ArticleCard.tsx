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
      <div className="w-fit space-y-2">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={'/image/cars/Innova-Zenix.png'}
            width={400}
            height={0}
            alt="Toyota-New-Kijang-Innova-Zenix"
            className="bg-blue-50 transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* Date */}
        <div>
          <p className="text-sm">{date}</p>
        </div>

        <div>
          <h1 className="font-bold line-clamp-2">{title})</h1>
        </div>
        <div>
          <h1 className="text-sm line-clamp-5">{excerpt}</h1>
        </div>
        <div>
          <Link href={'/'} className="text-sm font-bold">
            SEE DETAIL
          </Link>
        </div>
      </div>
    </>
  );
}
