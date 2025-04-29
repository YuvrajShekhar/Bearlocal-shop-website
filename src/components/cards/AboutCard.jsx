export const AboutCard = ({ about }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold text-primary mb-4">About Us</h2>
        <p className="text-gray-700">{about}</p>
      </div>
    );
  };