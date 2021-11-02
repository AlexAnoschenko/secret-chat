import { Button } from "antd";
import { FC } from "react";
import "./styles.css";
// import { useCount } from "./hooks";
import { useTypedSelector } from "./../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { CountActionCreators } from "./../../store/reducers/count/action-creators";
import { UsersActionCreators } from "./../../store/reducers/users/action-creators";

const Count: FC = () => {
  // const {count, increaseCount, decreaseCount } = useCount();

  const dispatch = useDispatch();

  const { count } = useTypedSelector((state) => state.count);
  const { users } = useTypedSelector((state) => state.users);

  console.log(users);

  const increaseCount = () => {
    dispatch(CountActionCreators.increaseCount());
  };

  const decreaseCount = () => {
    dispatch(CountActionCreators.decreaseCount());
  };

  const getUsers = () => {
    dispatch(UsersActionCreators.getUsers());
  };

  return (
    <>
      <div className="count">
        {count}
        <Button onClick={increaseCount}>+</Button>
        <Button onClick={decreaseCount}>-</Button>
        <Button onClick={getUsers}>Get Users</Button>
        {users.map((user: any, index: number) => (
          <div key={index}>{user.title}</div>
        ))}
      </div>
    </>
  );
};

export default Count;
