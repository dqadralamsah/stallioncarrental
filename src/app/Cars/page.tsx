'use client';

import { useMemo, useState } from 'react';
import { cars } from '@/data/cars/cars';
import type { BodyType } from '@/types/cars';
import AutoBreadcrumb from '@/components/module/AutoBreadcrumb';
import BodyTypeFilter from '@/components/pages/cars/CarBodyType';
import CarList from '@/components/pages/cars/CarList';
import PaginationControl from '@/components/module/PaginationControl';

const ITEMS_PER_PAGE = 6;

export default function CarsPage() {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  const paginatedCars = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredCars.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCars, page]);

  const handleFilter = (type?: BodyType) => {
    setPage(1); // RESET PAGE
    if (!type) {
      setFilteredCars(cars);
      return;
    }
    setFilteredCars(cars.filter((car) => car.bodytype === type));
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="w-full h-75 bg-gray-300"></div>

      {/* Breadcrumb */}
      <div className="px-4 lg:px-8">
        <AutoBreadcrumb />
      </div>

      <section className="px-4 space-y-8 lg:px-8">
        {/* Header */}
        <div className="justify-items-center text-center">
          <p className="w-fit text-sm font-medium border-b">Cars</p>
          <h1 className="text-3xl font-semibold lg:text-4xl">Our Cars</h1>
          <p className="text-sm text-gray-700 lg:text-base">
            Enjoy exclusive deals and limited-time offers for your next ride with SCARR.
          </p>
        </div>

        {/* Filter */}
        <BodyTypeFilter onFilter={handleFilter} />

        {/* List */}
        <CarList cars={paginatedCars} />

        {/* Pagination */}
        <PaginationControl page={page} totalpages={totalPages} onChange={setPage} />
      </section>
    </div>
  );
}
