<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Next Tick</h1>
    <p class="mb-4">
      DOM'un eşzamansız olarak güncellenir. Vue'da bir değeri değiştirdiğinizde, değişiklik hemen DOM'a işlenmez. Bunun yerine, Vue bir DOM
      güncellemesini sıraya koyar ve ardından bir zamanlayıcıda DOM'u günceller. Normalde, bu o kadar hızlı gerçekleşir ki bir fark yaratmaz, ancak
      bazen, oluşturulan DOM'u Vue oluşturduktan sonra güncellemeniz gerekir, çünkü güncelleme gerçekleşmediğinden bunu bir yöntemde hemen
      yapamazsınız. Bu durumlarda <code>nextTick</code> kullanılır. Yani kısaca bahsetmek gerekirse DOM yüklendikten sonra sayfayı yenilemeden DOM
      üzerinde bir takım değişiklik yapmamız gereken durumlarda <code>nextTick</code> kullanmamız gerekir.
    </p>
  </div>
  <div class="row">
    <div class="col-12 col-md-6">
      <figure class="figure">
        <img class="img-fluid" src="@/assets/img/next-tick/1.png" alt="Vue 2 nexttick tanımlama" />
        <figcaption class="figure-caption text-center">Vue 2nexTtick tanımlama</figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6">
      <figure class="figure">
        <img class="img-fluid" src="@/assets/img/next-tick/2.png" alt="Vue 3 nexttick tanımlama." />
        <figcaption class="figure-caption text-center">Vue 3 nexTtick tanımlama</figcaption>
      </figure>
    </div>
  </div>
  <sources :sources="sources" />
</template>
<script>
  export default {
    setup() {
      const sources = [
        "https://v3.vuejs.org/guide/migration/global-api-treeshaking.html#global-api-treeshaking",
        "https://qastack.info.tr/programming/47634258/what-is-nexttick-or-what-does-it-do-in-vuejs",
      ];
      return { sources };
    },
  };
</script>
<style lang=""></style>
