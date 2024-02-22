<script setup>
  import { reactive, computed, onUnmounted } from 'vue';
  const state = reactive({
      isRunning: false,
      elapsedTime: null,
      intervalId: null
    });

  
  var timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null
    , running = false;

  const formatTime = computed(() => {
    let hour = 0,
      min = 0,
      sec = 0,
      cs = 0,
      ms = 0;

  if (state.elapsedTime) {
    hour = state.elapsedTime.getUTCHours();
    min = state.elapsedTime.getUTCMinutes();
    sec = state.elapsedTime.getUTCSeconds();
    cs = Math.floor(state.elapsedTime.getUTCMilliseconds() / 10); // Convert milliseconds to centiseconds
    ms = state.elapsedTime.getUTCMilliseconds();
  }
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(cs).padStart(2, '0')}`;
  });

  const start = () => {
    if(state.isRunning) return;
  
    if (timeBegan === null) {
      reset();
      timeBegan = new Date();
    }

    if (timeStopped !== null) {
      stoppedDuration += (new Date() - timeStopped);
    }

    state.intervalId = setInterval(clockRunning, 10);	
    state.isRunning = true;
    
  };

  function clockRunning(){
    var currentTime = new Date()
    state.elapsedTime = new Date(currentTime - timeBegan - stoppedDuration)
  };

  const stop = () => {
    state.isRunning = false;
    timeStopped = new Date();
    clearInterval(state.intervalId);
  };


  const reset = () => {
    state.elapsedTime = null
    clearInterval(state.intervalId)
    timeBegan = null
    timeStopped = null
    stoppedDuration = 0
  }


</script>

<template>
  <main>
    <div>
      <div>
        Crhono
        <h1>{{ formatTime }}</h1>
      </div>
      <div class="button_wrapper">
        <button id="start" v-if="!state.isRunning" @click="start">
          {{ state.elapsedTime!=null ? 'Reprendre': 'Démarrer' }}
        </button>
        <button id="stop" v-else @click="stop">
          Stop
        </button>

        <button v-if="!state.isRunning & state.elapsedTime!=null" @click="reset">
          Reset
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
}
main div {
  margin: auto;
}
h1 {
  font-size: max(45px, min(18vw, 100px));
}
.button_wrapper {
  display: flex;
  justify-content: space-between;

}
button {
  background-color: #e9e9ed;
  border-radius: 1000px;
  border: 0px solid;
  padding: 10px 20px;
  cursor: pointer;
}
#start {
  background-color: rgb(23, 103, 214);
  width: 100px;

}
#stop {
  background-color: rgb(180, 28, 28);
  width: 100px;

}
</style>