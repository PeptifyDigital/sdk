import axios from "axios";

const API_URL = "http://localhost:5000/api/peptides";

export const fetchPeptides = () => axios.get(API_URL);
export const createPeptide = (data) => axios.post(API_URL, data);
