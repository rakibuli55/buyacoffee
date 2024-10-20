import AuthLeft from "../components/auth/AuthLeft";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import { useContext } from "react";
import { UsernameContext } from "../context";

function CreateAccount() {
  const {setUsername} = useContext(UsernameContext);
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
    setUsername(data.username);
    setTimeout(() => {
      navigate('/signup')
    }, 500)
  };

  return (
    <section>
      <div className="flex items-start">
        <AuthLeft />
        <div className="auth-right w-[60%] min-h-screen max-h-screen pt-[60px] pr-[32px] pl-[136px] pb-[100px] overflow-y-auto">
          <div className="text-right">
            <p className="text-[18px]">
              Already have an accoun?
              <Link
                to={"/signup"}
                className="duration-200 ease-in-out hover:text-primaryColor"
              >
                Sign in
              </Link>
            </p>
          </div>
          <div className="auth-box">
            <form className="mt-[150px]" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="auth-header text-left mb-0">
                Create your account
              </h1>
              <p className="text-[18px] text-paraDark mt-3">
                Choose a username for your page.
              </p>
              <div className="mt-8 relative">
                <input
                {...register('username', {required:'Username is required.'})}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  className={`py-3 px-6 pl-[180px] rounded-[8px] bg-authInput border text-[18px] font-medium text-headingColor w-full placeholder:text-headingColor focus:outline-none ${errors.username ? 'border-red-300' : ''}`}
                />
                
                <p className="absolute top-1/2 left-6 translate-y-[-50%] font-medium text-[18px]">giftacoffee.com/</p>
                
              </div>
              {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              {/* submit btn  */}
              <button type="submit" className="text-center w-full mt-8">
                <ButtonPrimary text="Next" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;
