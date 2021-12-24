import http from "./httpCommon";

const proposal = "/proposal";
const seminar = "/seminar";

const getListProposal = () => http.get(proposal);
const getListGelombangSeminar = () => http.get("gelombang-seminar");
const getProposalById = (id) => http.get(`${proposal}/${id}`);
const getProposalByIdMahasiswa = (id) =>
  http.get(`${proposal}/mahasiswa/${id}`);
const createProposal = (payload) => http.post(proposal, payload);
const updateProposal = (id, payload) => http.put(`${proposal}/${id}`, payload);
const deleteProposal = (id, status) =>
  http.delete(`${proposal}/${id}/${status}`);

const getListSeminar = () => http.get(`${seminar}?pageSize=1000`);
const getSeminarByIdMahasiswa = (id) => http.get(`${seminar}/mahasiswa/${id}`);
const getSeminarByGelombang = (id) =>
  http.get(`${seminar}/gelombang-seminar/${id}`);

export {
  getListProposal,
  getListGelombangSeminar,
  getProposalById,
  getProposalByIdMahasiswa,
  getListSeminar,
  getSeminarByIdMahasiswa,
  getSeminarByGelombang,
  createProposal,
  updateProposal,
  deleteProposal,
};
