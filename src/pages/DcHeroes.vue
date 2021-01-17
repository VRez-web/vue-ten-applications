<template>
  <h1>Dc Heroes {{ countHeroes }}</h1>
  <ul>
    <li v-for="(hero, index) in dcHeroes" :key="hero.name">
      <p>{{ hero.name }} <span @click="remove(index)">x</span></p>
    </li>
  </ul>
  <form @submit.prevent="addHero">
    <input
      type="text"
      v-model="newHero"
      placeholder="Type name hero here"
      ref="newHeroRef"
    />
    <button>Add Hero</button>
  </form>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeroes = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Arrow" },
      { name: "Superman" },
      { name: "Batman" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });
    function remove(index) {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i != index);
    }
    function addHero() {
      if (newHero.value !== "") {
        dcHeroes.value.push({ name: newHero.value });
        newHero.value = "";
      }
    }
    const countHeroes = computed({
      get: () => dcHeroes.value.length,
    });
    return { dcHeroes, newHero, remove, addHero, newHeroRef, countHeroes };
  },
  computed: {},
};
</script>

<style>
</style>