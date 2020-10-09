import React from "react";

export default function FormInput(props) {
  const { label, type, placeholder, value, onChange } = props;

  return (
    <div>
      {/* form input */}
      <div>
        <label className="text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {label}
        </label>
      </div>
      <div className="flex-grow pb-3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
