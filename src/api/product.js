import http from './config';

const product = {
  // 获取可秒杀商品
  getProducts() {
    return http().get('/product').then(res => res);
  },
  // 删除商品
  delProducts(productId) {
    return http().delete(`/product/${productId}`).then(res => res);
  },
  // 添加商品
  addProducts({ productName, price, inventory }) {
    return http().post('/product', {
      productName,
      price,
      inventory,
    }).then(res => res);
  },
  // 秒杀
  seckill(productId) {
    return http().post(`/seckill/${productId}`).then(res => res);
  },
};

export default product;
