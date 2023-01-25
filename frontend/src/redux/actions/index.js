// import axios from "axios";
// import { reject } from "lodash";
//
// export const GET_CATEGORIES = "GET_CATEGORIES";
// export const NEW_CATEGORY = "NEW_CATEGORY";

export const plus = (index1, index2) => {
  return {
    type: "PLUS",
    payload: {
      index1: index1,
      index2: index2,
    },
  };
};
export const minus = (index1, index2) => {
  return {
    type: "MINUS",
    payload: {
      index1: index1,
      index2: index2,
    },
  };
};

// export const createCategory = (data) => {
//   const request = axios.post(
//     "http://localhost:4001/api/management/categories/create-category",
//     data
//   );
//   return (dispatch) =>
//     new Promise((resolve, reject) => {
//       request
//         .then((res) => {
//           dispatch({
//             type: "NEW_CATEGORY",
//             payload: res.data,
//           });
//           resolve(res.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
// };

// export const getCategories = () => {
//     const request =axios
//     .get('http://localhost:4001/api/management/categories');
//     return dispatch => new Promise((resolve, reject) => {
//         request.then(res => {
//             dispatch({
//                 type: 'GET CATEGORIES',
//                 payload: res.data
//             })
//             resolve(res.data)
//         }).catch(err => {
//             reject(err)
//         })
//     })
// }
