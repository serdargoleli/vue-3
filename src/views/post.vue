<!-- post.vue -->
<template>
  <div class="card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 class="card-title">Post Title 1</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div>
        <a href="javascript:;" class="btn btn-warning mr-4"><i class="bi bi-pencil-square"></i></a>
        <a href="javascript:;" @click="isModalOpen = true" class="btn btn-danger d-inline-block"><i class="bi bi-trash"></i></a>
      </div>
    </div>
  </div>
  <modal v-model:isModal="isModalOpen" />
</template>
<script>
  import { ref } from "vue";
  import modal from "../components/modal.vue";
  export default {
    components: { modal },
    setup() {
      let isModalOpen = ref(false);
      return {
        isModalOpen,
      };
    },
  };
</script>
<style lang="css">
  .mr-4 {
    margin-right: 10px;
  }
</style>
