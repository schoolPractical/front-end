import axios from 'axios';

const defaultHost =
  // 之后有了接口地址后，这里填接口地址
  process.env.NODE_ENV === 'production' ? '' : '';

const instance = axios.create({
  withCredentials: true,
  baseURL: defaultHost,
  transformResponse(res) {
    // res是返回值
    console.log(res);
    return res;
  },
});


export function getHttpClient() {
  return instance;
}

export default getHttpClient;
