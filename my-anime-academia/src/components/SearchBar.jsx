import React from "react";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  return (
    <>
      <div className=" px-8 flex justify-center items-center shadow-lg">
        <Input
          type="text"
          placeholder={props.placeHolder}
          className="rounded-lg flex w-36"
          startContent={<FaSearch id="search-icon" className="text-black" />}
        />
      </div>
    </>
  );
};

export default SearchBar;
