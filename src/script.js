import axios from "axios";
// console.log("start");
// ------------------- try catch
// try {
//   document.querySelector(".test").innerHTML = "hello";
// } catch (error) {
//   console.log("error", error);
// }

// const print = () => {
//   console.log("finish");
// };

// print();

// -------------------  async await

// const getPosts = async () => {
//   const data = await axios("https://628511c03060bbd347441aa3.mockapi.io/posts");

//   console.log("data", data);
// };

// getPosts();

// const getAllApi = async () => {
//   axios("https://628511c03060bbd347441aa3.mockapi.io/posts").then((res) => {
//     if (res.statusText === "OK") {
//       axios("https://628511c03060bbd347441aa3.mockapi.io/users").then((res) => {
//         if (res.statusText === "OK") {
//           axios("https://628511c03060bbd347441aa3.mockapi.io/username").then(
//             (res) => {
//               console.log("posts", res);
//               console.log("users", res);
//               console.log("username", res);
//             }
//           );
//         }
//       });
//     }
//   });
//   try {
//     const posts = await axios(
//       "https://628511c03060bbd347441aa3.mockapi.io/posts"
//     );
//     const users = await axios(
//       "https://628511c03060bbd347441aa3.mockapi.io/users"
//     );
//     const username = await axios(
//       "https://628511c03060bbd347441aa3.mockapi.io/username"
//     );
//     console.log("posts", posts);
//     console.log("users", users);
//     console.log("usernames", username);
//   } catch (error) {
//     if (error.response.status === 404) {
//       document.querySelector(".todo-list").innerHTML =
//         "sorry что-то пошло не так";
//     }
//     console.log("error", error);
//   }
// };
// getAllApi();
