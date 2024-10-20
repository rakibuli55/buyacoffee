import React from "react";
import AuthLeft from "../components/auth/AuthLeft";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SslLogin from "../components/sslcomponent/SslLogin";
import FacebookIcon from "../assets/images/Facebook-ssl.svg";
import GoogleIcon from "../assets/images/google-ssl.svg";

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <section>
      <div className="flex items-start">
        <AuthLeft />
        <div className="auth-right w-[60%] min-h-screen max-h-screen pt-[60px] pr-[32px] pl-[136px] pb-[100px] overflow-y-auto">
          <div className="text-right">
            <p className="text-[18px]">
              Don't have an account?
              <Link
                to={"/signup"}
                className="duration-200 ease-in-out hover:text-primaryColor"
              > 
                Sign up
              </Link>
            </p>
          </div>
          <div className="auth-box">
            <form className="mt-[56px]" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="auth-header">Welcome back</h1>
              {/* email  */}
              <div className="mt-4">
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={`py-3 px-6 rounded-[8px] bg-authInput border text-[18px] font-medium text-headingColor w-full placeholder:text-headingColor focus:outline-none ${
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
                  className={`py-3 px-6 rounded-[8px] bg-authInput border text-[18px] font-medium text-headingColor w-full placeholder:text-headingColor focus:outline-none ${
                    errors.password ? "border-red-300" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* submit btn  */}
              <button type="submit" className="text-center w-full mt-8">
                <ButtonPrimary text="Continue with email" />
              </button>
            </form>
            {/* divider  */}
            <div className="mt-14 relative">
              <span className="block w-full h-[1px] bg-[rgba(0,0,0,0.12)]"></span>
              <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-1 text-base text-paraDark">
                or login with
              </span>
            </div>
            <div>
              <div className="mt-14">
                <SslLogin>
                  <img src={FacebookIcon} alt="" />
                  Continue with Google
                </SslLogin>
              </div>
              <div className="mt-6">
                <SslLogin>
                  <img src={GoogleIcon} alt="" />
                  Continue with Facebook
                </SslLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
