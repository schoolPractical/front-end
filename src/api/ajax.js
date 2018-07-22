import http from './ajax';

const ajax = {
  login() {
    return http().get('login', {
      params: {
      },
    }).then(res => res.data);
  },
};

export default ajax;
