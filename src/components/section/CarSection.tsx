'use client';

import type { Car } from '@/types/cars';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CarCard from '../module/CarCard';

type CarSectionPorps = {
  cars: Car[];
};

export default function CarSection({ cars }: CarSectionPorps) {
  return (
    <section className="p-4 space-y-8 lg:px-8">
      {/* Header */}
      <div className="justify-items-center text-center">
        <p className="w-fit text-sm font-medium border-b">Cars</p>
        <h1 className="text-3xl font-semibold lg:text-4xl">Our Cars</h1>
        <p className="text-sm text-gray-700 lg:text-base">
          Enjoy exclusive deals and limited-time offers for your next ride with SCARR.
        </p>
      </div>

      {/* Content */}
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
        {cars.map((car) => (
          <SwiperSlide key={car.id} className="justify-items-center pb-8">
            <CarCard data={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
