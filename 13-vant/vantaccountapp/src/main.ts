import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button } from 'vant'
import { Form, Field, CellGroup } from 'vant';

const app = createApp(App)
app.use(Button)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(router)
app.mount('#app')
