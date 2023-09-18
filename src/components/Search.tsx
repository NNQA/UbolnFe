import clsx from "clsx";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Secondarybutton from "./Secondarybutton";

type searchProps = {
  className?: string;
};
const Search = ({ className }: searchProps): React.ReactElement => {
  const [check, setCheck] = useState<Boolean>(false);
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckX = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (text !== "") {
      setCheck(true);
    }
  };
  useEffect(() => {
    if (text === "") {
      setCheck(false);
    }
  }, [text]);
  const handleDisableX = () => {
    setCheck(false);
    setText("");
  };
  return (
    <div
      className={clsx(
        "flex items-center justify-between border-[1px] border-solid rounded-md border-gray-500 px-3 py-1",
        className
      )}
    >
      <div
        className=" flex items-center gap-3"
        onClick={() => inputRef.current?.focus()}
      >
        <Icon
          iconName="MagnifyingGlassIcon"
          className="h-[1rem] text-fiord-cfg-400 cursor-pointer [&>path]:stroke-[2]"
        ></Icon>
        <input
          type="text"
          value={text}
          placeholder="Search quote"
          className="placeholder:text-fiord-cfg-400 font-semibold"
          onChange={handleCheckX}
          ref={inputRef}
        />
      </div>
      <div className="">
        {check ? (
          <Secondarybutton
            className="border-none font-medium cursor-pointer"
            onClick={handleDisableX}
          >
            x
          </Secondarybutton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
