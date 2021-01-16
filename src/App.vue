<template>
  <AppHeader @open-login-modal="isLoginOpen = true" />

  <router-view></router-view>
  <LoginModal v-if="isLoginOpen"  @close-login="isLoginOpen =false"/>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from './utilities/firebase'
export default {
    data() {
    return {
      isLoginOpen: false,
      
    };
  },
  components: { AppHeader, LoginModal },
  mounted(){
    firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  } else {
    console.log('No User');
  }
});
  }
};
</script>
