import http from './config';

const user = {
  // 登录
  signin(userName, password) {
    return http().post('/user/login', {
      userName,
      password,
    }).then(res => res);
  },
  // 注册
  register(userName, password, email, telephone) {
    return http().post('/user/login', {
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
  // 登录后修改密码
  changepassword(password) {
    return http().put('/user/password', {
      password,
    }).then(res => res);
  },
  // 查看个人信息
  infor() {
    return http().get('/user/information').then(res => res);
  },
  // 修改个人信息
  changeinfor(userName, email, identityCard = '',
    telephone = '', age = '', date = '', gender = '') {
    return http().put('/user/information', {
      userName,
      email,
      identityCard,
      telephone,
      age,
      date,
      gender,
    }).then(res => res);
  },
  // 注销
  logout() {
    return http().delete('/user/logout').then(res => res);
  },
};

export default user;
