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
import AsideContainer from "@/components/layout/AsideContainer.vue";
import HeaderContainer from "@/components/layout/HeaderContainer.vue";
</script>

<style scoped>
.container {
  min-height: 100%;
}
</style>