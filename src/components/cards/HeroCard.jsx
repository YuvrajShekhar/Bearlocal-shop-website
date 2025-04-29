export const HeroCard = ({ name, photo }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">{name}</h2>
        </div>
      </div>
    );
  };