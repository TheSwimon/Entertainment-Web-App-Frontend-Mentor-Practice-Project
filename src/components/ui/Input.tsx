import searchIcon from "/assets/icon-search.svg";
import { PostsContext } from "../../Layouts/Layout";
import useHandleContext from "../../hooks/useHandleContext";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function Input() {
  const { setSearchString } = useHandleContext(PostsContext);

  // checks if the input field is empty

  function isValidSearchInput(inputValue: string | undefined) {
    return inputValue?.trim() !== "";
  }

  // sets the state for the input string and navigates to the new path

  function performSearch(inputValue: string | undefined) {
    setSearchString(inputValue);
    navigate(`/search/${inputValue}`);
  }

  // calls and executes both of the functions above

  function handleSearchClick() {
    const inputValue = inputRef.current?.value;
    if (isValidSearchInput(inputValue)) {
      performSearch(inputValue);
    }
  }

  // refference to the input element

  let inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <div className="w-[80%] py-5 lg:pt-0 lg:pb-5 mb-2 flex items-center gap-2 bg-[#10141E]">
      <span
        onClick={() => {
          handleSearchClick();
        }}
        className="cursor-pointer"
      >
        <img src={searchIcon} alt="search icon" />
      </span>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchClick();
          }
        }}
        ref={inputRef}
        className=" border-none px-2 w-[100%] bg-[#10141E] focus:outline-none focus:border-2 focus:border-[red] text-white placeholder:text-[16px] tablet:text-[24px] tablet:placeholder:text-[24px] placeholder:text-[rgba(255,255,255,0.5)]"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
