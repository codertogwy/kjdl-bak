<template>
  <div class="handle-box">
    <el-select v-model="data.query.address" placeholder="地址" class="handle-select mr10">
      <el-option key="1" label="广东省" value="广东省"></el-option>
      <el-option key="2" label="湖南省" value="湖南省"></el-option>
    </el-select>
    <el-input v-model="data.query.name" placeholder="用户名" class="handle-input mr10"></el-input>
    <el-button type="primary" icon="Search">搜索</el-button>
    <el-button type="primary" icon="Plus">新增</el-button>
  </div>


  <el-table :data="data.data">
    <el-table-column prop="id" label="id" width="180"/>
  </el-table>
</template>

<script setup>
import {reactive} from "vue";

const data = reactive({
  data: [],
  query: {
    name: '11',
    address: '11'
  }
})


</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
}

.mr10 {
  margin-right: 10px;
}

</style>