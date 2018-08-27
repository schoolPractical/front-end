<template>
  <div id="Shops" class="shops">
    <el-table :data="tableData" style="width: 100%;"
              :header-cell-style="{color:'#FB5E5F',background:'#EDF2F6','font-weight':'600'}"
              :row-style="{color:'#FB5E5F',background:'#EDF2F6','font-weight':'600'}">
      <el-table-column align="center" prop="beginTime" label="开始时间"></el-table-column>
      <el-table-column align="center" prop="productName" label="商品"></el-table-column>
      <el-table-column align="center" prop="productId" label="详情页">
        <template slot-scope="scope">
          <div class="jumpBuy" @click="jumpBuy(scope.row.productId,scope.row.beginTime,scope.row.productName)">前往秒杀</div>
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
        productId: 1,
        beginTime: '2018-08-22 12:00',
        productName: '笔记本',
      }, {
        productId: 2,
        beginTime: '2018-08-22 12:00',
        productName: '电脑',
      }, {
        productId: 3,
        beginTime: '2018-08-22 12:00',
        productName: '笔记本电脑',
      }, {
        productId: 4,
        beginTime: '2018-08-22 12:00',
        productName: '笔',
      }],
    };
  },
  created: function(){
    this.$ajax.flight.getFlights(this.from, this.to, this.timeData).then((res) => {
      let jsonData = JSON.parse(res.data);
      alert(jsonData.meta.message);
      this.tableData = jsonData.data;
    });
  },
  methods: {
    jumpBuy(val1,val2,val3) {
      this.$router.push({ path: '/secondSkill', query: { id: val1,time: val2,name: val3 } });
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
