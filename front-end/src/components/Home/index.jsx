import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import { Typography } from "antd";

export const Home = () => {
  const dispatch = useDispatch();
  const { users, loading, errors } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <Typography.Title>Henlo</Typography.Title>
      <div>Users:::</div>
      {loading ? (
        <p>Loading...</p>
      ) : errors ? (
        <p>Error: {errors}</p>
      ) : (
        users.map((u) => <div key={u.uuid}>{u.first_name}</div>)
      )}
    </>
  );
};
