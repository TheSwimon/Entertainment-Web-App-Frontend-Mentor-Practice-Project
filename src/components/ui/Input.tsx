import React from "react";
import searchIcon from "/assets/icon-search.svg";

export default function Input() {
  return (
    <div className="w-[80%] py-4 flex items-center gap-2 bg-[#10141E]">
      <span>
        <img src={searchIcon} alt="search icon" />
      </span>
      <input
        className=" border-none px-2 w-[100%] bg-[#10141E] focus:outline-none focus:border-2 focus:border-[red] text-white placeholder:text-[16px] placeholder:text-[rgba(255,255,255,0.5)]"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
