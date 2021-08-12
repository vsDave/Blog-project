<template>
  <div>
    <app-header></app-header>
    <router-view />
    <!-- <addBlog> </addBlog>
    <showBlog></showBlog> -->
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import header from './components/header.vue'
export default {
  components: {
    addBlog,
    showBlog,
    'app-header': header,
  },

  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
