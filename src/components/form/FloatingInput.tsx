import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registerReturn: UseFormRegisterReturn;
  id: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  registerReturn,
  id,
  type = "text",
  ...rest
}) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      id={id}
      {...registerReturn}
      {...rest}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    />
    <label
      htmlFor={id}
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0]
                 peer-focus:left-0 peer-focus:text-blue-600
                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
    >
      {label}
    </label>
  </div>
);

export default FloatingInput;
