import http from "./httpCommon";

const baseURL = "/mahasiswa";

const getListMahasiswa = () => http.get(baseURL);
// const getMahasiswaById = (id) => http.get(`${baseURL}/${id}`);
const getMahasiswaById = (id) => http.get("/mahasiswa/1441177004011");
const createMahasiswa = (payload) => http.post(baseURL, payload);
const updateMahasiswa = (id, payload) => http.put(`${baseURL}/${id}`, payload);
const deleteMahasiswa = (id, status) =>
  http.delete(`${baseURL}/${id}/${status}`);

export {
  getListMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
