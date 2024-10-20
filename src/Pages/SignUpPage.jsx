import { useContext } from "react";
import AuthLeft from "../components/auth/AuthLeft";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import SslLogin from "../components/sslcomponent/SslLogin";
import FacebookIcon from "../assets/images/Facebook-ssl.svg";
import GoogleIcon from "../assets/images/google-ssl.svg";
import { UsernameContext } from "../context";

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
    navigate('/signupsteps')
  };

  const {username} = useContext(UsernameContext)

  return (
    <section>
      <div className="flex items-start">
        <AuthLeft />
        <div className="auth-right w-[60%] min-h-screen max-h-screen pt-[60px] pr-[32px] pl-[136px] pb-[100px] overflow-y-auto">
          <div className="text-right">
            <p className="text-[18px]">
            Already have an account?
              <Link
                to={"/login"}
                className="duration-200 ease-in-out hover:text-primaryColor"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="auth-box mt-14 relative">
            <h1 className="auth-header">Welcome {username || "Guest"}</h1>     
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
            {/* divider  */}
            <div className="mt-14 relative">
              <span className="block w-full h-[1px] bg-[rgba(0,0,0,0.12)]"></span>
              <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-1 text-base text-paraDark">
                or signup with
              </span>
            </div>
            <form className="mt-[56px]" onSubmit={handleSubmit(onSubmit)}>
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
              <div>
                <input 
                {...register("terms", {required: 'You must accept the terms and conditions'})}
                type="checkbox"
                id="terms"
                name="terms"
                 />
                 <label htmlFor="terms" className="ml-2 mt-3 inline-block">By continuing, you agree to the terms of service and privacy policy.
                 </label>
                 {errors.terms && (
                <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
              )}
              </div>
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
