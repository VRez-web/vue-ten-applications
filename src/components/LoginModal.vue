<template>
  <section class="modal">
    <div class="modal__bg" @click="$emit('close-login')"></div>
    <div class="modal__wrapper">
      <div class="modal__content">
        <h1 class="modal__title">Логин</h1>
        <form action="" class="modal__form" @submit.prevent="submit">
          <div class="modal__form-group">
            <label>Email или Логин</label>
            <input placeholder="Введите ваш Email или Логин" v-model="email" />
          </div>
          <div class="modal__form-group">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="Введите ваш пароль"
              v-model="password"
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
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
.modal__title {
  text-align: center;
  margin: 0 0 1rem 0;
}
.modal__form-group {
  margin-bottom: 10px;
}
.modal__form input {
  width: 100%;
  margin-top: 5px;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border: 1px solid #42a7f5;
}
.modal__form label {
  padding-left: 5px;
}
.modal__form button {
  width: 100%;
  border: none;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  background-size: 200% auto;
  border-radius: 5px;
  color: #fff;
  font-size: 24px;
  padding: 10px 0;
  cursor: pointer;
  outline: none;
  transition: all 0.5s linear;
}
.modal__form button:hover {
  background-position: right center;
}
</style>