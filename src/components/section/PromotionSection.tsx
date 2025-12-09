'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const promotions = [
  { image: '/image/promotions/img-promotion-sample.png', id: 1 },
  { image: '/image/promotions/img-promotion-sample.png', id: 2 },
  { image: '/image/promotions/img-promotion-sample.png', id: 3 },
  { image: '/image/promotions/img-promotion-sample.png', id: 4 },
];

export default function PromotionSection() {
  return (
    <section className="p-4 space-y-8 lg:px-8">
      <div className="justify-items-center text-center">
        <p className="w-fit text-sm font-medium border-b">PROMOTION</p>
        <h1 className="text-3xl font-semibold lg:text-4xl">Special Promotion</h1>
        <p className="text-sm text-gray-700 lg:text-base">
          Enjoy exclusive deals and limited-time offers for your next ride with SCARR.
        </p>
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
        {promotions.map((promo) => (
          <SwiperSlide key={promo.id} className="justify-items-center pb-8">
            <div className="w-full max-w-100 h-full max-h-60 rounded-2xl overflow-hidden">
              <Image
                src={promo.image}
                alt="Promotion"
                width={400}
                height={240}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
