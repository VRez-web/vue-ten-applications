<template>
  <section class="users">
    <p>Работа с API, добавление-удаление пользователей(https://crudcrud.com)</p>
    <h1 class="users__title">Пользователи</h1>
    <div class="users__inner">
      <Create @new-user-added="addUser" />
      <ul class="users__list">
        <li v-for="user in state.users" :key="user.id" class="users__item">
          <img :src="user.avatar" :alt="user.name" class="users__img" />
          <p>{{ user.name }} {{ user.last_name }}</p>
          <p>{{ user.email }}</p>
          <div><button @click="destroy(user._id)">удалить</button></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import Create from "../components/UserGrud/Create";
export default {
  components: { Create },
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    async function destroy(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user._id !== id);
    }

    function addUser(data) {
      state.users.push(data);
    }

    return { state, destroy,addUser };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.users {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
.users__title {
  text-align: center;
}
.users__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.users__item {
  width: 30%;
  text-align: center;
  margin-bottom: 1rem;
}
.users__img {
  max-width: 80px;
  max-height: 80px;
}
</style>