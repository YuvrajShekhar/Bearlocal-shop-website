export const ContactCard = ({ location }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold text-primary mb-4">Location & Contact</h2>
        <p className="mb-3">{location.address}</p>
        <p className="mb-3"><span className="font-medium">Phone:</span> {location.phone}</p>
        <p className="mb-4"><span className="font-medium">Email:</span> {location.email}</p>
        <a 
          href={location.mapLink} 
          className="inline-block text-secondary font-bold hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View on Map
        </a>
      </div>
    );
  };