import http from './config';

const order = {
  // 获取订单
  getOrder() {
    return http().get('/indent').then(res => res);
  },
  // 获取订单详情
  getOrderDetail(indentId) {
    return http().get('/indent/', {
      params: {
        indentId,
      },
    }).then(res => res);
  },
  // 取消订单
  deleteOrder(indentId) {
    return http().delete('/indent/', {
      params: {
        indentId,
      },
    }).then(res => res);
  },
  // 支付订单
  buyOrder(indentId) {
    return http().put('/indent/', {
      params: {
        indentId,
      },
    }).then(res => res);
  },
};

export default order;
