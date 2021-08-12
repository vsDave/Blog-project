<template>
  <div id="show-blogs">
    <h1 class="font-serif text-3xl font-bold underline ml-9">
      All blog Articles
    </h1>
    <input
      class="p-1 text-2xl border border-black m-9"
      type="text"
      v-model="search"
      placeholder="search blog here"
    />
    <div v-for="blog in filteredBlogs" class="single-blog m-9">
      <router-link v-rainbow :to="`/blog/${blog.id}`">
        <h2 class="text-xl font-bold">
          {{ convertToUpper(blog.title) }}
        </h2>
      </router-link>
      <article>{{ snippet(blog.content) }}</article>
    </div>
  </div>
  <h1 v-if="loadMessage" class="font-sans text-4xl font-bold text-center">
    please wait for a while Page is loading!!
  </h1>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      blogs: [],
      search: '',
      loadMessage: true,
    }
  },
  methods: {
    convertToUpper: function (title) {
      return title.toUpperCase()
    },
    snippet: function (value) {
      return value.slice(0, 100)
    },
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    },
  },

  async mounted() {
    let res = await axios.get(
      'https://blogproject-d04d7-default-rtdb.firebaseio.com/posts.json'
    )
    this.loadMessage = false
    var blogsArray = []
    for (let key in res.data) {
      res.data[key].id = key
      blogsArray.push(res.data[key])
    }

    console.log(blogsArray)
    this.blogs = blogsArray
    console.log(res.data)
  },
}
</script>
