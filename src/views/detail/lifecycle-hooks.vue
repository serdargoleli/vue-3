<template>
  <h1 class="text-danger mb-2">LifeCycle Hooks</h1>
  <p class="text-muted">Vue 3 ile güncellenen LifeCycle Hooks'a geçmeden önce Vue 2'de kullandığımız LifeCycle Hooks'a bakalım.</p>
  <hr />
  <h4 class="text-muted mb-1">Vue 2 lifeCycleHooks</h4>
  <p class="text-muted">
    Oluşturduğumuz Vue.js instance nesnesi çalışırken belirli aşamalardan geçerek işlemleri yerine getirir. İşte bu belirli aşamalarda bazı durumlarda
    bazı spesifik kodları çalıştırma durumunda kalabiliriz. Bu yüzden Vue.js içerisinde (Lifecycle Hooks) Türkçe olarak da “Hayat Döngüsü Olayları”
    diye adlandıracağım sistem içerisinde bazı metodlar oluşturmuşlar. Bu metodlar bu olayların gerçekleşme anında araya girebilmemiz için bizlere
    kolaylık sağlayacak. Şimdi tek tek bunları inceleyelim.
  </p>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-break text-muted border-bottom-0" v-for="(lifeCycleHook, index) in lifeCycleHooks" :key="index">
      <strong class="text-muted">{{ lifeCycleHook.name }}:</strong> {{ lifeCycleHook.description }}
    </li>
  </ul>
  <hr />
  <h4 class="text-muted mb-1">Vue 3 lifeCycleHooks</h4>
  <p class="text-muted">
    Vue 2 LifeCycle Hook ile birebir aynı mantıkta çalışıyor. Farklı olarak <code>beforeCreate</code> ve <code>created</code> artık kullanılmıyor.
    Birde Her hooks metodumuzun başına <code>On</code> eki getirerek çağırıyoruz. Örneğin: <code>OnMounted</code>, <code>onUpdated</code> olarak setup
    bileşenimizde çağırıyoruz ve <code>import</code> etmeyi unutmuyoruz. Aşağıdaki görselde kullanım örneği verilmiştir.
  </p>
  <img class="img-fluid" src="@/assets/img/lifeCycleHooks/lifeCycleHooks.png" alt="Vue 3 lifeCycleHooks" />
  <p class="text-muted mt-4 mb-0">Vue 3'te iki ek izleyici daha geliyor. Bunlar:</p>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-break text-muted border-bottom-0">
      <strong class="text-muted">onRenderTracked:</strong> Oluşturma sırasında reaktif bir bağımlılığa ilk erişildiğinde çağrılır.
      Bu bağımlılık şimdi izlenecek. Bu, hata ayıklama için hangi bağımlılıkların izlendiğini görmek için yararlıdır.
    </li>
    <li class="list-group-item text-break text-muted border-bottom-0">
      <strong class="text-muted">onRenderTriggered:</strong> Yeni bir oluşturma tetiklendiğinde çağrılır ve hangi bağımlılığın bir bileşeni yeniden
      oluşturmayı tetiklediğini incelemenize olanak tanır.
    </li>
  </ul>

  <sources :sources="sources" />
</template>

<script>
  export default {
    setup() {
      const lifeCycleHooks = [
        {
          name: "beforeCreated",
          description:
            "Bu hook metodu, ilk Vue.js instance nesnesi oluşturulmadan önce çağrılan metoddur. Bu aşamada data observation (reactivity), events, computed properties ve watchers’lar ayarlanma aşamasındadır ve hiç biriyle henüz etkileşime giremeyiz",
        },
        {
          name: "created",
          description:
            "Bu hook metodu, ilk Vue.js instance nesnesi oluşturulduğunda çağrılan metoddur. Bu aşamada data observation (reactivity), events, computed properties ve watchers’lar ayarlanmıştır ve etkileşime girebiliriz; fakat DOM ile etkileşime giremeyiz. Çünkü mounted olmamıştır. Yani “el” elementimiz olarak belirttiğimiz html kod bloğu sanal DOM’a daha yerleştirilmemiştir. Aynı zamanda “$el” property ‘de kullanıma daha henüz hazır değildir.",
        },
        {
          name: "beforeMount",
          description:
            "Bu aşamada “el” elementimiz olarak belirttiğimiz html kod bloğu sanal DOM’a daha yerleştirilmemiştir. Aynı zamanda “$el” property ‘de kullanıma daha henüz hazır değildir. Yerleştirme işlemi gerçekleşmeden önce bu hook metodu çağrılır.",
        },
        {
          name: "mounted",
          description:
            "Bu aşamada “el” elementimiz sanal DOM’a yerleştirilmiştir. Kısaca tüm componentler render edilmiş ve sanal DOM’a yerleştirilmiştir. Vue.js özel “$el” değişkeni yeni oluşturulan “vm.$el” ‘e devredilmiştir. Ayrıca artık tüm componentler etkileşime hazır vaziyettedir.",
        },
        {
          name: "beforeUpdate",
          description:
            "Bu hook metodu, herhangi bir data değiştiğinde ve DOM’da bunu güncellemeye ihtiyaç duyduğunda data ve DOM’da veri değişmeden bu metod çağrılıyor.",
        },
        {
          name: "updated",
          description:
            "Veride değişiklik olduktan sonra ve DOM’da da veri değiştiğinde bu hook metodu çağrılacaktır. Eğer değişiklikten sonra araya girip bir işlem yaptırmak istiyorsak bu metodu kullanacağız.",
        },
        { name: "beforeDestroy", description: "Vue instance nesnesi yok edilmeden önce çağrılacak hook metodudur." },
        { name: "destroyed", description: "Vue instance nesnesi yok edildikten sonra çağrılacak hook metodudur." },
      ];
      const sources = [
        "https://medium.com/@mert.demir96/vuejs-lifecycle-hooks-nedir-5977a34678f3",
        "https://vuejs.org/v2/api/#Options-Lifecycle-Hooks",
        "https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram",
        "https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle",
        "https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html",
        "https://www.vuemastery.com/courses/vue-3-essentials/lifecycle-hooks",
      ];
      return { lifeCycleHooks, sources };
    },
  };
</script>

<style></style>
