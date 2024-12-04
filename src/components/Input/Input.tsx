import React from "react";
import { InputField, TextError } from "./inputStyled.tsx";


interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; 
}
const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange, error }) => {
  return (
    <>
      <InputField
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <TextError>{error}</TextError>}
    </>
  );
};

export default Input;
