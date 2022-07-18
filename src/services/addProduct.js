import { API_URL_LOCAL, API_URL_ONLINE } from '../config';
const ENDPOINT = `${API_URL_LOCAL}/products`;

async function addProduct(product) {
  console.log(product);
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: localStorage.getItem('etx_token'),
      },
      body: product,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default addProduct;
