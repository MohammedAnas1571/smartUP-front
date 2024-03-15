import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

const NavBar = () => {
  return (
    <div className="flex justify-between dark:bg-slate-900  w-full items-center p-7 bg-slate-50 shadow-xl transition-shadow duration-300 transform hover:shadow-md hover:-translate-y-1">
      <h2 className="text-3xl font-serif font-semibold">Ask me</h2>
      <ul className="flex gap-9 font-medium">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/career">
          <li>Career News</li>
        </Link>
        <li>Experts</li>
        <Link to="/login">
          <li>Sign in</li>
        </Link>
      </ul>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
