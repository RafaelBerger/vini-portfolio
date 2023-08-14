import logo from "../assets/logovini.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="flex w-screen justify-between pt-6 px-32  ">
        <ul className="flex lg:w-2/5 2xl:w-1/4 justify-around items-center text-xl ">
          <li>
            <Link to="/">TRABALHOS</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
          <li>
            <Link to="/sobre">SOBRE MIM</Link>
          </li>
        </ul>
        <div>
          <img src={logo} alt="Logo" className="w-48" />
        </div>
      </nav>
    </>
  );
}

export default Header;
