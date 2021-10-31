import { Button } from "antd";
import { FC } from "react";
import "./styles.css";
import { useCount } from "./hooks";

const Count: FC = () => {
  const { count, increaseCount, decreaseCount } = useCount();

  return (
    <div className="count">
      {count}
      <Button onClick={increaseCount}>+</Button>
      <Button onClick={decreaseCount}>-</Button>
    </div>
  );
};

export default Count;
