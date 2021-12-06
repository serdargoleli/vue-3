<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Template Directives</h1>
    <hr />
    <!-- KEY KULLANIMI -->
    <h3>Key kullanımı</h3>
    <p>
      Key özelliği Vue'da bir ögenin kimliğini takip etmek, değişiklik olduğunda belirlemek ve Sanal DOM'a yerleştirmek için kullanılır. Yani
      <code>id</code> olarak kullanılıyor diyebiliriz.
    </p>
    <hr />
    <!-- IF/FOR -->
    <div class="uses-for-if">
      <h3><code>if</code> ve <code>for</code> Kullanımı</h3>
      <p>
        Vue 2 ile <code>for</code> direktifini kullandığımızda ise her ögeye ayrı bir key özelliği belirtmek durumunda kalıyorduk. Vue 3 ile artık her
        ögeye ayrı ayrı <code>key</code> belirlemek yerine kapsayıcımıza <code>key</code> belirtmek yeterli oluyor. Vue 2'de <code>for</code> ve
        <code>if</code> aynı ögede kullanıldığında öncelik <code>for</code> direktifindeydi. Vue 3 ile artık <code>if</code> direktifine öncelik
        verildi. Açıklama kısımında belirtiğim if ve for kullanımı için Vue 2 ve Vue 3 karşılaştırmalarını inceleyelim
      </p>
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
    <hr />
    <!-- v-bind -->
    <div class="v-bind">
      <h3><code>v-bind</code> davranışı</h3>
      <p>
        Vue 2'de, bir öğenin hem <code>v-bind="attiribute:value" </code>tanımlanmış hem de aynı isimde bind edilmeden kullanılan bir attiribute varsa
        öncelik her zaman attiribute'teydi. Vue 3 ile artık bunun önceliğini sırasını değiştirerek belirleyebiliyoruz.örnekler:
      </p>
      <div class="row">
        <div class="col-12 col-md-6">
          <figure class="figure">
            <img class="img-fluid" src="@/assets/img/template-directive/3.png" alt="Vue 2 tempalte directive" />
            <figcaption class="figure-caption text-center">Vue 2</figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <figure class="figure">
            <img class="img-fluid" src="@/assets/img/template-directive/4.png" alt="Vue 3 template directive." />
            <figcaption class="figure-caption text-center">Vue 3</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <hr />
    <!-- v-on.native -->
    <div class="v-on">
      <h3><code>v-on.native</code></h3>
      <p>
        Vue 2'de parent componentten, child componentin öğesine yerel bir DOM dinleyicisi eklemek için <code>.native </code>değiştirici
        kullanılıyordu. Vue 3 ile artık <code>.native </code> kullanımı kaldırıldı ve artık native yerine child componentimize
        <code>emit:["davranışAdı"] </code> diyerek ve parent componentimizde <code>v-on:davranışAdı="methods"</code> diyerek kullanabiliyoruz.
      </p>
      <div class="row">
        <div class="col-12 col-md-6">
          <figure class="figure">
            <img class="img-fluid" src="@/assets/img/template-directive/5.png" alt="Vue 2 tempalte directive" />
            <figcaption class="figure-caption text-center">Vue 2</figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <figure class="figure">
            <img class="img-fluid" src="@/assets/img/template-directive/6.png" alt="Vue 3 template directive." />
            <figcaption class="figure-caption text-center">Vue 3</figcaption>
          </figure>
        </div>
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
        "https://v3.vuejs.org/guide/migration/v-bind.html#frontmatter-title",
        "https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html#v-on-native-modifier-removed",
      ];
      return { sources };
    },
  };
</script>
<style lang=""></style>
