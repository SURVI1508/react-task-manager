import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className={`${props?.customClass} disabled:cursor-not-allowed disabled:opacity-50 rounded-[5px] text-white bg-primary-600 hover:bg-primary-700   font-medium  text-sm px-5 py-2.5 text-center`}
    >
      {props.children}
    </button>
  );
};

export default Button;
