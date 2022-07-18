import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const ENDPOINT = `${API_URL_LOCAL}/categories`;

async function getCategories() {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('etx_token'),
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getCategories;
