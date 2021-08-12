<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    }
  },

  created() {
    let res = axios
      .get(`https://blogproject-d04d7-default-rtdb.firebaseio.com/posts/${id}`)
      .then((data) => {
        this.blog = res.data
      })
  },
}
</script>
