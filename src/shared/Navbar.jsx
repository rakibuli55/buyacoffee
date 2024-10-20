import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import ButtonPrimary from "../components/buttons/ButtonPrimary";

function Navbar() {
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/createaccount"||
    location.pathname === "/signupsteps"
  ) {
    return null;
  }
  return (
    <header className="mt-8 fixed w-full z-20">
      <div className="container py-2 px-4 rounded-[200px] bg-white">
        <div className="flex items-center justify-between">
          <div data-aos="zoom-in">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div>
            {/* menu  */}
            <ul className="flex items-center gap">
              <li
                className="mr-12 font-semibold duration-200 ease-in-out hover:text-primaryColor"
                data-aos="fade-In"
                data-aos-delay="100"
              >
                <NavLink to={"/"}>Explore Creators</NavLink>
              </li>
              <li
                className="mr-10 font-semibold duration-200 ease-in-out hover:text-primaryColor"
                data-aos="fade-In"
                data-aos-delay="200"
              >
                <NavLink to={"/login"}>Log In</NavLink>
              </li>
              <li className="signup" data-aos="fade-In" data-aos-delay="300">
                <Link to={"/signup"} className="inline-block">
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
