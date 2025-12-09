import { Card, CardContent } from '@/components/ui/card';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

type reviewDetail = {
  id: number;
  name: string;
  rating: number;
  review: string;
};

export default function ReviewCard({ review }: { review: reviewDetail }) {
  return (
    <>
      <Card key={review.id} className="w-100 h-full">
        <CardContent className="space-y-4">
          <div className="flex items-center Justify-center gap-2">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <p className="">{review.review}</p>
          <h3 className="">{review.name}</h3>
        </CardContent>
      </Card>
    </>
  );
}
