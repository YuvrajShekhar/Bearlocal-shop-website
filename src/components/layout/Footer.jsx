export const Footer = ({ name }) => {
    return (
      <footer className="bg-primary text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    );
  };