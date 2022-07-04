import axios from "axios";
const BASE_URL = "https://iconicshoppingnodejs.herokuapp.com/"
// const BASE_URL = 'http://localhost:8080/api';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTJlMTJkMzBlZjcwMjNlY2ZiOGI0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTY2NDIxMywiZXhwIjoxNjQ1Njc1MDEzfQ.wMNj_FwBHJDpxiB4TtUaz7E5uTDkFkMWUbugioVr8Gg";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest =  axios.create({
    baseURL:BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});
