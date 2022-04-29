import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router';

import "@/styles/index.scss";
import 'normalize.css'
import "element-plus/theme-chalk/src/message.scss"
// 导入 svgIcon
// import installIcons from '@/icons'

// 创建vue实例
const app = createApp(App)
// installIcons(app)
app.use(store) // 挂载pinia
app.use(router);// 挂载router
// 挂载实例
app.mount('#app');