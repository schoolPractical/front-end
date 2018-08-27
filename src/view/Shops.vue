<template>
  <div id="Shops" class="shops">
    <el-table :data="tableData" style="width: 100%;"
              :header-cell-style="{color:'#FB5E5F',background:'#EDF2F6','font-weight':'600'}"
              :row-style="{color:'#FB5E5F',background:'#EDF2F6','font-weight':'600'}">
      <el-table-column align="center" prop="beginTime" label="开始时间"></el-table-column>
      <el-table-column align="center" prop="productName" label="商品"></el-table-column>
      <el-table-column align="center" prop="productId" label="详情页">
        <template slot-scope="scope">
          <div class="jumpBuy" :class="userType===0?'admiBtn':''"
               @click="jumpBuy(scope.row.productId,scope.row.beginTime,scope.row.productName)"
          >
            前往秒杀
          </div>
          <i v-if="!userType" class="el-icon-error deleteBtn" title="删除该项" @click="delItem"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Shops',
  data() {
    return {
      tableData: [{
        beginTime: '2018.8.22 12:00',
        productName: '笔记本电脑',
        productId: '1',
      }, {
        beginTime: '2018.8.22 12:00',
        productName: '笔记本电脑',
        productId: '2',
      }, {
        beginTime: '2018.8.22 12:00',
        productName: '笔记本电脑',
        productId: '3',
      }, {
        beginTime: '2018.8.22 12:00',
        productName: '笔记本电脑',
        productId: '4',
      }],
      userType: 1, // 1为用户，0为管理员
    };
  },
  methods: {
    // 获取cookie
    getCookie(name) {
      const strcookie = document.cookie;
      const arrcookie = strcookie.split('; ');
      for (let i = 0; i < arrcookie.length; i += 1) {
        const arr = arrcookie[i].split('=');
        if (arr[0] === name) {
          return arr[1];
        }
      }
      return null;
    },
    // 删除商品
    delItem() {

    },
    jumpBuy(val1, val2, val3) {
      this.$router.push({ path: '/secondSkill', query: { id: val1, time: val2, name: val3 } });
    },
  },
  created() {
    const user = this.getCookie('user_login_token');
    if (user === null) {
      this.userType = 0;
    }
    this.$ajax.product.getProducts().then((res) => {
      const jsonData = JSON.parse(res.data);
      this.tableData = jsonData.data;
    });
  },
};
</script>

<style scoped>
.shops {
  width: 100%;
  max-width: 600px;
  height: 100%;
  padding-top: 50px;
  margin: 0 auto;
  background: #EDF2F6;
  box-sizing: border-box;
}
.jumpBuy {
  margin: 0 20%;
  width: 60%;
  min-height: 30px;
  line-height: 30px;
  border-radius: 50px;
  background: #fcc0c0;
  cursor: pointer;
}
.shops .admiBtn {
  display: inline-block;
  margin-left: 15%;
  margin-right: 5%;
}
.deleteBtn {
  font-size: 20px;
  height: 20px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  cursor: pointer;
}
</style>
