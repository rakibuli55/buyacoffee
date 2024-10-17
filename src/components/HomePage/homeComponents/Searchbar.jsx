import ButtonPrimary from "../../buttons/ButtonPrimary";

function Searchbar({ width, btnText, webUrl }) {
  return (
    <form className="pr-2 shadow-[8px_8px_32px_0px_rgba(34,34,34,0.13)] rounded-[200px] relative">
      <div>
        <p className="text-[20px] text-headingColor font-bold absolute top-1/2 translate-y-[-50%] left-8">
          {webUrl}
        </p>
        <div>
          <input
            className="w-full h-full focus:outline-none py-6 pl-[208px] rounded-[200px] text-[20px] text-headingColor font-bold placeholder:font-medium"
            type="text"
            name="search"
            id="search"
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
