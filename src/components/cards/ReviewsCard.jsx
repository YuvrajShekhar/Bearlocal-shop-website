export const ReviewsCard = ({ reviews }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold text-primary mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="text-accent text-lg">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="italic mt-1">"{review.comment}"</p>
              <p className="text-gray-600 font-medium mt-1">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };