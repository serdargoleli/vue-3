<template>
  <teleport to="body" v-if="isModal">
    <div class="modal-overlay">
      <div class="cs-modal">
        <div class="cs-modal-content">
          <h4 class="text-danger">Gönderi silinecek. Emin misin?</h4>
          <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatem voluptas ipsam odio officiis adipisci?</p>
        </div>
        <div class="cs-modal-footer">
          <button class="btn btn-outline-secondary mr-10">Vazgeç</button>
          <button class="btn btn-danger" @click="$emit('update:isModal', false)">Evet, sil</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
  export default {
    props: ["isModal"],
  };
</script>

<style>
  .mr-10 {
    margin-right: 10px;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #00000062;
    z-index: 9999;
  }
  .cs-modal {
    max-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    border-radius: 20px;
  }
  .cs-modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
