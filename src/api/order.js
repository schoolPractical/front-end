import http from './config';

const order = {
  // 获取订单
  getOrder() {
    return http().get('/order').then(res => res);
  },
};

export default order;
