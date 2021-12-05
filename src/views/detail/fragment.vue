<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Fragment (Layout)</h1>
    <p>
      Vue 2'de her bileşen için <code>template</code> ögesinin içine fazladan bir ana kapsayıcı belirlemek zorundaydık. Vue 3 ile artık
      bileşenlerimize fazladan bir ana kapsayıcı eklememize gerek kalmıyor.
    </p>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/fragment/fragment-vue-2.png" alt="Vue 2 bileşen görünümü" />
          <figcaption class="figure-caption text-center">Vue 2 bileşen görünümü</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/fragment/fragment-vue-3.png" alt="Vue 3 bileşen görünümü" />
          <figcaption class="figure-caption text-center">Vue 3 bileşen görünümü</figcaption>
        </figure>
      </div>
    </div>
  </div>
  <sources :sources="sources" />
</template>
<script>
  export default {
    name: "Fragment",
    setup() {
      const sources = ["https://v3.vuejs.org/guide/migration/fragments.html#fragments"];
      return { sources };
    },
  };
</script>
