import { createApp } from 'vue'
import { store } from './store'
import routes from './routes'

import App from './App.vue'

const app = createApp(App);

app.use(store);
app.use(routes);

app.mount('#app')
