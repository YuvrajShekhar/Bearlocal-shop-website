export const CtaCard = ({ phone }) => {
    const cleanPhone = phone.replace(/\D/g, '');
    
    return (
      <div className="bg-secondary text-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-bold mb-4">Visit Us Today!</h2>
        <p className="mb-4">We look forward to serving you.</p>
        <a 
          href={`tel:${cleanPhone}`} 
          className="inline-block bg-white text-secondary font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors"
        >
          Call Now
        </a>
      </div>
    );
  };