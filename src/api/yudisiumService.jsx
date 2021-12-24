import http from "./httpCommon";

const yudisium = "/yudisium";

const getListYudisium = () => http.get(`${yudisium}?pageSize=1000`);
const getListGelombangYudisium = () => http.get("gelombang-yudisium");
const getYudisiumByGelombang = (id) =>
  http.get(`${yudisium}/gelombang-yudisium/${id}`);
const getYudisiumById = (id) => http.get(`${yudisium}/${id}`);
const getYudisiumByIdMahasiswa = (id) =>
  http.get(`${yudisium}/mahasiswa/${id}`);
const createYudisium = (payload) => http.post(yudisium, payload);
const updateYudisium = (id, payload) => http.put(`${yudisium}/${id}`, payload);
const deleteYudisium = (id, status) =>
  http.delete(`${yudisium}/${id}/${status}`);

export {
  getListYudisium,
  getListGelombangYudisium,
  getYudisiumByGelombang,
  getYudisiumById,
  getYudisiumByIdMahasiswa,
  createYudisium,
  updateYudisium,
  deleteYudisium,
};
