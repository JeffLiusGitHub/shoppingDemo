import axios from 'axios';
// import { useSelector } from "react-redux";

// const BASE_URL = "https://iconicshoppingnodejs.herokuapp.com/api"
// const BASE_URL = 'https://jeff-shopping-website.herokuapp.com/api';
const BASE_URL = 'http://localhost:8080/api';

// const token =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWE3MDkwMDVjMjFjMTRhYzM1YWQyYSIsImVtYWlsIjoiamVmZkBzaW5hLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjE5OTUzNTksImV4cCI6MTY2MjAxMzM1OX0.T3E9RhKZNl4YQrD24KiUb_qSSXtxjYHXHD5Z9LsIorQ';
const token = JSON.parse(localStorage.getItem('persist:user'))?.JWT?.replaceAll(
	'"',
	''
);

// const TOKEN =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWE3MmQyMDVjMjFjMTRhYzM1YWQzNiIsImVtYWlsIjoiYWFAYWEuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY2MTMzMjc4NywiZXhwIjoxNjYxMzMzMzg3fQ.Vgftujp2HLevKh64TmgwqC6cklzUrNqhUvCqptZW0_s';

// const token = useSelector((state) => state.user.JWT);
export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${token}` },
	// headers: { token: localStorage.getItem('token') },
	// headers: {
	// 	// Authorization:`Bearer ${JSON.parse(localStorage.getItem('data')).jwtToken}`,
	// 	'X-Custom-Header': 'foobar',
	// },
	// headers: { token: tokenFromRedux },
});
