<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">V-model</h1>
    <p class="mb-4">
      <code>v-model</code>, inputlardan value değerlerini almak, componentlere value bind etmek ve güncellemek için kullanılıyor. Vue 2'de bir v-model
      kullanabiliyorduk, Vue 3 ile artık birden fazla datayı izleyip, bind edebileceğiz.
    </p>
    <hr />
    <h2 class="mt-4">Vue 2 ile v-model kullanımı</h2>
    <div class="row">
      <div class="col-12 col-md-6">
        <p>
          Ana bileşenimizde child componentimizi kullanmak için import ediyoruz ve daha sonra components içerisinde tanımlıyoruz. Child bileşenimize
          göndermek istediğimiz değeri <code>v-model="değişkenAdı"</code> diyerek bind ediyoruz.
          <small>Burada yalnızca bir adet <code>v-model</code> kullanılarak bind edebiliyoruz.</small>
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/v-model/vue-v-model.png" alt="Vue 2, v-model ile değer bind etme." />
          <figcaption class="figure-caption text-center">Vue 2 bileşenimize v-model ile değer bind etme.</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p>
          Child componentimizin içerisinde <code>props</code> değerini, <code>v-model</code> aracılığıyla alacağımız için model objesini belirterek
          almak istediğimiz props adını belirtiyoruz.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/v-model/v-model-instance.png" alt="Vue 2 v-model ile değer alma." />
          <figcaption class="figure-caption text-center">Vue 2 component içerisinde v-model ile değer okuma.</figcaption>
        </figure>
      </div>
    </div>
    <hr />

    <h2 class="mt-5 mb-3">Vue 3 ile v-model kullanımı</h2>
    <div class="row">
      <div class="col-12">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/v-model/vue3-props.png" alt="Vue 3, v-model tanımlaması." />
          <figcaption class="figure-caption text-center">Vue 3, v-model tanımlaması</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p>
          Vue 3 ile ana elementimize componentimizi import edip tanımladıktan sonra template alanımızda <code>child</code> taglerimizi oluşturuyoruz.
          Göndermek istediğimiz prop değerlerini artık birden fazla <code>v-model="değişkenAdı"</code> vererek bind edebiliyoruz. Bİr diğer özellik
          ise artık Vue 2'de senkton etmek için kullandığımız <code>.sync</code> özelliğine gerek kalmıyor.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/v-model/vue3-parent.png" alt="Vue 3, birden fazla v-model kullanarak değer bind etme." />
          <figcaption class="figure-caption text-center">Vue 3, birden fazla v-model kullanarak değer bind etme.</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p>
          Bileşenimizin içerisindeki tanımlamalar Vue 2 ile aynı şekilde, Child componentimizin içerisinde <code>props</code> değerini,
          <code>v-model</code> aracılığıyla alacağımız için model objesini belirterek almak istediğimiz props adını belirtiyoruz.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/v-model/vue3-child.png" alt="Vue 3 v-model ile değer alma." />
          <figcaption class="figure-caption text-center">Vue 3 component içerisinde v-model ile değer okuma.</figcaption>
        </figure>
      </div>
    </div>
    <sources :sources="sources" />
  </div>
</template>
<script>
  export default {
    setup() {
      const sources = [
        "https://v3.vuejs.org/guide/migration/v-model.html#v-model",
        "https://medium.com/wereprotein/vue-3-i%CC%87le-gelen-yenilikler-dc39b31e375b",
      ];
      return { sources };
    },
  };
</script>
<style lang=""></style>
