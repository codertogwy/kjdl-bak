<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">坤江电力</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="账户">
            <template #prepend>
              <el-button :icon="User"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="param.password" @keyup.enter="submitForm(login)">
            <template #prepend>
              <el-button :icon="Lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm(login)">登录</el-button>
        </div>
        <p class="login-tips">Tips : 有问题联系QQ,1104390523
        </p>
      </el-form>
    </div>
    <div class="footer">
      <a style="color:#ffffff" href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2021000991号-1</a>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {ElMessage} from 'element-plus';
import {Lock, User} from '@element-plus/icons-vue';

const router = useRouter();
const param = reactive({});

const rules = {
  username: [{required: true, message: '请输入账户', trigger: 'blur'}],
  password: [{required: true, message: '请输入密码', trigger: 'blur'}]
};

const login = ref()

const submitForm = formEl => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {

      ElMessage.success('登录成功');
      sessionStorage.setItem('token', 'token');
      router.push({path: '/'});
    }
  });
};
</script>

<style scoped>
.footer {
  text-align: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
}

.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/img/login-bg.jpg);
  background-size: 100%;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>