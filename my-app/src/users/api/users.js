import axios from 'axios';
import 'core-js/features/promise';

const url = process.env.REACT_APP_REST_API_URL;

export async function getAll() {
  const res = await axios.get(url);
  return res.data;
}
