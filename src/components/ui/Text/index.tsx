import React, { FC } from "react";
import cn from "classnames";
import style from "../../../styles/fibonacci.module.scss";

interface ITextProps {
  error?: boolean;
  children?: React.ReactNode;
}

const Text: FC<ITextProps> = ({ children, error }) => {
  return <p className={cn(style.text, error && style.textError)}>{children}</p>;
};

export default Text;
