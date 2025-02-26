import { useForm } from "react-hook-form";
import ButtonPrimary from "../../buttons/ButtonPrimary";
import { useContext } from "react";
import { UsernameContext } from "../../../context";
import { useNavigate } from "react-router-dom";

function Searchbar({ width, btnText, webUrl }) {
  const {register, handleSubmit} = useForm();
  const {setUsername} = useContext(UsernameContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setUsername(data.username);
    setTimeout(() => {
      navigate('/signup');
    }, 100); 
  }
  return (
    <form className="md:shadow-[8px_8px_32px_0px_rgba(34,34,34,0.13)] rounded-[200px] relative" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-sm relative inline-block top-9 ml-[-100px] md:ml-0 md:text-[20px] text-headingColor font-bold md:absolute md:top-1/2 md:translate-y-[-50%] md:left-8">
          {webUrl}
        </p>
        <div>
          <input
            className="w-full h-full pr-2 focus:outline-none md:py-6 md:pl-[208px] rounded-[200px] md:text-[20px] text-headingColor font-bold placeholder:font-medium shadow-[8px_8px_32px_0px_rgba(34,34,34,0.13)] md:shadow-none py-4 px-10 pl-[53%] text-sm"
            {...register("username")}
            type="text"
            name="username"
            id="username"
            placeholder="username here"
          />
        </div>
        <button
          type="submit"
          className="text-base w-full md:w-auto md:absolute md:right-2 top-1/2 md:translate-y-[-50%] mt-3 md:mt-0"
        >
          <ButtonPrimary text={btnText} fontSize="18px" />
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
