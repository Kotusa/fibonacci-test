import React, { FC } from "react";
import styles from "../../../styles/fibonacci.module.scss";

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
}

const Button: FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
