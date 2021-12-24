import http from "./httpCommon";

const skripsi = "/skripsi";
const kolokium = "/kolokium";

const getListSkripsi = () => http.get(skripsi);
const getSkripsiById = (id) => http.get(`${skripsi}/${id}`);
const getSkripsiByIdMahasiswa = (id) => http.get(`${skripsi}/mahasiswa/${id}`);
const createSkripsi = (payload) => http.post(skripsi, payload);
const updateSkripsi = (id, payload) => http.put(`${skripsi}/${id}`, payload);
const deleteSkripsi = (id, status) => http.delete(`${skripsi}/${id}/${status}`);
const getListKolokium = () => http.get(`${kolokium}?pageSize=1000`);
const getKolokiumByGelombang = (id) =>
  http.get(`${kolokium}/gelombang-kolokium/${id}`);
const getKolokiumByIdMahasiswa = (id) =>
  http.get(`${kolokium}/mahasiswa/${id}`);
const getListGelombangKolokium = () => http.get("gelombang-kolokium");

export {
  getListSkripsi,
  getSkripsiById,
  getSkripsiByIdMahasiswa,
  createSkripsi,
  updateSkripsi,
  deleteSkripsi,
  getKolokiumByIdMahasiswa,
  getListKolokium,
  getKolokiumByGelombang,
  getListGelombangKolokium,
};
