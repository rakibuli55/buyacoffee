import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import ButtonPrimary from "../components/buttons/ButtonPrimary";

function Navbar() {
  return (
    <header className="mt-8 fixed w-full z-20">
      <div className="container py-2 px-4 rounded-[200px] bg-white">
        <div className="flex items-center justify-between">
          <div  data-aos="zoom-in">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div>
            {/* menu  */}
            <ul className="flex items-center gap">
              <li className="mr-12 font-semibold duration-200 ease-in-out hover:text-primaryColor" data-aos="fade-In" data-aos-delay="100">
                <NavLink to={"/"}>Explore Creators</NavLink>
              </li>
              <li className="mr-10 font-semibold duration-200 ease-in-out hover:text-primaryColor" data-aos="fade-In" data-aos-delay="200">
                <NavLink to={"/"}>Log In</NavLink>
              </li>
              <li className="signup" data-aos="fade-In" data-aos-delay="300">
                <Link to={"/"} className="inline-block">
                <ButtonPrimary text="Sign up" />
                </Link>
              </li>
            </ul>
                
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
