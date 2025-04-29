export const TimingsCard = ({ timings }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold text-primary mb-4">Opening Hours</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="font-medium">Monday - Friday:</span>
            <span>{timings.weekdays}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Saturday - Sunday:</span>
            <span>{timings.weekends}</span>
          </li>
          <li className="italic text-gray-600">{timings.closed}</li>
        </ul>
      </div>
    );
  };