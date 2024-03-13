import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/example";
import { getUsersData } from "../../redux/actions/users";

export const Home = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //Runs only on the first render

    setUsers(dispatch(getUsersData()));
    console.log("users", users);
  }, []);
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};
