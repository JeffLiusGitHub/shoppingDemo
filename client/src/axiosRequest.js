import axios from 'axios';

const BASE_URL = 'https://jeff-shopping-website.herokuapp.com/api';
// const BASE_URL = 'http://localhost:8080/api';

const token = JSON.parse(localStorage.getItem('persist:user'))?.JWT?.replaceAll(
	'"',
	''
);

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${token}` },
});
