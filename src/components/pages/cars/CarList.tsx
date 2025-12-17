import type { Car } from '@/types/cars';
import CarCard from '@/components/module/CarCard';

type CarListProps = {
  cars: Car[];
};

export default function CarList({ cars }: CarListProps) {
  if (!cars.length) {
    return <div className="py-16 text-center text-muted-foreground">No cars available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} data={car} />
      ))}
    </div>
  );
}
