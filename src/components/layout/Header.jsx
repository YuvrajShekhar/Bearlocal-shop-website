export const Header = ({ name }) => {
    return (
      <header className="bg-primary text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">{name}</h1>
        </div>
      </header>
    );
  };