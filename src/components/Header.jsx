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
      <nav className=" navbar-mobile 3xl:px-80 flex w-screen justify-between pt-6 px-32  ">
        <ul
          className={`sm:w-full ul-navbar flex justify-around items-center text-xl lg:w-3/6 2xl:w-2/5 ${
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
            <List size={32} weight="bold" className="lg:hidden" />
          </button>
          <img src={logo} alt="Logo" className="w-48 sm:hidden" />
        </div>
      </nav>
    </>
  );
}

export default Header;
