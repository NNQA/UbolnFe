const Input = (props: any) => {
  return (
    <div className="w-80% relative pb-[15px]">
      <div className="flex flex-col gap-2 pb-1 relative">
        <label
          htmlFor={props.input.id}
          className="text-xs font-bold text-opacity-70 text-black"
        >
          {props.label}
        </label>
        <input
          className={`w-full placeholder:text-xs placeholder:font-medium placeholder:pb-2
          border-solid rounded-[5px] text-sm px-3 pt-[0.3rem] pb-[0.3rem] 
          ${
            props.touched && props.error
              ? "border-[#cc3637] border-2"
              : "border-black border-opacity-25 border-2 hover:border-opacity-50"
          }
        
          `}
          {...props.input}
          //   className={`${props.touched && props.error ? classes.error : ""}`}
        ></input>
        <div
          className={`absolute right-4 top-[50%] text-[14px] font-extrabold
          ${
            props.error === undefined && props.input.value
              ? "text-[#2ea379]"
              : "text-red-500"
          }
        `}
        >
          {props.error === undefined && props.input.value !== "" ? "✔" : ""}
        </div>
        <div
          className={`absolute right-4 top-[50%] text-[14px] font-extrabold
          ${props.touched && props.error ? "text-red-500" : ""}
        `}
        >
          {props.touched && props.error ? (
            <i className="uil uil-exclamation-triangle"></i>
          ) : (
            ""
          )}
        </div>
      </div>
      {props.touched && props.error && props.message === "Required" ? (
        <span className="text-[10px] text-red-500 font-bold absolute right-0 top-0">
          {props.touched && props.error ? props.message : ""}
        </span>
      ) : (
        <span
          className={`text-[10px] text-red-500  font-bold ${
            props.touched && props.error ? "" : "hidden"
          } absolute bottom-0`}
        >
          {props.touched && props.error ? props.message : ""}
        </span>
      )}
    </div>
  );
};

export default Input;
