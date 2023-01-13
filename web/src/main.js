import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

//https://element-plus.gitee.io/zh-CN/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//https://router.vuejs.org/zh/index.html
import router from "./plugins/router";
import icons from "./plugins/icons.js";

const app = createApp(App)
app.use(ElementPlus).use(router).use(icons)
app.mount('#app')
