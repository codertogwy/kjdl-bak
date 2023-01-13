<template>
  <el-container class="container">
    <el-header height="auto">
      <HeaderContainer/>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <AsideContainer/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AsideContainer from "./AsideContainer.vue";
import HeaderContainer from "./HeaderContainer.vue";
</script>

<style scoped>
.container {
  min-height: 100%;
}
</style>