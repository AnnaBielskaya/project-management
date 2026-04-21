import React from "react";

const Input = ({ textarea, label, ref, error, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 px-2 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      {label && (
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
      )}
      {textarea && (
        <textarea ref={ref} className={classes} {...props}></textarea>
      )}
      {!textarea && <input ref={ref} className={classes} {...props} />}
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </p>
  );
};

export default Input;
