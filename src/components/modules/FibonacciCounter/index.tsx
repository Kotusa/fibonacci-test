import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fibonacci } from "../../../helpers/fibonacci";
import { IRootState } from "../../../reducers";
import { setError, setFibonacciValue } from "../../../reducers/fibonacci";
import { Button, Input, Text } from "../../ui";
import { InputValue } from "../../ui/Input";
import styles from "../../../styles/fibonacci.module.scss";

const FibonacciCounter = () => {
  const dispatch = useDispatch();

  const { fibonacciValue, error } = useSelector(
    ({ fibonacci }: IRootState) => fibonacci
  );

  const [currentInputValue, setCurrentInputValue] = useState<InputValue>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      dispatch(setError(false));
    }

    setCurrentInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (currentInputValue) {
      dispatch(setFibonacciValue(fibonacci(+currentInputValue)));
    } else {
      dispatch(setError(true));
    }
  };

  useEffect(() => {
    if (!currentInputValue) {
      dispatch(setFibonacciValue(null));
    }
  }, [currentInputValue, dispatch]);

  return (
    <div className={styles.wrapper}>
      <Text>
        {fibonacciValue ? (
          <>
            Значение: <span>{fibonacciValue}</span>
          </>
        ) : (
          "Введите число"
        )}
      </Text>
      <div className={styles.form}>
        <Input
          error={error}
          value={currentInputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleButtonClick}>Рассчитать</Button>
      </div>
      {error && <Text error>Вы не указали значение!</Text>}
    </div>
  );
};

export default FibonacciCounter;
