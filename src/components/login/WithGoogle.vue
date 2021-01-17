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
</style>