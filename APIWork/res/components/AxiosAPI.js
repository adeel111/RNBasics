import axios from "axios";

export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  responseType: "json"
});

//   Textual and Image Data
//   baseURL: "https://randomuser.me/api/",

//   Only Textual Data
//   baseURL: https://jsonplaceholder.typicode.com/
