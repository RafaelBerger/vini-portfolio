import logo from "../assets/logovini.png";

function Header() {
  return (
    <>
      <nav className="flex w-screen justify-between pt-6 px-32  ">
        <ul className="flex lg:w-2/5 2xl:w-1/4 justify-around items-center text-xl ">
          <li>TRABALHOS</li>
          <li>CONTATO</li>
          <li>SOBRE MIM</li>
        </ul>
        <div>
          <img src={logo} alt="Logo" className="w-48" />
        </div>
      </nav>
    </>
  );
}

export default Header;
