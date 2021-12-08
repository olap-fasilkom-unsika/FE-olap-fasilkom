import axios from "axios";

export default axios.create({
  baseURL: "https://olap-fasilkom-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
