<script setup>
  import { reactive, ref, computed, onUnmounted } from 'vue';

  let inputValue = ref(10)
  let oldInputValue = inputValue.value

  const inputRestrictDigit = (event, n, min, max) => {
    if (inputValue.value.toString().length > n) {
      inputValue.value = oldInputValue
    }
    if (inputValue.value > max) {
      inputValue.value = max
    }
    if (inputValue.value < min) {
      inputValue.value = min
    }
    oldInputValue = inputValue.value
    };

  const onlyDigit = (event) => isNaN(parseInt(event.key)) ? event.preventDefault() : undefined;

  const increment = () => inputValue.value = Math.min((inputValue.value + 1), 60)
  const decrement = () => inputValue.value = Math.max((inputValue.value - 1), 0)

  var timeout;

  let t = 400;
  let i = 1;

  const startIncrement = (fn) => {
    fn()
    timeout = setTimeout(function() {
      i += .5
      startIncrement(fn)
    }, Math.max(t / i, 10));
  }
  const stopIncrement = () => {
    t = 400;
    i = 1;
    clearTimeout(timeout);
  }

</script>

<template>
  <main>
    <div>
      <h1>
        Intervalle
      </h1>
        
      <h2>Quick Start</h2>
      <span>Répétition</span>
      <section id="repetition">
        <button 
          @mousedown="startIncrement(increment)"
          @mouseup="stopIncrement"
          @mouseleave="stopIncrement">
          +
        </button>
        <input @keypress="onlyDigit" @input="inputRestrictDigit($event, 2, 0, 60)" v-model="inputValue" id="number" type="number"/>
        <button @mousedown="startIncrement(decrement)"
          @mouseup="stopIncrement"
          @mouseleave="stopIncrement">
          -
        </button>
      </section>

      <span>Travail</span>
      <input @keypress="onlyDigit" @input="inputRestrictDigit($event, 2, 0, 60)" v-model="inputValue" id="number" type="number"/>
      :
      <input @keypress="onlyDigit" @input="inputRestrictDigit($event, 2, 0, 60)" v-model="inputValue" id="number" type="number"/>
      :
      <input @keypress="onlyDigit" @input="inputRestrictDigit($event, 2, 0, 60)" v-model="inputValue" id="number" type="number"/>
      :
      <span>Repos</span>
       
    </div>
  </main>
</template>

<style scoped>
#repetition {
  display: flex;
}


main {
  width: 100%;
  height: 100%;
  display: flex;
}
main div {
  margin: auto;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
}
input[type=number]
{
  -moz-appearance: textfield;
}

input {
  all: inherit;
  border: 2px solid transparent;
}

input:focus {
  border-bottom: 2px solid black;
}

</style>