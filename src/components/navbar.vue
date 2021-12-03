<template>
  <nav class="navbar navbar-expand-xl sticky-top navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">VUE 3 Yenilikler</a>
      <ul class="navbar-nav ms-auto flex-row">
        <li class="nav-item">
          <a class="nav-link p-2" href="https://github.com/serdargoleli">
            <i class="bi bi-github"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-2" href="https://linkedin.com/in/serdargoleli" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
  };
</script>

<style scoped>
  .navbar-nav .nav-link i {
    font-size: 1.6rem;
  }
</style>
