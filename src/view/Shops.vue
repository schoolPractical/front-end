<template>
  <div id="Shops" class="shops">
    <el-table :data="tableData" style="width: 100%;"
              :header-cell-style="{color:'#FB5E5F',background:'#EDF2F6','font-weight':'600'}"
              :row-style="{color:'#FB5E5F',background:'#EDF2F6','font-weight':'600'}">
      <el-table-column align="center" prop="date" label="开始时间"></el-table-column>
      <el-table-column align="center" prop="nums" label="库存" width="70"></el-table-column>
      <el-table-column align="center" prop="shop" label="商品"></el-table-column>
      <el-table-column align="center" prop="detail" label="详情页">
        <template slot-scope="scope">
          <div class="jumpBuy" @click="jumpBuy(scope.row.detail)">前往秒杀</div>
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
        date: '2018.8.22 12:00',
        nums: '100',
        shop: '笔记本电脑',
        detail: '1',
      }, {
        date: '2018.8.22 12:00',
        nums: '100',
        shop: '笔记本电脑',
        detail: '2',
      }, {
        date: '2018.8.22 12:00',
        nums: '100',
        shop: '笔记本电脑',
        detail: '3',
      }, {
        date: '2018.8.22 12:00',
        nums: '100',
        shop: '笔记本电脑',
        detail: '4',
      }],
    };
  },
  methods: {
    jumpBuy(val) {
      this.$router.push({ path: '/shopdetail', query: { id: val } });
    },
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
</style>
