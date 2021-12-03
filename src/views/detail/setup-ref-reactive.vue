<template>
  <h1 class="text-danger mb-2">Setup, Ref, Reactive Kullanımı</h1>
  <p class="text-muted">
    Vue 3'ün en büyük yeniliklerinden biri olan Composition Api'yle çalışmaya başlamak için bir <code>setup(){...}</code> bileşenine ihtiyacımız var.
    Setup bileşeni içerisinde değişkenlerimize ve metodlarımıza erişmek için, değerlerini güncellemek için <code>ref</code> veya
    <code>reactive</code> kullanıyoruz.
  </p>

  <!-- SETUP KULLANIMI -->
  <div class="setup text-muted">
    <div class="row">
      <div class="col-12">
        <h2 class="text-black-50 mt-3 mb-1">Setup</h2>
        <p class="mb-4">
          Composition Api'yi kullanabilmemiz için tanımlamamız gereken bileşendir. Setup bileşeni içerisinde metodlarımızı ve değişkenlerimizi
          tanımlayıp, gerekli işlemleri yaptırarak en son göstermek istediğimiz değerleri return ediyoruz. Vue 2 Options Api'de kullandığımız data,
          methods, computed vs gibi bileşenleri ayrı ayrı tanımlayıp çağırmak yerine doğrudan setup bileşeni içinde kullanabiliyoruz.
        </p>
      </div>
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img src="@/assets/img/setup-ref-reactive/setup.png" class="figure-img img-fluid rounded" alt="Setup Bileşeninin Kullanımı" />
          <figcaption class="figure-caption text-center">Setup Bileşeninin Kullanımı</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <p class="pb-md-4">
          <i>Setup Bileşeninin Kullanımı</i> görüntüsünde setup bileşenimizi tanımladık, bir değişken oluşturduk ve bu değişkene bir değer atadık. Bu
          değerin ekranda görünmesini istiyorsak, return ediyoruz ve değişkenimizi <code>template</code> tagleri arasına yazıyoruz.
        </p>
      </div>
    </div>
  </div>

  <hr />

  <!-- REF KULLANIMI -->
  <div class="ref text-muted">
    <h2 class="text-black-50 mt-3 mb-1">Ref</h2>
    <p class="mb-4">
      Vue 2'de bir html ögesine erişmek istediğimizde o ögeye <code>ref</code> niteliğini vererek, Vue Instance'de
      <code>this.$refs.referansAdi</code> şeklinde erişiyorduk. Setup Bileşeninin gelmesiyle artık <code>this</code> kullanılamıyor. Şimdi Vue 3'de
      ref ile tanımladığımız ögeye nasıl erişilir aşağıdaki örnekten inceleyebilirsiniz.
    </p>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img src="@/assets/img/setup-ref-reactive/ref.png" class="figure-img img-fluid rounded" alt="Ref Kullanımı" />
          <figcaption class="figure-caption text-center">Ref Tanımlama ve Değer Okuma</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <p class="pb-md-4">
          Bu örnekte <code>p</code> elementimize ref="p" diyerek bir referans tanımladık. Vue Instace'mizde bu ref bilgisine ulaşmak için
          <code> import { ref } from "vue";</code> diyerek ref'i kullanabilmek için import ettik. <br />
          Erişmek istediğimz referans adı "p" olduğu için <mark>aynı isimde</mark> bir değişken tanımlayıp, ref(null) değerine eşitledik. Butona
          tıklandığınında bu değeri konsola yazdırmak için bir method tanımlıyoruz. Burada <mark>ref="p"</mark> değerine ulaşmak için
          <code>p.value</code> diyerek konsola yazdırıyoruz.<br />Bize <code>&lt;p&gt;Lorem ipsum dolor sit amet&lt;/p&gt;</code> olarak çıktı
          verecektir.
        </p>
      </div>
      <!-- REF DEĞİŞKEN TANIMLAMA -->
      <div class="col-12">
        <p class="mt-4 mb-5">
          Her seferinde html ögelerimize ref tanımlamak çok mantıklı olmayacağı için Vue 2'den data bileşeninde tanımladığımızdan farklı olarak Vue
          3'de de const veya let ile değişkenimizi tanımlayıp string polition olarak template alanımızda gösterebiliriz.
        </p>
      </div>
      <!-- REF KULLANARAK DEĞER DEĞİŞTİRME -->
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img src="@/assets/img/setup-ref-reactive/ref-deger-degistirme-1.png" class="figure-img img-fluid rounded" alt="Ref ile değer değiştirme" />
          <figcaption class="figure-caption text-center">Ref <mark>kullanarak</mark> değer değiştirme</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <p class="pb-md-4">
          Vue 2 Options Api'de data bileşeninin altında <code>name:"John Doe"</code> olarak değer belirler ve daha sonra bu değeri reaktif bir şekilde
          güncelleyebiliyorduk. Vue 3 Composition Api ile artık data yerine setup bileşenimizin içinde <code>let name = ref("John Doe")</code> diyerek
          ve bu değeri return ederek, templatemizde bu değişkeni string poition olarak kullanıyoruz ve bu değeri değiştirmek için de oluşturduğumuz
          method içerisinde <code>name.value ="Yeni değer"</code> dememiz yeterli oluyor. <br />
          <code>handleButton</code> metodu tetiklendiğinde name değişkeninin yeni değeri Serdar Göleli olacaktır. <br />
        </p>
      </div>
      <!-- REF KULLANMADAN DEĞER DEĞİŞTİRME -->
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img
            src="@/assets/img/setup-ref-reactive/refsiz-deger-degistirme-1.png"
            class="figure-img img-fluid rounded"
            alt="Ref kullanmadan  değer değiştirme"
          />
          <figcaption class="figure-caption text-center">Ref <mark>kullanmadan</mark> değer değiştirme</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center">
        <p class="pb-md-4">
          Eğer ref kullanmadan doğrudan bu şekilde değeri değiştirmeye çalışırsak değer değişmeyecektir. Nedeni ise reactif yapıda olmaması yani değer
          değiştiğinde otomatik olarak <code>name</code> alanının güncellenmemesi.
        </p>
      </div>
    </div>
  </div>

  <hr />

  <!-- REACTIVE KULLANIMI -->
  <div class="ref text-muted">
    <h2 class="text-black-50 mt-3 mb-1">Reactive</h2>
    <p class="mb-4">
      Vue 3 Composition Api ile gelen bir diğer özelliğimiz ise reactive tanımlama, bu yapı her ne kadar ref tanımlamaya benzese de bazı temel
      değişiklikler vardır. Ref ile her türlü değişken tipi atanabilirken <i>(String, Int, Array, Onject, Number...)</i> reactive yalnızca obje ve
      diziler için uygundur. Şimdi önce reactivenin kullanımına daha sonra ref ile olan farkalrına bakalım.
    </p>

    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img src="@/assets/img/setup-ref-reactive/reactive.png" class="figure-img img-fluid rounded" alt="Reactive Tanımlama ve Değer Okuma" />
          <figcaption class="figure-caption text-center">Reactive Tanımlama ve Değer Okuma</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-md-flex align-items-md-center">
        <p class="pb-md-4">
          Bu örneğimizde <code>reactive({})</code> kullanrak bir obje oluşturduk ve bu objeye <code>name</code> ve <code>age</code> özelliklerini
          ekledik daha sonra bu özellikleri <code>obj.name</code> ve <code>obj.age</code> diyerek ekrana yazdırdık. Buraya kadar herşey ref
          kullanımıyla bire bir aynı, farklılıklar ise Vue Instance'de yeni değer ataması yapılacağında ve mevcut değeri okuma işleminde ortaya
          çıkıyor gelin bu farklara bakalım.
        </p>
      </div>
      <!-- REACTIVE DEĞER DEĞİŞTİRME  -->
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img src="@/assets/img/setup-ref-reactive/reactive-deger-degistirme.png" class="figure-img img-fluid rounded" alt="Reactive Değer Değiştirme" />
          <figcaption class="figure-caption text-center">Reactive Değer Değiştirme</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-md-flex align-items-md-center">
        <p class="pb-md-4">
          Reactive olarak tanımladığımız bir değeri değiştirmek için <code>updateValues</code> adında bir metod tanımladık. Burada
          <u>reften farklı olarak</u> <code>obj.value.name</code> demek yerine <code>obj.name</code> olarak erişebildik ve değerimizi güncelledik.
        </p>
      </div>

      <div class="col-12 col-md-6">
        <figure class="figure">
          <img
            src="@/assets/img/setup-ref-reactive/reactive-and-ref.png"
            class="figure-img img-fluid rounded"
            alt="Reactive ve Ref Primivite Değer Değiştirme"
          />
          <figcaption class="figure-caption text-center">Reactive ve Ref Primivite değer değiştirme</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6 d-md-flex align-items-md-center">
        <p class="pb-md-4">
          Reactive ile ref arasındaki bir diğer fark ise primivite (ilkel) değeri değiştirdiğimizde ortaya çıkıyor. Yani
          <code>updateValues</code> isimli metodumuz çalıştığında ref ile tanımladığımız refname ekranda <code>refname ="Update Name 1"</code> olarak
          görünürken, reactive ile tanımladığımız reactiveName, <code>reactiveName ="First Name 1"</code> olarak kalacaktır, herhangi bir değişikliğe
          uğramayacaktır.
        </p>
      </div>
    </div>
  </div>

  <!-- SOURCES  -->
  <sources :sources="sources" />
</template>

<script>
  export default {
    name: "SetupRefReactive",

    setup() {
      const sources = [
        "https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs",
        "https://www.youtube.com/watch?v=V-kxBWcPJfo&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=11",
        "https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/",
      ];

      return { sources };
    },
  };
</script>

<style></style>
