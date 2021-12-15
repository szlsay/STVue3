import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mixin({
  mounted(){
    console.log(this.$el, 'dom ready');
  }
})
app.mount("#app")