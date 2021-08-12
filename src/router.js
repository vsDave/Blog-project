import { createRouter, createWebHistory } from 'vue-router'
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlog.vue'
import singleBlog from './components/singleBlog.vue'
const routes = [
  {
    path: '/',
    component: showBlogs,
  },
  {
    path: '/add',
    component: addBlog,
  },
  {
    path: '/blog/:id',
    component: singleBlog,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})

export default router
// const router = VueRouter.createRouter({
//   history: createWebHistory(),
//   routes,
// })

// export default router
