// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)

//custom directives
app.directive('rainbow', (el, binding) => {
  el.style.color = '#' + Math.random().toString().slice(2, 8)
})

app.use(router)
app.mount('body')
