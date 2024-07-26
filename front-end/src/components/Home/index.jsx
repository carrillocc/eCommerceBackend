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
      <Typography.Title level={2}>Henlo World</Typography.Title>
      {loading ? (
        <p>Loading...</p>
      ) : errors ? (
        <p>Error: {errors}</p>
      ) : (
        <>
          <Typography.Title level={3}>
            Below is a list of users
          </Typography.Title>
          <ol>
            {users.map((u) => {
              return <li key={u.uuid}>{u.first_name}</li>;
            })}
          </ol>
        </>
      )}
    </>
  );
};
