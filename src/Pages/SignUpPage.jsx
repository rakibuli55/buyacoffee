import { useContext } from "react";
import AuthLeft from "../components/auth/AuthLeft";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SslLogin from "../components/sslcomponent/SslLogin";
import FacebookIcon from "../assets/images/Facebook-ssl.svg";
import GoogleIcon from "../assets/images/google-ssl.svg";
import { UsernameContext } from "../context";
import Logo from "../assets/images/logo.svg";

function SignUpPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/signupsteps");
  };

  const { username } = useContext(UsernameContext);

  return (
    <section>
      <div className="flex items-start">
        <div className="w-[40%] hidden lg:block">
          <AuthLeft />
        </div>
        <div className="auth-right lg:w-[60%] min-h-screen max-h-screen pt-5 lg:pt-[60px] pr-5 lg:pr-[32px] pl-5 lg:pl-[136px] pb-[100px] overflow-y-auto">
          <div className="text-right">
            <div className="flex items-center justify-between lg:justify-end">
              <img className="lg:hidden" src={Logo} alt="" />
              <p className="text-base lg:text-[18px]">
                <span className="hidden lg:inline">Don't have an account?</span>
                <Link
                  to={"/login"}
                  className="duration-200 ease-in-out hover:text-primaryColor underline lg:no-underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          <div className="auth-box mt-14 relative">
            <h1 className="auth-header">Welcome {username || "Guest"}</h1>
            <div>
              <div className="lg:mt-14">
                <SslLogin>
                  <img
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={FacebookIcon}
                    alt=""
                  />
                  Continue with Google
                </SslLogin>
              </div>
              <div className="mt-6">
                <SslLogin>
                  <img
                    className="w-5 h-5 md:w-8 md:h-8"
                    src={GoogleIcon}
                    alt=""
                  />
                  Continue with Facebook
                </SslLogin>
              </div>
            </div>
            {/* divider  */}
            <div className="mt-9 lg:mt-14 relative">
              <span className="block w-full h-[1px] bg-[rgba(0,0,0,0.12)]"></span>
              <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-1 text-base text-paraDark">
                or signup with
              </span>
            </div>
            <form
              className="mt-10 lg:mt-[56px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* email  */}
              <div className="mt-4">
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={`auth-input ${
                    errors.email ? "border-red-300" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* password  */}
              <div className="mt-4">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className={`auth-input ${
                    errors.password ? "border-red-300" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex md:block items-center">
                <input
                  {...register("terms", {
                    required: "You must accept the terms and conditions",
                  })}
                  type="checkbox"
                  id="terms"
                  name="terms"
                />
                <label
                  htmlFor="terms"
                  className="text-sm ml-2 mt-3 inline-block"
                >
                  By continuing, you agree to the terms of service and privacy
                  policy.
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.terms.message}
                </p>
              )}
              {/* submit btn  */}
              <button type="submit" className="text-center w-full mt-8">
                <ButtonPrimary text="Sign up" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
