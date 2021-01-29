<template>
  <section class="heroes">
    <div class="heroes__inner">
      <h1 class="heroes__title">Dc Heroes / {{ countHeroes }}</h1>
      <ul class="heroes__list">
        <li
          v-for="(hero, index) in dcHeroes"
          :key="hero.name"
          class="heroes__item"
        >
          <p>
            {{ hero.name }}
          </p>
          <span @click="remove(index)" class="heroes__close">x</span>
        </li>
      </ul>
      <form @submit.prevent="addHero" class="hero__form">
        <input
          type="text"
          v-model="newHero"
          placeholder="Введите имя героя"
          ref="newHeroRef"
          class="hero__input-add"
        />
        <button class="hero__add">Добавить героя</button>
      </form>
    </div>
  </section>
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
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.heroes__inner {
  width: 30%;
  margin: 0 auto;
}
.heroes__title {
  text-align: center;
}
.heroes__list {
  font-size: 1.25rem;
}
.heroes__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 0.625rem;
  border-radius: 0.313rem;
  padding: 0.625rem;
}
.heroes__item p {
  margin: 0;
}
.heroes__close {
  cursor: pointer;
  display: block;
  color: #fff;
  background-color: red;
  padding: 0.313rem;
}
.hero__form {
  display: flex;
  margin: 1.875rem 0;
}
.hero__input-add {
  width: 70%;
  padding: 0.625rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.hero__add {
  width: 30%;
  padding: 0.625rem;
  cursor: pointer;
  background-color: #f1f5f9;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>