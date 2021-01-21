<template>
  <div class="modal__login-google">
    <button @click="LoginwithGoogle">Войти с помощью Google</button>
  </div>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    LoginwithGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .finally(() => {
          this.$emit("close-login-from-google");
        });
    },
  },
};
</script>

<style>
.modal__login-google button {
  width: 100%;
  background-color: #df4c2c;
  border: none;
  padding: 5px 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  outline: none;
}
</style>