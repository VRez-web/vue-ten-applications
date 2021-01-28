<template>
  <button class="users__add" @click="isModalOpen = true">
        Добавить пользователя
      </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Добавить пользователя </template>
      <template #body>
        <form class="modal__form" @submit.prevent="submit">
          <div>
            <label>Имя:</label>
            <input
              type="text"
              placeholder="Ваше имя"
              v-model="state.form.name"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              placeholder="Ваш Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div>
            <label>Фотография:</label>
            <input
              type="text"
              placeholder="Ваш аватар url"
              v-model="state.form.avatar"
            />
          </div>
          <input type="submit" value="Добавить" class="btn-submit" />
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { reactive, ref } from "vue";
import Modal from "../Modal";
import axios from "../../plugins/axios";
export default {
  components: { Modal },
  setup(_,{emit}) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const { data } = await axios.post("/users", state.form);
      emit('new-user-added', data)
      state.form.email = "";
      state.form.name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { isModalOpen, submit, state };
  },
};
</script>

<style scoped>
.users__add {
  background-color: transparent;
  border: 1px solid #7ac8fc;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-bottom: 0.625rem;
  padding: 0.5rem;
}
.modal__form input {
  width: 100%;
  background: #e9eff7;
  border: none;
  padding: 0.8rem;
  margin-bottom: 0.625rem;
  border-radius: 0.9375rem;
  outline: none;
}
.modal__form label {
  display: block;
  text-align: left;
  margin: 0 0 0.313rem 0.625rem;
}
.btn-submit {
  cursor: pointer;
  transition: all 0.3s linear;
}
.btn-submit:hover {
  background-color: #c1d7f5;
}

</style>