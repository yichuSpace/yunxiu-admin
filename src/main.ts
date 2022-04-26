import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router';
// 创建vue实例
const app = createApp(App)
import "@/styles/index.scss";
import "element-plus/theme-chalk/src/message.scss"

app.use(store) // 挂载pinia
app.use(router);// 挂载router
// 挂载实例
app.mount('#app');