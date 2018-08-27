import http from './config';

const product = {
  // 获取可秒杀商品
  getProducts() {
    return http().get('/product').then(res => res);
  },
  // 秒杀
  seckill(productId) {
    return http().post('/seckill/' + productId).then(res => res);
  },
};

export default product;
