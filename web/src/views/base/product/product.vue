<template>
  <el-table-v2
      :width="width"
      :height="height"
      :data="data"
  >
    <el-table-column prop="id" label="id" width="180"/>
  </el-table-v2>
</template>

<script setup>
import {reactive} from "vue";

const data = reactive([{
  id: 1
}])

</script>

<style scoped>

</style>