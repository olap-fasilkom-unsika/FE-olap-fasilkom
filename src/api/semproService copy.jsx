import http from "./httpCommon";

const proposal = "/proposal";
const seminar = "/seminar";

const getListProposal = () => http.get(proposal);
const getProposalById = (id) => http.get(`${proposal}/${id}`);
const getProposalByIdMahasiswa = (id) =>
  http.get(`${proposal}/mahasiswa/${id}`);
const getSeminarByIdMahasiswa = (id) => http.get(`${seminar}/mahasiswa/${id}`);
const createProposal = (payload) => http.post(proposal, payload);
const updateProposal = (id, payload) => http.put(`${proposal}/${id}`, payload);
const deleteProposal = (id, status) =>
  http.delete(`${proposal}/${id}/${status}`);

export {
  getListProposal,
  getProposalById,
  getProposalByIdMahasiswa,
  getSeminarByIdMahasiswa,
  createProposal,
  updateProposal,
  deleteProposal,
};
