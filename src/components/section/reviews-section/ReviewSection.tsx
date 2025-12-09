import ReviewWrapper from './ReviewWrapper';

export default function ReviewSection() {
  return (
    <section className="px-4 space-y-8 lg:px-8">
      <div className="justify-items-center space-y-1">
        <p className="w-fit font-medium border-b-2">REVIEWS</p>
        <h1 className="text-4xl font-semibold">What They Say</h1>
      </div>
      <ReviewWrapper />
    </section>
  );
}
