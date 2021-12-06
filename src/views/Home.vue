<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3" v-for="(content, index) in contents" :key="index">
      <router-link :to="content.to">
        <div class="card">
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
        { title: "Composition API", to: "/detail/composition-api" },
        { title: "Setup, Ref, Reactive", to: "/detail/setup-ref-reactive" },
        { title: "LifeCycle Hooks", to: "/detail/lifecycle-hooks" },
        { title: "Teleport", to: "/detail/teleport" },
        { title: "Fragment", to: "/detail/fragment" },
        { title: "Filters API", to: "/detail/filters-api" },
        { title: "Mount API", to: "/detail/mount-api" },
        { title: "V-model", to: "/detail/v-model" },
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
