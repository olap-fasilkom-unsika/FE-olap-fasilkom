import http from "./httpCommon";

const baseURL = "/mahasiswa";
const statusMahasiswa = "/status-mahasiswa";

const getListMahasiswa = () => http.get(baseURL);
const getListStatusMahasiswa = () => http.get(statusMahasiswa);
const getMahasiswaById = (id) => http.get(`${baseURL}/${id}`);
const getMahasiswaByStatus = (status) =>
  http.get(`${baseURL}${statusMahasiswa}/${status}`);
// const getMahasiswaById = (id) => http.get("/mahasiswa/1441177004011");
const createMahasiswa = (payload) => http.post(baseURL, payload);
const updateMahasiswa = (id, payload) => http.put(`${baseURL}/${id}`, payload);
const deleteMahasiswa = (id, status) =>
  http.delete(`${baseURL}/${id}/${status}`);

export {
  getListMahasiswa,
  getListStatusMahasiswa,
  getMahasiswaById,
  getMahasiswaByStatus,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
