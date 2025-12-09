import reviews from '@/data/reviews.json';
import ReviewCard from './ReviewCard';

export default function ReviewlWrapper() {
  return (
    <div className="flex items-center justify-between">
      {reviews.map((item) => (
        <ReviewCard key={item.id} review={item} />
      ))}
    </div>
  );
}
