import axios from 'axios';

const defaultHost = 'http://192.168.2.1:8080/';
process.env.NODE_ENV === 'production' ? '' : '';

const instance = axios.create({
  withCredentials: true,
  baseURL: defaultHost,
  transformResponse(res) {
    console.log(res);
    return res;
  },
});


export function getHttpClient() {
  return instance;
}

export default getHttpClient;
