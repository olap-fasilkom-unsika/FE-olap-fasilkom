import http from "./httpCommon";

const baseURL = "/dashboard";

const getTotalData = () => http.get(`${baseURL}/total-data`);

export { getTotalData };
