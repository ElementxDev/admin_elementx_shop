import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const ENDPOINT = `${API_URL_LOCAL}/statistics/totals`;

function getUsers() {
  return fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('etx_token'),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getUsers;
