import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/example";
// import { useGetUsers } from "../../redux/services/apiProvider";

export const Home = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  //  users using useGetUsers hook
  // const { data: users, isLoading, isError } = useGetUsers();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching users.</p>
      ) : (
        <div>
          <h2>Users:</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.first_name}</li>
              // Replace 'user.name' with the actual user data you want to display
            ))}
          </ul>
        </div>
      )} */}
      <></>
    </div>
  );
};
