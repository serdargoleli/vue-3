<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Template Directives</h1>
    <p>
      Vue 2 ile <code>for</code> direktifini kullandığımızda ise her ögeye ayrı bir key özelliği belirtmek durumunda kalıyorduk. Vue 3 ile artık her
      ögeye ayrı ayrı <code>key</code> belirlemek yerine kapsayıcımıza <code>key</code> belirtmek yeterli oluyor.
    </p>
    <p>
      Vue 2'de <code>for</code> ve <code>if</code> aynı ögede kullanıldığında öncelik <code>for</code> direktifindeydi. Vue 3 ile artık
      <code>if</code> direktifine öncelik verildi.
    </p>
    <hr />
    <!-- KEY KULLANIMI -->
    <h2>Key kullanımı</h2>
    <p>
      Key özelliği Vue'da bir ögenin kimliğini takip etmek, değişiklik olduğunda belirlemek ve Sanal DOM'a yerleştirmek için kullanılır. Yani
      <code>id</code> olarak kullanılıyor diyebiliriz.
    </p>
    <hr />
    <!-- IF/FOR -->
    <h2><code>if</code> ve <code>for</code> Kullanımı</h2>
    <p class="mb-4">Açıklama kısımında belirtiğim if ve for kullanımı için Vue 2 ve Vue 3 karşılaştırmalarını inceleyelim</p>
    <div class="row">
      <div class="col-12 col-md-6">
        <p>
          Vue 2 ile <code>for</code> direktifi içerisinde yer alan her ögeye ayrı ayrı ve birbirinden farklı olacak şekilde
          <code>key</code> belirlemek durumundaydık.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/template-directive/1.png" alt="Vue 2 tempalte directive" />
          <figcaption class="figure-caption text-center">Vue 2 template directive</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p>
          Vue 3 ile artık <code>for</code> direktifi içerisinde yer alan her ögeye ayrı ayrı <code>key</code> belirtmek yerine kapsayıcıya
          belirlememiz yeterli oluyor.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/template-directive/2.png" alt="Vue 3 template directive." />
          <figcaption class="figure-caption text-center">Vue 3 template directive</figcaption>
        </figure>
      </div>
    </div>
  </div>
  <sources v-model:sources="sources" />
</template>
<script>
  export default {
    setup() {
      const sources = [
        "https://v3.vuejs.org/guide/migration/v-if-v-for.html#frontmatter-title",
        "https://v3.vuejs.org/guide/migration/key-attribute.html#key-attribute",
      ];
      return { sources };
    },
  };
</script>
<style lang=""></style>
