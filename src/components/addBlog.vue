<template>
  <div class="flex flex-col text-gray-600">
    <h2 class="ml-5 font-serif text-3xl font-bold text-gray-600">
      Add a new blog Post here
    </h2>
    <form v-if="!submitted" class="ml-5 text-xl font-bold">
      <label>Blog title:</label>
      <input
        class="inline-block m-5 border border-black"
        type="text"
        v-model.lazy="blog.title"
      />

      <label class="m-2"> Blog content:</label>
      <textarea
        v-model.lazy="blog.content"
        class="inline-block border border-black"
        required
      ></textarea>
      <div class="flex flex-col mb-5 text-gray-900">
        <div>
          <label class="mr-3">Travel</label>
          <input
            class="mr-6"
            type="checkbox"
            value="Travel"
            v-model="blog.categories"
          />
        </div>
        <div>
          <label class="mr-3">Study</label>
          <input
            class="mr-6"
            type="checkbox"
            value="Study"
            v-model="blog.categories"
          />
        </div>
        <div>
          <label class="mr-3">Yoga</label>
          <input
            class="mr-6"
            type="checkbox"
            value="Yoga"
            v-model="blog.categories"
          />
        </div>
        <div>
          <label class="mr-3">Money</label>
          <input
            class="mr-6"
            type="checkbox"
            value="Money"
            v-model="blog.categories"
          />
        </div>
      </div>
      <!-- v-model for selec box -->
      <label>Author: </label>
      <select
        class="inline-block mb-5 border border-black"
        v-model="blog.author"
      >
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <!-- prevent is to prevent default behavior means we dont want to go off the page  -->
      <hr />
      <button
        class="p-2 mx-1 my-4 text-white bg-black rounded-md  hover:text-white hover:bg-green-900"
        @click.prevent="post"
      >
        Add blog
      </button>
    </form>

    <div
      id="preview-section"
      class="m-5 text-xl border border-black m-7box-border preview"
    >
      <h3 class="mt-6 font-semibold">Preview blog</h3>
      <p class="mt-6">Blog title:</p>
      <p>{{ blog.title }}</p>
      <p class="mt-6">Blog content:</p>
      <p>{{ blog.content }}</p>
      <p class="mt-6">Blog categories:</p>
      <ul>
        <li class="m-1" v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p class="mt-6">Author Selected: {{ blog.author }}</p>
    </div>
  </div>
  <div
    v-if="submitted"
    class="text-2xl font-bold text-center text-green-800 underline"
  >
    <a v-bind:href="blog.link"></a>
    <h3>Thanks for submitting form!!!</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
        errors: [],
      },
      authors: [
        'vishva ',
        'PK swani',
        'KK patel',
        'raj krishnamurty',
        'vicky',
        'aisha',
        'olivia',
        'tailor',
      ],
      submitted: false,
    }
  },
  methods: {
    post() {
      //axios is a library to make request to API
      const res = axios
        .post(
          'https://blogproject-d04d7-default-rtdb.firebaseio.com/posts.json',
          this.blog
        )
        .then((data) => {
          console.log(data)
        })
      this.submitted = true
      console.log(res, 'res')
    },
  },
}
</script>

<style></style>
