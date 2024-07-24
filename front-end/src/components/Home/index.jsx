import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/example";
import { getUsersData } from "../../redux/actions/users";

export const Home = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await dispatch(getUsersData());
        setUsers(userData);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>Users:::</div>
      {users.map((u) => (
        <div key={u.uuid}>{u.first_name}</div>
      ))}
    </>
  );
};
