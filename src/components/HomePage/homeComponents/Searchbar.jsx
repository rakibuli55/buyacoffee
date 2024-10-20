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
    <form className="pr-2 shadow-[8px_8px_32px_0px_rgba(34,34,34,0.13)] rounded-[200px] relative" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-[20px] text-headingColor font-bold absolute top-1/2 translate-y-[-50%] left-8">
          {webUrl}
        </p>
        <div>
          <input
            className="w-full h-full focus:outline-none py-6 pl-[208px] rounded-[200px] text-[20px] text-headingColor font-bold placeholder:font-medium"
            {...register("username")}
            type="text"
            name="username"
            id="username"
            placeholder="username here"
          />
        </div>
        <button
          type="submit"
          className="absolute right-2 top-1/2 translate-y-[-50%]"
        >
          <ButtonPrimary text={btnText} fontSize="18px" />
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
