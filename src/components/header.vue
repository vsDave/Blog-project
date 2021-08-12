<template>
  <nav class="mb-5 font-serif text-2xl bg-gray-500">
    <ul class="mx-0 font-semibold text-center text-white">
      <li class="inline-block mx-10 my-5 underline">
        <router-link to="/" class="rounded-md hover:bg-gray-800" exact
          >Blog</router-link
        >
      </li>
      <li class="inline-block mx-10 my-5 underline">
        <router-link to="/add" class="rounded-md hover:bg-gray-800" exact
          >Add a new Blog
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {}
</script>
