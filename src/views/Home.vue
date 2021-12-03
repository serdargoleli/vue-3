<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4" v-for="(content, index) in contents" :key="index">
      <router-link :to="content.to">
        <div class="card" style="width: 18rem">
          <img
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            class="card-img-top"
            :alt="content.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ content.title }}</h5>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    // constructor: ilk render işleminde yüklenen değerler
    setup() {
      const contents = [
        { title: "Composition Api", to: "/detail/composition-api" },
        { title: "Setup, Ref, Reactive", to: "/detail/setup-ref-reactive" },
      ];

      return {
        contents,
      };
    },
  };
</script>
<style lang="css" scope>
  a {
    text-decoration: none;
  }
</style>
