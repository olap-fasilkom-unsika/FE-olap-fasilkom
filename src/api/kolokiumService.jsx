import http from "./httpCommon";

const skripsi = "/skripsi";
const kolokium = "/kolokium";

const getListSkripsi = () => http.get(skripsi);
const getSkripsiById = (id) => http.get(`${skripsi}/${id}`);
const getSkripsiByIdMahasiswa = (id) =>
  http.get(`${skripsi}/mahasiswa/${id}`);
const getKolokiumByIdMahasiswa = (id) => http.get(`${kolokium}/mahasiswa/${id}`);
const createSkripsi = (payload) => http.post(skripsi, payload);
const updateSkripsi = (id, payload) => http.put(`${skripsi}/${id}`, payload);
const deleteSkripsi = (id, status) =>
  http.delete(`${skripsi}/${id}/${status}`);

export {
  getListSkripsi,
  getSkripsiById,
  getSkripsiByIdMahasiswa,
  getKolokiumByIdMahasiswa,
  createSkripsi,
  updateSkripsi,
  deleteSkripsi,
};
