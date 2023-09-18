import React, { useEffect, useState } from "react";

const CheckBox = (props: any): React.ReactElement => {
  const [isIndeterminate, setIsIndeterminate] = useState(props.indeterminate);
  useEffect(() => {
    setIsIndeterminate(props.indeterminate);
  }, [props.indeterminate]);

  return (
    <input
      type="checkbox"
      onChange={props.onChange}
      checked={props.checked}
      ref={(input) => {
        if (input) {
          input.indeterminate = isIndeterminate;
        }
      }}
      className={`${
        isIndeterminate === true ? "accent-blue-600" : ""
      } transition rounded focus:ring-offset-1 focus:ring`}
    />
  );
};

export default CheckBox;
