import React from "react";
import AuthLeft from "../components/auth/AuthLeft";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SslLogin from "../components/sslcomponent/SslLogin";
import FacebookIcon from "../assets/images/Facebook-ssl.svg";
import GoogleIcon from "../assets/images/google-ssl.svg";
import toast, { Toaster } from "react-hot-toast";
import Logo from '../assets/images/logo.svg'

function LoginPage() {
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
    toast.success("Login successfull");
    setTimeout(() => {
      navigate("/dashboard/home");
    }, 2000);
  };

  return (
    <section>
      <div className="flex items-start">
        <div className="w-[40%] hidden lg:block">
          <AuthLeft />
        </div>
        <div className="auth-right w-full lg:w-[60%] min-h-screen max-h-screen pt-5 lg:pt-[60px] pr-5 lg:pr-[32px] pl-5 lg:pl-[136px] pb-[100px] overflow-y-auto">
          <div className="text-right">
            <div className="flex items-center justify-between lg:justify-end">
              <img className="lg:hidden" src={Logo} alt="" />
              <p className="text-base lg:text-[18px]">
                <span className="hidden lg:inline">Don't have an account?</span>
                <Link
                  to={"/signup"}
                  className="duration-200 ease-in-out hover:text-primaryColor underline lg:no-underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="auth-box">
            <form className="mt-10 lg:mt-[56px]" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="auth-header">Welcome back</h1>
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
                      message: "Password must be at least 8 characters",
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
              {/* submit btn  */}
              <button type="submit" className="text-center w-full mt-8">
                <ButtonPrimary text="Continue with email" />
              </button>
            </form>
            {/* divider  */}
            <div className="mt-9 lg:mt-14 relative">
              <span className="block w-full h-[1px] bg-[rgba(0,0,0,0.12)]"></span>
              <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-1 text-base text-paraDark">
                or login with
              </span>
            </div>
            <div>
              <div className="mt-12 lg:mt-14">
                <SslLogin>
                  <img className="w-5 h-5 md:w-8 md:h-8" src={FacebookIcon} alt="" />
                  Continue with Google
                </SslLogin>
              </div>
              <div className="mt-6">
                <SslLogin>
                  <img className="w-5 h-5 md:w-8 md:h-8" src={GoogleIcon} alt="" />
                  Continue with Facebook
                </SslLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default LoginPage;
