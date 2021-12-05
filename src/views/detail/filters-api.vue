<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Filters Api</h1>
    <p class="mb-4">
      Vue 2'de kullandığımız filtreler, Vue 3 ile artık kullanımdan kaldırıldı ve desteği kesildi. Bunun yerine <code>method</code> ve
      <code>computed</code> özelliklerinde kullanılmaları öneriliyor.
    </p>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <figcaption class="figure-caption text-center mb-1"><mark>Vue 2</mark> Filtre Kullanımı</figcaption>
          <img class="img-fluid" src="@/assets/img/filters/filters-vue2.png" alt="Vue 2 Filtre Kullanımı" />
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <figure class="figure">
          <figcaption class="figure-caption text-center mb-1"><mark>Vue 3</mark> Filtre Kullanımı</figcaption>
          <img class="img-fluid" src="@/assets/img/filters/filters-vue3.png" alt="Vue 3 Filtre Kullanımı" />
        </figure>
      </div>
    </div>
    <hr />
    <h2 class="mt-3">Global Filtreler</h2>
    <p>
      Global filtrelerimizi, Vue 2'de filters.js adında bir dosya oluşturup buraya yazarak projenin her yerinden ulaşabiliyorduk ancak filtrelerin
      kullanımdan kalkmasıyla artık bunun yerine
      <a href="https://v3.vuejs.org/api/application-config.html#globalproperties">Global Properties</a> olarak tanımlayacağız aşağıdaki gibi
      projelerimizde çağıracağız.
    </p>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <figcaption class="figure-caption text-center mb-1">Global Filtre Oluşturma</figcaption>
          <img class="img-fluid" src="@/assets/img/filters/filters-vue3-1.png" alt="Global Filtre Oluşturma" />
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <figure class="figure">
          <figcaption class="figure-caption text-center mb-1">Global Filtre Çağırma</figcaption>
          <img class="img-fluid" src="@/assets/img/filters/filters-vue3-2.png" alt="Global Filtre Çağırma" />
        </figure>
      </div>
    </div>
  </div>
  <sources :sources="sources" />
</template>
<script>
  export default {
    setup() {
      const sources = ["https://v3.vuejs.org/guide/migration/filters.html#filters"];
      return {
        sources,
      };
    },
  };
</script>
<style lang=""></style>
