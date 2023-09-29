import logo from "../assets/logovini.png";
import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <>
      <nav className="navbar-mobile flex w-screen justify-between pt-6 px-32  ">
        <ul
          className={`ul-navbar flex lg:w-2/5 2xl:w-1/4 justify-around items-center text-xl ${
            isActive ? "" : "sm:hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-gray-400 transition-colors">
              TRABALHOS
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className="hover:text-gray-400 transition-colors"
            >
              CONTATO
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="hover:text-gray-400 transition-colors">
              SOBRE MIM
            </Link>
          </li>
        </ul>
        <div>
          <button onClick={handleClick}>
            <List size={32} weight="bold" className="md:hidden" />
          </button>
          <img src={logo} alt="Logo" className="w-48 sm:hidden" />
        </div>
      </nav>
    </>
  );
}

export default Header;
