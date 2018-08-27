import http from './config';

const user = {
  // 登录
  signin(userName, password) {
    return http().post('/user/login', {
      userName,
      password,
    }).then(res => res);
  },
  // 管理员登录
  adminSignin(userName, password) {
    return http().post('/user/login', {
      userName,
      password,
    }).then(res => res);
  },
  // 注册
  register(userName, password, email, telephone) {
    return http().post('/user/register', {
      userName,
      password,
      email,
      telephone,
    }).then(res => res);
  },
  // 忘记密码
  repassword(userName, password, email, telephone) {
    return http().post('/user/password', {
      userName,
      password,
      email,
      telephone,
    }).then(res => res);
  },
  // 注销
  logout() {
    return http().delete('/user/logout').then(res => res);
  },
};

export default user;
