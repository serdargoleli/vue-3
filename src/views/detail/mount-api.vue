<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Mount Api</h1>
    <p class="mb-4">
      Vue 2’de uygulamayı mount etmeden önce Vue örneğini oluşturuyor, daha sonra kullanmak istediğimiz eklenti, filtre, bileşen, router vs. parçaları
      uygulamayı mount etmeden önce ekliyorduk. Vue 3’te ise önce uygulama mount ediliyor, daha sonra uygulamaya eklentileri ekleniyor
    </p>
    <p>
      Yazdığımız Vue uygulamasının <code>#app</code> elementi içine bind edilmesi için JS dosyasında new Vue diyerek render edecek vue dosyasını
      veriyorduk. Vue 3 functional halde geldi yani classlar yerine fonksiyonlar kullanılıyor artık. Vue 3'te <code>createApp</code> fonksiyonumuz
      var. Render edilecek Vue dosyasını artık bu fonksiyona parametre olarak veriyoruz.
    </p>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <figcaption class="figure-caption text-center mb-1"><mark>Vue 2</mark> Mount</figcaption>
          <img class="img-fluid" src="@/assets/img/mount/vue-2-mount.png" alt="Vue 2 Mount" />
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <figure class="figure">
          <figcaption class="figure-caption text-center mb-1"><mark>Vue 3</mark> Mount</figcaption>
          <img class="img-fluid" src="@/assets/img/mount/vue-3-mount.png" alt="Vue 3 Mount" />
        </figure>
      </div>
    </div>
  </div>
  <sources :sources="sources" />
</template>
<script>
  export default {
    setup() {
      const sources = [
        "https://www.evrenbal.com/vue-3-hakkinda-bilmeniz-gerekenler-yenilikler/",
        "https://v3.vuejs.org/guide/migration/mount-changes.html#mounted-application-does-not-replace-the-element",
        "https://medium.com/wereprotein/vue-3-i%CC%87le-gelen-yenilikler-dc39b31e375b",
      ];
      return {
        sources,
      };
    },
  };
</script>
<style lang=""></style>
