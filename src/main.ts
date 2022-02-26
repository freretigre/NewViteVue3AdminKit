import { createApp } from 'vue'
import { store } from './store'
import routes from './routes'
import App from './App.vue'
import '@/styles/index.scss' // 全局 css
import 'virtual:svg-icons-register'
const app = createApp(App);

app.use(store);
app.use(routes);
// app.use(initSvgIcon);
app.mount('#app')
