// import axios from "axios";
// import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../constants/users";
// import config from "../config";

// export const apiMiddleware =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type === "API_CALL") {
//       try {
//         const response = await axios.get(`${config.apiUrl}${action.endpoint}`);
//         dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
//       } catch (error) {
//         dispatch({ type: GET_USERS_FAILURE, payload: error.message });
//       }
//     } else {
//       next(action);
//     }
//   };
