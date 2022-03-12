import axios from 'axios';

const { BOTPRESS_URL, BOTPRESS_ID } = process.env;

const api = axios.create({
  baseURL: `${BOTPRESS_URL}/api/v1/bots/${BOTPRESS_ID}/converse`,
});

export default api;