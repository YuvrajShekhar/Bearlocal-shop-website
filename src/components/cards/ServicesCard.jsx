export const ServicesCard = ({ services }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold text-primary mb-4">Our Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    );
  };