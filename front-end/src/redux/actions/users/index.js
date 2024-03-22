// import * as types from "../constants/users";
import * as types from "../../constants/users";
import axios from "axios";

export const getUsersRequest = () => ({
  type: types.GET_USERS_REQUEST,
});

export const getUsersSuccess = (data) => ({
  type: types.GET_USERS_SUCCESS,
});

export const getUsersFailure = (error) => ({
  type: types.GET_USERS_FAILURE,
});

export const getUsersData = () => {
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      // Define your headers
      const headers = {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json",
      };

      // Making HTTP request to the server with headers
      const response = await axios.get(
        "https://ecommerceweb-emk3.onrender.com/users",
        { headers: headers } // Pass headers here
      );

      // Dispatching action to update Redux store
      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      // Dispatch the action to handle an error
      console.log("error here");
      dispatch(getUsersFailure(error.message));
    }
  };
};
// const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest()); // Dispatch action to indicate data fetching has started

//     try {
//       // Make HTTP request to server
//       const response = await axios.get('/api/data'); // Assuming your server API endpoint is '/api/data'

//       // Dispatch action to update Redux store with fetched data
//       dispatch(fetchDataSuccess(response.data));
//     } catch (error) {
//       // Dispatch action to handle error
//       dispatch(fetchDataFailure(error.message));
//     }
//   };
// };

// // Import necessary dependencies
// import axios from 'axios';

// // Define action types
// const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// // Action creators
// const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST
// });

// const fetchDataSuccess = (data) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data
// });

// const fetchDataFailure = (error) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error
// });

// // Asynchronous action creator using Redux Thunk
// const fetchData = () => {
//   return async (dispatch) => {
//     dispatch(fetchDataRequest()); // Dispatch action to indicate data fetching has started

//     try {
//       // Make HTTP request to server
//       const response = await axios.get('/api/data'); // Assuming your server API endpoint is '/api/data'

//       // Dispatch action to update Redux store with fetched data
//       dispatch(fetchDataSuccess(response.data));
//     } catch (error) {
//       // Dispatch action to handle error
//       dispatch(fetchDataFailure(error.message));
//     }
//   };
// };

// export { fetchData };
