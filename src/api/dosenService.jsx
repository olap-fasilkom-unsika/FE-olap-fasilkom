import http from "./httpCommon";

const baseURL = "/dosen";

const getListDosen = () => http.get(baseURL);
const getDosenById = (id) => http.get(`${baseURL}/${id}`);
const getMahasiswaByIdDosen = (id) => http.get(`${baseURL}/mahasiswa/${id}`);
const createDosen = (payload) => http.post(baseURL, payload);
const updateDosen = (id, payload) => http.put(`${baseURL}/${id}`, payload);
const deleteDosen = (id, status) =>
  http.delete(`${baseURL}/${id}/${status}`);

export {
  getListDosen,
  getDosenById,
  getMahasiswaByIdDosen,
  createDosen,
  updateDosen,
  deleteDosen,
};
