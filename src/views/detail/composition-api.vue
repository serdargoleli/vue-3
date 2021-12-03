<template>
  <h1 class="text-danger mb-2">Options Api'den > Composition Api'ye Geçiş</h1>
  <p class="text-muted">
    Composition Api, Vue.js 3'teki en büyük yeniliklerden biri. Vue 2'den alışık olduğumuz Options Api'yi bir adım öne taşıyıp biz geliştiricilere
    daha fazla özgürlük veriyor. Yazılan kodlarımızın tekrar kullanılmasını, temiz kod yazmamızı ve kolay okunabilirliği sağlıyor.
  </p>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="pt-3">
          <h3 class="">Vue2 Options Api</h3>
          <ul>
            <li>
              Küçük ve orta ölçekli projeler için Vue 2 Options Api'si gayet iyi ve yeterliydi ancak projenin kapsamının büyümesi fonksiyonelliğin
              artmasıyla kod parçalarını okumak zor bir hale geliyordu.
            </li>
            <li>
              Vue 2 bizi reactive değişkenleri(data), metotları(methods), hesaplanan değerleri(computed) vb. bir yerde yazmaya zorluyor ve hepsinin
              kendi kapsamında yazılarak bir yerde toplanıyordu güzel ve okunaklı gibi dursada işlemler arttıkça satırlar uzayıp gidiyor ve hangi
              değişkenin ne için kullanıldığını, metodun içindeki yapılan işlemi vs. bulmak için tekrar o kısımlara gitmemiz gerekiyordu.
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12">
        <div class="pt-3">
          <h3>Vue3 Composition Api</h3>
          <ul>
            <li>
              Vue 3 ile gelen en büyük özelliklerden olan Composition Api, bizlere küçük, orta ve büyük projelerde kod karmaşıklığından kurtararak
              daha anlaşılır, kullanışlı ve hızlı geliştirilebilir bir yapı sunuyor.
            </li>
            <li>
              Options Api'den farklı olarak burada bir <code>setup(){....}</code> bileşeni oluşturuyoruz ve burada tüm değişkenlerimizi, metodlarımızı
              hesaplanan değerlerimizi vs. buradan yönetebiliyoruz. Aşağıda bulunan örnek kod karşılatırmalarını inceleyebilirsiniz.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/options-api.png" alt="options api" />
          <figcaption class="figure-caption text-center">Vue 2 Options API</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/composition-api.png" alt="composition api" />
          <figcaption class="figure-caption text-center">Vue 3 Composition API</figcaption>
        </figure>
      </div>
    </div>

    <sources :sources="sources" />
  </div>
</template>

<script>
  export default {
    name: "CompositionApi",
    setup() {
      const sources = [
        "https://v3.vuejs.org/guide/composition-api-introduction.html#setup-component-option",
        "https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api",
        "https://www.youtube.com/watch?v=V-kxBWcPJfo&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=11",
        "https://markus.oberlehner.net/blog/vue-3-composition-api-vs-options-api/",
      ];

      return { sources };
    },
  };
</script>
