<template>
  <section class="modal">
    <div class="modal__bg" @click="close"></div>
    <div class="modal__wrapper">
      <div class="modal__content">
        <h1 class="">
          <slot name="title"></slot>
        </h1>
        <main><slot name="body"> </slot></main>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  },
};
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
}
.modal__bg {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
}
.modal__content {
  background-color: #fff;
  box-shadow: 10px 10px 66px -25px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  padding: 20px;
  z-index: 20;
  max-width: 300px;
  width: 100%;
}
</style>