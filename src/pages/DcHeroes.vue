<template>
  <h1>Dc Heroes {{ countHeroes }}</h1>
  <ul>
    <li v-for="(hero, index) in dcHeroes" :key="hero.name">
      <p>{{ hero.name }} <span @click="remove(index)">x</span></p>
    </li>
  </ul>
  <form @submit.prevent="addHero">
    <input type="text" v-model="newHero" placeholder="Type name hero here" />
    <button>Add Hero</button>
  </form>
</template>

<script>
export default {
 data() {
    return {
      newHero: "",
      dcHeroes: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Arrow" },
        { name: "Superman" },
        { name: "Batman" },
      ],
    };
  },
    methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i != index);
    },
  },
  computed: {
    countHeroes() {
      return this.dcHeroes.length;
    },
  },
}
</script>

<style>

</style>