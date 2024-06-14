// // src/reducers/basicDetailsReducer.js
// import {
//   SAVE_BASIC_DETAILS_REQUEST,
//   SAVE_BASIC_DETAILS_SUCCESS,
//   SAVE_BASIC_DETAILS_FAILURE,
// } from "../constants";

// const initialState = {
//   RestaurantSessions: [
//     {
//       name: "",
//       defaultTime: [
//         {
//           startTime: "",
//           endTime: "",
//           weekday: [],
//         },
//       ],
//     },
//   ],
//   cuisines: [],
//   amenities: [],
//   parking: [],
//   safetyMeasures: "",
//   alcohol: "",
//   loading: false,
//   error: null,
// };

// export const basicDetailsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SAVE_BASIC_DETAILS_REQUEST:
//       return {
//         ...state,
//         Details: action.payload,
//         loading: true,
//         error: null,
//       };
//     case SAVE_BASIC_DETAILS_SUCCESS:
//       return {
//         ...state,
//         ...action.payload,
//         loading: false,
//         error: null,
//       };
//     case SAVE_BASIC_DETAILS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
