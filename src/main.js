import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '../src/assets/index.css'
import iconfont from "../src/assets/iconfont/iconfont.css";
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'
// import pUI from './components/packages/index'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)
    // .use(pUI)
    .mount('#app')
