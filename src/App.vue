<template>
  <main class="main">
    <navbar />
    <div class="container pt-4">
      <router-view />
    </div>
  </main>
</template>

<script>
  import navbar from "./components/navbar.vue";
  export default {
    name: "Home",
    components: {
      navbar,
    },
  };
</script>
<style scope>
  /*  #nav a.router-link-exact-active {
    color: #42b983;
  } */

  a {
    text-decoration: none;
  }
</style>
