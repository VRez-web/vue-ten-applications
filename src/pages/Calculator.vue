<template>
  <section class="calculator">
    <h1 class="calculator__title">Калькулятор</h1>
    <div class="calculator__inner">
      <input type="text" class="calculator__text" v-model="currentNumber" />
      <div class="calculator__smallTxt">
        <small v-if="selectedOperation"
          >{{ prevNumber }} {{ selectedOperation }} {{ currentNumber }}</small
        >
      </div>
      <div class="calculator__numbers">
        <button @click="pressed('1')">1</button>
        <button @click="pressed('2')">2</button>
        <button @click="pressed('3')">3</button>
        <button @click="pressed('+')">+</button>
        <button @click="pressed('4')">4</button>
        <button @click="pressed('5')">5</button>
        <button @click="pressed('6')">6</button>
        <button @click="pressed('-')">-</button>
        <button @click="pressed('7')">7</button>
        <button @click="pressed('8')">8</button>
        <button @click="pressed('9')">9</button>
        <button @click="pressed('*')">*</button>
        <button @click="pressed('0')">0</button>
        <button @click="pressed('c')">C</button>
        <button @click="pressed('=')">=</button>
        <button @click="pressed('/')">/</button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import func from "../../vue-temp/vue-editor-bridge";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const currentNumber = ref("");
    const prevNumber = ref("");
    const selectedOperation = ref("");
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    function pressed(value) {
      if (value == "=" || value == "Enter") calculate();
      else if (value == "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }
    function appendNumber(value) {
      currentNumber.value = currentNumber.value + value;
    }
    function applyOperation(value) {
      calculate();
      prevNumber.value = currentNumber.value;
      currentNumber.value = "";

      selectedOperation.value = value;
    }
    function calculate() {
      if (selectedOperation.value == "*") multiply();
      else if (selectedOperation.value == "/") divide();
      else if (selectedOperation.value == "-") subtract();
      else if (selectedOperation.value == "+") sum();
      prevNumber.value = "";
      selectedOperation.value = "";
    }
    function multiply() {
      currentNumber.value = prevNumber.value * currentNumber.value;
    }
    function divide() {
      currentNumber.value = prevNumber.value / currentNumber.value;
    }
    function subtract() {
      currentNumber.value = prevNumber.value - currentNumber.value;
    }
    function sum() {
      currentNumber.value = +prevNumber.value + +currentNumber.value;
    }
    function clear() {
      currentNumber.value = "";
    }
    function handleKeydown(e) {
      pressed(e.key);
      console.log(e.key);
    }
    onMounted(() => window.addEventListener("keydown", handleKeydown));
    onUnmounted(() =>window.removeEventListener("keydown", handleKeydown));
    return { currentNumber, pressed, selectedOperation, prevNumber };
  },
};
</script>

<style>
.calculator__title {
  text-align: center;
}
.calculator__inner {
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
}
.calculator__text {
  width: 100%;
  font-size: 3rem;
  text-align: right;
  overflow-x: scroll;
  height: 55px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
}
.calculator__numbers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}
.calculator__numbers button {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px 0px rgba(221, 221, 221, 1);
  cursor: pointer;
}
.calculator__smallTxt {
  display: block;
  height: 20px;
}
</style>