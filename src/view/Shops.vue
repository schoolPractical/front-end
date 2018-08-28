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
               @click="jumpBuy(scope.row.productId,scope.row.productName,scope.row.beginTime,scope.row.endTime)"
          >
            前往秒杀
          </div>
          <i v-if="!userType" class="el-icon-error deleteBtn" title="删除该项"
             @click="delItem(scope.row.productId, scope.$index)">
          </i>
        </template>
      </el-table-column>
    </el-table>
    <!-- 菜单 -->
    <div class="menuBox">
      <circle-menu-box :userType="userType" @beforeAddItem="beforeAddItem"/>
    </div>
    <!-- 添加新商品的dialog -->
    <el-dialog
      title="添加新商品"
      :visible.sync="dialogVisible"
      width="30%">
      <div>
        名称：
        <el-input v-model="newItem.productName" placeholder="请输入内容" style="width:70%"></el-input>
      </div>
      <div style="margin-top:15px">
        价格：
        <el-input v-model="newItem.price" placeholder="请输入内容" style="width:70%"></el-input>
      </div>
      <div style="margin-top:15px">
        数量：
        <el-input v-model="newItem.inventory" placeholder="请输入内容" style="width:70%"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addItem()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Shops',
  data() {
    return {
      tableData: [],
      userType: 1, // 1为用户，0为管理员
      dialogVisible: false, // 是否显示添加新商品的dialog
      newItem: {
        productName: '',
        price: '',
        inventory: '',
      },
    };
  },
  methods: {
    // 获取cookie
    /* getCookie(name) {
      const strcookie = document.cookie;
      const arrcookie = strcookie.split('; ');
      for (let i = 0; i < arrcookie.length; i += 1) {
        const arr = arrcookie[i].split('=');
        if (arr[0] === name) {
          return arr[1];
        }
      }
      return null;
    }, */
    // 删除商品
    delItem(productId, index) {
      this.$confirm('确定删除该商品？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$ajax.product.delProducts(productId).then(() => {
          this.tableData.splice(index, 1);
          this.$notify({
            title: '删除成功',
            type: 'success',
          });
        });
      }).catch(() => {
        this.$notify.error({
          title: '已取消',
        });
      });
    },
    // 添加商品前的操作
    beforeAddItem() {
      this.dialogVisible = true;
    },
    // 添加商品
    addItem() {
      this.dialogVisible = false
      this.$ajax.product.addProducts(this.newItem).then(() => {
        this.$notify({
          title: '添加成功',
          type: 'success',
        });
        setTimeout(() => {
          location.reload();
        }, 1500);
      });
    },
    jumpBuy(id, name, beginTime, endtime) {
      this.$router.push({ path: '/secondSkill', query: { id, name, beginTime, endtime } });
    },
  },
  created() {
    // const user = this.getCookie('user_login_token');
    const user = sessionStorage.getItem('usertype');
    if (user === 'admin') {
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
.menuBox {
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  width: 48px;
  margin: 0 auto;
}
</style>
