import React, { FC } from "react";
import cn from "classnames";
import style from "../../../styles/fibonacci.module.scss";

export type InputValue = string | number | readonly string[] | undefined;

interface IInputProps {
  error: boolean;
  value: InputValue;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({ onChange, value, error }) => {
  return (
    <input
      className={cn(style.input, error && style.inputError)}
      type="number"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
