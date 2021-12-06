<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3" v-for="(content, index) in contents" :key="index">
      <router-link class="sub-menu-link" :to="content.to" @click="scrollToTop">
        <div class="card mb-4">
          <img :src="getImage(content.img)" class="card-img-top" :alt="content.title" />
          <div class="card-body">
            <h5 class="card-title mb-0">{{ content.title }}</h5>
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
        { title: "Composition API", to: "/detail/composition-api", img: "/composition-api.png" },
        { title: "Setup, Ref, Reactive", to: "/detail/setup-ref-reactive", img: "/setup-ref-reactive.png" },
        { title: "LifeCycle Hooks", to: "/detail/lifecycle-hooks", img: "/lifecycle-hooks.png" },
        { title: "Teleport", to: "/detail/teleport", img: "/teleport.png" },
        { title: "Fragment", to: "/detail/fragment", img: "/fragment.png" },
        { title: "Filters API", to: "/detail/filters-api", img: "/filters-api.png" },
        { title: "Mount API", to: "/detail/mount-api", img: "/mount-api.png" },
        { title: "V-model", to: "/detail/v-model", img: "/v-model.png" },
        { title: "Template Directive", to: "/detail/template-directives", img: "/template-directive.png" },
        { title: "Next Tick", to: "/detail/next-tick", img: "/next-tick.png" },
        { title: "Props", to: "/detail/props", img: "/props.png" },
      ];

      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

      const getImage = (image) => {
        return require("@/assets/img/thumbnail" + image);
      };
      return {
        contents,
        scrollToTop,
        getImage,
      };
    },
  };
</script>
<style lang="css" scope>
  .sub-menu-link {
    text-decoration: none;
    color: #41ab8a !important;
  }
  .sub-menu-link:hover {
    color: #22445d !important;
  }
</style>
