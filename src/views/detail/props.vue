<template>
  <div class="text-muted">
    <h1 class="text-danger mb-2">Props</h1>
    <p class="mb-4">
      <code>Props</code> ana bileşenimizden child (alt) bileşenimize veri göndermek için kullandığımz yapıdır. Props ile gönderdiğimiz veriyi child
      component’te karşılayarak normal data gibi kullanıyoruz. Bu datayı child bileşende değiştirerek parent bileşene göndermek için ise
      <code>emit</code> yapısını kullanıyoruz. Vue 2'de <code>this.$emit</code> şeklinde kullanılıyordu ancak Vue 3 ile <code>this</code> kullanımdan
      kalktığı için kullanım şekli değişti.
    </p>
    <hr />
    <h4>Parent (ana) bileşenden, child (alt) bileşene değer gönderme</h4>
    <div class="row">
      <div class="col-12 col-md-6">
        <p>
          Oluşturduğumuz ana bileşene <code>child</code> bileşenini import ederek tanımladık. Child bileşenimize göndermek istediğimiz iki değeri,
          <code>pageTitle</code> ve <code>pageContent</code>, props değeri olarak verdik.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/props/1.png" alt="Ana bileşenimize alt bileşen çağırma." />
          <figcaption class="figure-caption text-center">Ana bileşenimize alt bileşen çağırma. <code>post.vue</code></figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <p>
          Child bileşenimizde almak istediğimiz değerleri <code>props: ["title", "content"]</code> olarak belirledik artık ana bileşenimizden child
          bileşenimize değer göndererek bu değeri child bileşeni içerisinde kullanabiliriz.
        </p>
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/props/1-1.png" alt="Vue 3 v-model ile değer alma." />
          <figcaption class="figure-caption text-center">Ana Bileşenden alt bileşene gelen datayı okuma <code>child.vue</code></figcaption>
        </figure>
      </div>
    </div>
    <p>
      Burada önemli olan nokta child componentte verdiğimiz props ismini, parent componenttede aynı şekilde
      <code>v-model:propsname="value"</code> olarak vermek gerekiyor.
    </p>
    <hr />
    <h4>Child bileşene gelen props değerini değiştirme</h4>
    <p>
      Ana bileşenden gelen datayı okuduktan sonra bazı durumlarda bu data üzerinde bir manüpülasyon yapıp daha sonra ana bileşene göndermemiz gerekir.
      Bu durumda <code>emit</code> kullanarak child bileşende yaptığımız değişikliği parent bileşene set edebileceğiz.
    </p>
    <p>
      <b>Brief:</b> Yukarıdaki örnekte <code>post.vue</code> adında bir ana bileşenimiz ve <code>child.vue</code> adında bir alt bileşenimiz var.
      Post.vue bileşenindeki datayı child.vue bileşenine props kullanarak gönderdik. Şimdi bu datayı child.vue bileşeni içerisinde değiştirerek
      post.vue bileşenine gönderelim. Bir buton oluşturacağız ve butona tıklandığında <code>pageTitle:"hello World 2"</code>,
      <code>pageContent:"Content 2"</code> olacak şekilde güncelleyelim.
    </p>
    <div class="row">
      <div class="col-12 col-md-8">
        <figure class="figure">
          <img class="img-fluid" src="@/assets/img/props/3.png" alt="Ana bileşenimize alt bileşen çağırma." />
          <figcaption class="figure-caption text-center">Alt bileşenden ana bileşen değeri güncelleme(emit)</figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-4">
        <p>
          <code>child.vue</code> bileşenimizden <code>post.vue</code> bileşeninde bulunan değeri değiştirmek için bir buton tanımlıyoruz ve
          <code>@click="metodAdı"</code> niteliğini ekliyoruz.
        </p>
        <p>
          Oluşturduğumuz metodun içerisine <code>emit("update:propsName",yeniDeğer)</code> diyerek, değiştirmek istediğimiz prop değerlerini
          belirtiyoruz ve en son metodu <code>return</code> ediyoruz.
        </p>
        <p>Eğer tek bir değer değiştirmek istenseysi <code>@click="$emit('update:propsName', value)"</code> demek yeterli olurdu.</p>
      </div>
    </div>
  </div>
  <sources :sources="sources" />
</template>

<script>
  export default {
    setup() {
      const sources = ["https://v3.vuejs.org/guide/component-props.html#props"];
      return { sources };
    },
  };
</script>

<style></style>
