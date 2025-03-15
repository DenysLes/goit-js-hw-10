import axios from 'axios';
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'ive_rvW2fNQsV1F5ndG4nRUTL80oB7gnm9mRENenNK0bFaae9z95D31awypoySky0fpC';

axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.baseURL = BASE_URL;

// fetchBreeds функція забезпечує отримання та відображення списку порід кішок на веб-сторінці, використовуючи отримані дані з API за допомогою axios.

export function fetchBreeds() {
  return axios.get('/breeds').then(response => {
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
    return resp.data;
  });
}
