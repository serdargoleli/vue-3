<template>
  <div class="row mb-3">
    <div class="col-12">
      <h3 class="mb-1">Kaynaklar</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-break" v-for="(source, index) in sources" :key="index + '' + source">
          <a :href="source" target="_blank">
            {{ source }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sources",
    props: ["sources"],
  };
</script>

<style></style>
