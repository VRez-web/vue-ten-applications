<template>
  <section class="slider">
    <div v-for="(color, index) in sliders" :key="color" class="slider__wrapper">
      <transition name="slide-fade">
        <div
          v-if="currentSlide == index"
          style="height: 350px"
          :class="color"
        ></div>
      </transition>
    </div>
    <div class="dots">
      <div class="dots__wrapper">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click='makeActive(index)'
          :class="currentSlide == index ? 'slide-active' : ''"
          class="dots__item"
        ></div>
      </div>
    </div>
    <!-- <div>
      <transition name="fade">
        <h1 v-if="isTitleShowing">Slider carousel</h1>
      </transition>
      <button @click="isTitleShowing = !isTitleShowing">Toggle text</button>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      sliders: ["lightblue", "lightyellow", "lightcoral"],
      isTitleShowing: true,
    };
  },
  methods:{
      makeActive(index){
          this.currentSlide = index
      }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
    }, 1500);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.slider {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  height: 350px;
}
.slider__wrapper {
  width: 100%;
  position: absolute;
}
.lightblue {
  background-color: blue;
}
.lightyellow {
  background-color: lightyellow;
}
.lightcoral {
  background-color: lightcoral;
}
.dots {
  width: 100%;
  position: absolute;
  height: 340px;
}
.dots__wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots__item {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin: 0 5px;
  cursor: pointer;
}
.slide-active{
    background-color: maroon;
}
/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>