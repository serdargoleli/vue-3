<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Teleport</h1>
    <p>
      Vue 3 ile gelen bir diğer özelliğimiz ise teleport özelliğidir. Vue 3 geliştirme aşamasında ve beta sürümündeyken, teleport portal olarak
      biliniyordu. Teleport kullanımı ile ilgili örnekleri ve neden önemli olduğunu aşağıda örneklerle açıklamaya çalıştım. Örnek sayfayı
      <router-link to="/post"><i class="bi bi-box-arrow-up-right"></i> görüntüle</router-link> <small>konsolu açmayı unutma :)</small>
    </p>
    <hr />
    <p>
      Teleport özelliği, bir bileşenin başka bir bileşende çağrılması için kullanılır. Vue 2'de bileşenleri çağırmak için
      <a href="https://portal-vue.linusb.org/" target="_blank">portal-vue</a> gibi pluginler kullanılıyordu. <code>teleport</code> özelliği ile
      oluşturduğumuz bileşeni istediğimiz yere çağırabiliriz. Vue 3 ile yazdığımız bileşenler <code>id="#app"</code> elementi içerisinde render alarak
      html çıktısı verir ve bu kapsayıcının içinde işlem yapar. <code>teleport</code> kullanarak <code>body</code>, <code>head</code> ve diğer
      öğelerin içerisinde hazırladığımız bileşeni çağırabiliriz.
    </p>
    <p>Teleport özelliğimiz 4 farklı attribute alır. Bunlar: <code>to</code>, <code>disabled</code>, <code>ref</code>, <code>key</code> <br /></p>
    <p>
      Burada bizim sıklıkla kullanacağımız özellik <code>to</code> niteliğidir. Bu attiribute ile, oluşturduğumuz bileşeni nerede çağırmak istiyorsak
      o seçiciyi tanımlıyoruz. <br />
      Örn: Oluşturduğumuz bir modal boxımız olsun ve bu modal boxı <code>body</code>de çağırmak isteseydik
      <code>&lt;teleport to="body"&gt; çağrılmak istenen bileşen &lt;/teleport&gt; </code> şekilde tanımlamamız gerekirdir. Şimdi daha net anlaşılması
      için gerçek örneklere geçebiliriz<br />
    </p>
    <p>
      <b>Brief: </b> <code>post.vue</code> adında bir sayfa ve <code>modal.vue</code> adında bir component oluşturacağız.
      <code>post.vue</code> sayfamızda gönderilerimizin olduğu, güncelleme ve silme butonlarının bulunduğu bir <code>card</code> tasarımı olacak. Sil
      butonuna tıklandığında ise <code>modal.vue</code> bileşenini çağıracağız ve bu bileşende "Gönderiniz Silinecek, Emin misiniz?" sorgusu yer
      alacak. Burada görmek istediğimiz nokta modal.vue componentimizin <code>body</code> taglerinin en altında bulunması çünkü teleport kullanım
      amacı budur.
      <br />
      <small class="d-block mt-1">
        <b>Not:</b> Sayfanın sonunda teleport kullanmadan önceki ve kullandıktan sonraki halinin html çıktısını paylaşacağım, farkı daha iyi
        görebilirsiniz.
      </small>
    </p>
    <hr />
    <h2 class="mb-2">Sayfaların hazırlanması ve görünümleri</h2>

    <!-- MODAL.VUE SAYFASININ HAZIRLANAMSI -->
    <h3 class="mt-1"><code>modal.vue</code> bileşeninin hazırlanması</h3>
    <p>
      Burada post.vue sayfamızda <code>sil</code> butonuna tıkladıktan sonra açıklacak olan modal boxımızı hazırladık. Dikkat etmeniz gereken nokta
      göndermek istediğimiz kısmı <code>teleport</code> ile sarmaladık ve açılacak olan modal boxı <code>to="body"</code> diyerek, body taginin en alt
      kısmına ekleneceğini belirttik. <code>if="isModal"</code> olarak belirittiğimiz kısım bizim
      <router-link to="/detail/props">props</router-link> değerimiz olacak ve parent (post.vue) bileşeninden <code>sil</code> butonuna tıklandığında
      bu değeri <code>true</code> olarak göndererek modal boxımızı açtıracağız.
    </p>
    <div class="row">
      <div class="col-12">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/teleport/modal-box.png" alt="post.vue sayfa şablonu" />
          <figcaption class="figure-caption text-center"><code>modal.vue</code> component şablonu</figcaption>
        </figure>
      </div>
      <div class="col-12">
        <figure class="figure d-flex justify-content-center flex-column">
          <img class="img-fluid" src="@/assets/img/teleport/modal-view.png" alt=" görünümü" />
          <figcaption class="figure-caption text-center"><code>modal.vue</code> bileşen görünümü</figcaption>
        </figure>
      </div>
    </div>

    <!-- POST.VUE SAYFASININ HAZIRLANAMSI -->
    <h3 class="mt-4"><code>post.vue</code> sayfasının hazırlanması</h3>
    <p>
      Burada gerekli tanımlamaları ve css düzenlemelerini yaptıktan sonra oluşturmuş olduğumuz <code>modal.vue</code> componentimizi import ettik ve
      modal.vue bileşenimize <code>props</code> olarak göndermiş olduğumuz <code>isModal</code> değerini <code>isModalOpen</code> değerine eşitledik
      bunu yapmamızın nedeni sil butonuna tıklandığında <code>isModalOpen</code> değeri <code>true</code> olacak ve <code>model.vue</code> sayfasında
      <code>v-if="isModal"</code> sorgusuna girerek modal boxımız açılacak.
    </p>
    <div class="row">
      <div class="col-12">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/teleport/post-page.png" alt="post.vue sayfa şablonu" />
          <figcaption class="figure-caption text-center"><code>post.vue</code> sayfa şablonu</figcaption>
        </figure>
      </div>
      <div class="col-12">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/teleport/post-1.png" alt="post.vue sayfa görünümü" />
          <figcaption class="figure-caption text-center"><code>post.vue</code> sayfa görünümü</figcaption>
        </figure>
      </div>
    </div>

    <hr />
    <h2 class="mb-3">Sonuç</h2>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/teleport/inspect.png" alt="Inspect" />
          <figcaption class="figure-caption text-center"><code>teleport</code> kullanıldığında</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p class="mt-md-4">
          Inspect görünümü açtığımızda fark ediyoruzki <code>teleport to="body"</code> diyerek, body tagimizin en alt kısmına gönderdik. Eğer teleport
          yerine post.vue içerisinde gösterseydik yani teleport özelliğini kullanmasaydık modal boxımız body yerine <code>div="#app"</code> içerisinde
          görünecekti. Aşağıdaki örnekten inceleyebilirsiniz.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <figure class="figure">
          <img class="w-100 img-fluid" src="@/assets/img/teleport/no-teleport.png" alt="Inspect" />
          <figcaption class="figure-caption text-center"><code>teleport</code> kaldırıldığındaki görünümü</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p class="mt-md-4">
          Burada modal.vue bileşenimizde bulunan teleport taglerini kaldırdığımız zaman farkı daha net bir şekilde görebiliyorsunuz. Bu şekilde
          kullanıldığında <code>id="#app"</code> kapsayıcısı içerisinde yer alacak.
        </p>
      </div>
    </div>
  </div>
  <!-- SOURCES  -->
  <sources :sources="sources" />
</template>

<script>
  export default {
    setup() {
      const sources = [
        "https://www.thisdot.co/blog/teleporting-in-vue-3",
        "https://v3.vuejs.org/guide/teleport.html#teleport",
        "https://vueschool.io/articles/vuejs-tutorials/teleport-a-new-feature-in-vue-3/",
        "https://www.youtube.com/watch?v=BXgLb-CggGs&",
      ];
      return { sources };
    },
  };
</script>

<style></style>
