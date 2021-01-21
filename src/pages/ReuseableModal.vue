<template>
  <section class="modal">
    <div class="modal__inner">
      <h1 class="modal__title">Многоиспользуемое модальное окно</h1>
      <Modal v-if="isFirstModalOpen" @close="isFirstModalOpen = false">
        <!-- <h1 class="red">Red Modal</h1> -->
        <template #title>Первое модальное окно</template>
        <template #body><p>Центральный слот</p></template>
      </Modal>
      <button @click="isFirstModalOpen = true">Открыть первую модалку</button>
      <Modal v-if="isSecondModalOpen" @close="isSecondModalOpen = false">
        <!-- <h1 class="blue">Blue Modal</h1> -->
          <template #title>Второе модальное окно</template>
        <template #body><p>Центральный слот</p></template>
      </Modal>
      <button @click="isSecondModalOpen = true">Открыть вторую модалку</button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isFirstModalOpen = ref(false);
    const isSecondModalOpen = ref(false);
    return { isFirstModalOpen, isSecondModalOpen };
  },
};
</script>

<style scoped>
.modal__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>