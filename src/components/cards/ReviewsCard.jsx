export const ReviewsCard = ({ googleMapsUrl }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 relative">
        <h2 className="text-xl font-bold text-primary mb-4">Customer Reviews</h2>
        
        {/* Your existing reviews content */}
        <div className="space-y-4 mb-6">
          {/* Sample review - replace with your actual reviews */}
          <div className="border-b border-gray-100 pb-4">
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <p className="italic mt-1">"Great service and friendly staff!"</p>
            <p className="text-gray-600 font-medium mt-1">- Happy Customer</p>
          </div>
        </div>
  
        {/* Improved button implementation */}
        <div className="relative z-10">
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </div>
    );
  };