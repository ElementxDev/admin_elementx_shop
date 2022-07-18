import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const ENDPOINT = `${API_URL_LOCAL}/products`;

async function getProducts() {
  return fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getProducts;
