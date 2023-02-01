<template>
  <div class="headerContainer">
    <div class="right">
      <div class="hover-trigger">
        <el-icon class="icon" size="18px">
          <component is="FullScreen"/>
        </el-icon>
      </div>
      <div class="hover-trigger">
        <el-dropdown style="height: 100%" :teleported="false">
          <el-icon class="icon" size="18px">
            <component is="Switch"/>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>🇨🇳<span class="dropdown-text">简体中文</span></el-dropdown-item>
              <el-dropdown-item>🇭🇰<span class="dropdown-text">繁体中文</span></el-dropdown-item>
              <el-dropdown-item>🇺🇸<span class="dropdown-text">English</span></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div class="hover-trigger">
        <el-dropdown placement="bottom-end" style="height: 100%" :teleported="false">
          <el-space class="icon">
            <el-avatar :size="25" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
            <span>刘克轩</span>
          </el-space>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="go('/home')">
                <el-icon>
                  <component is="House"/>
                </el-icon>
                <span>主页</span>
              </el-dropdown-item>
              <el-dropdown-item @click="go('/setting')">
                <el-icon>
                  <component is="Setting"/>
                </el-icon>
                <span>个人设置</span>
              </el-dropdown-item>
              <el-dropdown-item @click="logout" divided>
                <el-icon>
                  <component is="SwitchButton"/>
                </el-icon>
                <span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!--    <a-dropdown placement="bottomRight">-->
        <!--      <a-space style="padding: 0 12px">-->
        <!--        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>-->
        <!--        <span>{{ realName }}</span>-->
        <!--      </a-space>-->
        <!--      <template #overlay>-->
        <!--        <a-menu>-->
        <!--          <a-menu-item @click="routerGo('/home')">-->
        <!--            <div style="min-width: 120px">-->
        <!--          <a-menu-item @click="routerGo('/setting')">-->
        <!--            <div style="min-width: 120px">-->
        <!--              <SettingOutlined/>-->
        <!--              <span style="margin-left: 12px">个人设置</span>-->
        <!--            </div>-->
        <!--          </a-menu-item>-->
        <!--          <a-menu-divider/>-->
        <!--          <a-menu-item @click="logout">-->
        <!--            <div style="min-width: 120px">-->
        <!--              <LogoutOutlined/>-->
        <!--              <span style="margin-left: 12px">退出登录</span>-->
        <!--            </div>-->
        <!--          </a-menu-item>-->
        <!--        </a-menu>-->
        <!--      </template>-->
        <!--    </a-dropdown>-->

      </div>


    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const data = reactive({
  isFull: false
})

const changeFull = () => {

}

const go = path => {
  const router = useRouter()
  router.push(path)
}

const logout = () => {
  go('login')
  ElMessage.success('退出登录成功')
}
</script>

<style scoped lang="less">
.headerContainer {
  height: 49px;
  border-bottom: 1px solid var(--el-border-color);
  margin: 0 -20px;
  padding: 0 20px;

  .right {
    height: 100%;
    float: right;
    display: flex;

    .icon {
      align-items: center;
      height: 100%;
      padding: 0 10px;
    }
  }

  .hover-trigger {
    height: 100%;
  }

  .hover-trigger :hover {
    background: #f6f6f6;
    cursor: pointer;
  }

  .dropdown-text {
    margin-left: 8px;
  }
}


.icon {
}
</style>