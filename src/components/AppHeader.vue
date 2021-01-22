<template>
  <header class="header">
    <nav class="header__nav">
      <router-link
        class="header__nav-link"
        :to="item.to"
        v-for="item in list"
        :key="item.to"
        >{{ item.title }}</router-link
      >
      <button v-if="isLoggedIn" @click="logout">Выйти</button>
      <button v-else @click="$emit('open-login-modal')">Войти</button>
    </nav>
  </header>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props: { 'isLoggedIn': Boolean },
  data() {
    return {
      list: [
        { title: " DC Герои", to: "/dcHeroes" },
        { title: "Календарь", to: "/calendar" },
        { title: "Текст ту код", to: "/markdown" },
        { title: "Слайдер", to: "/slider" },
        {title:'Калькультор', to:'/calculator'},
        {title:'Модал', to:'/reuseable-modal'},
        {title:'Чат', to:'/chat'},
      ],
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      // .then(() => {
      //   // Sign-out successful.
      // })
      // .catch((e) => {
      //   // An error happened.
      // });
    },
  },
};
</script>

<style  scoped>
.header {
  width: 100%;
  padding: 10px 30px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  color: #fff;
  font-size: 20px;
}
.header a {
  text-decoration: none;
  color: #fff;
}
.header__nav-link {
  margin: 0 15px;
}
</style>