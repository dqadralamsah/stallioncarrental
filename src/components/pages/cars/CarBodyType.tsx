import type { BodyType } from '@/types/cars';
import { Button } from '@/components/ui/button';

type Props = {
  onFilter: (type?: BodyType) => void;
};

const bodytype: { label: string; value?: BodyType }[] = [
  { label: 'All' },
  { label: 'Sedan', value: 'sedan' },
  { label: 'Hatchback', value: 'hatchback' },
  { label: 'MPV', value: 'mpv' },
  { label: 'SUV', value: 'suv' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'Minibus', value: 'minibus' },
];

export default function BodyTypeFilter({ onFilter }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {bodytype.map((item) => (
        <Button key={item.label} onClick={() => onFilter(item.value)}>
          {item.label}
        </Button>
      ))}
    </div>
  );
}
