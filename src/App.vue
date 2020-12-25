<template>
  <AppHeader />
  <!-- <DcHeroes /> -->
  <Calendar />
</template>

<script>
import AppHeader from "./components/AppHeader";
import Calendar from './components/Calendar';
// import DcHeroes from "./components/DcHeroes";
export default {
  components: { AppHeader,Calendar },
  mounted() {},
};
</script>
