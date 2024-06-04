import axios from "axios";
// VITE_URL
// VITE_KEY

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
  }
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const res = error.response;
    if (res.status === 401) {
      window.location.href = "/error";
    }
    console.error(`Looks like there was a problem. Status Code: ` + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;