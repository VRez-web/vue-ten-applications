<template>
  <section class="markdown">
    <h1 class="markdown__title">Markdown app</h1>
    <div class="markdown__inner">
      <article class="markdown__item">
        <textarea
          v-model="text"
          @input="update"
          ref="markdownTextArea"
        ></textarea>
      </article>
      <article class="markdown__item" v-html="markedText"></article>
    </div>
  </section>
</template>

<script>
import marked from "marked";
import useDebounce from "../utilities/composition/useDebounce";
export default {
  data() {
    return {
      text: "",
      debounce:'',
    };
  },

  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);  
      this.debounce(task, 500);
    },
  },
    mounted() {
    this.debounce =  useDebounce()
    this.$refs.markdownTextArea.focus();
  },
};
</script>

<style>
.markdown {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.markdown__title {
  text-align: center;
  width: 100%;
}
.markdown__inner {
  display: flex;
  height: 100vh;
  width: 80%;
  margin: 0 auto;
}
.markdown__item {
  width: 50%;
  border: 1px solid rgba(80, 80, 80, 0.1);
}
.markdown__item:last-child {
  background-color: rgba(80, 80, 80, 0.1);
  border: 1px solid grey;
}
.markdown__item textarea {
  width: 100%;
  height: 100%;
}
</style>