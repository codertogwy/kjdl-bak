<template>
  <div class="headerContainer">
    <div class="headerDiv">
      <el-dropdown placement="bottom-end">
        <div class="iconBox">
          <el-icon size="18px">
            <component is="Tools"/>
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>🇨🇳<span class="dropdownText">简体中文</span></el-dropdown-item>
            <el-dropdown-item>🇭🇰<span class="dropdownText">繁体中文</span></el-dropdown-item>
            <el-dropdown-item>🇺🇸<span class="dropdownText">English</span></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="headerDiv">
      <div class="iconBox">
        <el-icon size="18px">
          <component is="Tools"/>
        </el-icon>
      </div>
    </div>
  </div>


  <!--  <div class="headerDiv">-->
  <!--    <a-tooltip :title="state.isFull?'退出全屏':'全屏'">-->
  <!--      <div @click="changeFull" style="padding: 0 12px">-->
  <!--        <fullscreen-exit-outlined v-if="state.isFull"/>-->
  <!--        <fullscreen-outlined v-else/>-->
  <!--      </div>-->
  <!--    </a-tooltip>-->
  <!--  </div>-->
  <!--  <div class="headerDiv">-->
  <!--    <a-dropdown placement="bottomRight">-->
  <!--      <a-space style="padding: 0 12px">-->
  <!--        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>-->
  <!--        <span>{{ realName }}</span>-->
  <!--      </a-space>-->
  <!--      <template #overlay>-->
  <!--        <a-menu>-->
  <!--          <a-menu-item @click="routerGo('/home')">-->
  <!--            <div style="min-width: 120px">-->
  <!--              <HomeOutlined/>-->
  <!--              <span style="margin-left: 12px">主页</span>-->
  <!--            </div>-->
  <!--          </a-menu-item>-->
  <!--          <a-menu-item @click="routerGo('/setting')">-->
  <!--            <div style="min-width: 120px">-->
  <!--              <SettingOutlined/>-->
  <!--              <span style="margin-left: 12px">个人设置</span>-->
  <!--            </div>-->
  <!--          </a-menu-item>-->
  <!--          <a-menu-divider/>-->
  <!--          <a-menu-item @click="logOut">-->
  <!--            <div style="min-width: 120px">-->
  <!--              <LogoutOutlined/>-->
  <!--              <span style="margin-left: 12px">退出登录</span>-->
  <!--            </div>-->
  <!--          </a-menu-item>-->
  <!--        </a-menu>-->
  <!--      </template>-->
  <!--    </a-dropdown>-->
  <!--  </div>-->

</template>

<script setup>

</script>

<style scoped>
.headerContainer {
  height: 49px;
  border-bottom: 1px solid var(--el-border-color);
  margin: 0 -20px;
  padding: 0 20px;
}

.headerDiv {
  float: right;
}

.headerDiv :hover {
  background: #f0f2f5;
}

.dropdownText {
  margin-left: 8px;
}

.iconBox {
  padding: 0 18px;
  height: 49px;
  line-height: 49px;
  color: var(--el-text-color-regular);
  font-size: var(--el-font-size-base);
}
</style>