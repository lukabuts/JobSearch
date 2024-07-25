import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative py-5 z-50">
      <h1 className="text-3xl font-bold text-center uppercase text-tealBlue">
        <Link to="/">Jobly</Link>
      </h1>
    </header>
  );
};

export default Header;
