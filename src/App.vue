<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <RouterLink to="/chronometre">Chronométre</RouterLink>
    <RouterLink to="/intervalle">Intervalle</RouterLink>
  </nav>
  <div class="content-wrapper">
    <router-view class="test" v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <!-- <RouterView class="routerview"/> -->
</template>

<style scoped>



.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.15s ease-out;
}


.slide-left-enter-to {
  position: relative;
  right: 0;
  opacity: 1;
}

.slide-right-enter-to {
  position: relative;
  right: 0;
  opacity: 1;
}

.slide-left-enter-from {
  position: relative;
  right: -25%;
  opacity: 0;
}

.slide-right-enter-from {
  position: relative;
  right: 25%;
  opacity: 0;
}

.slide-left-leave-to {
  position: relative;
  left: -25%;
  opacity: 0;
}

.slide-right-leave-to {
  position: relative;
  left: 25%;
  opacity: 0;
}

.slide-left-leave-from {
  position: relative;
  left: 0;
  opacity: 1;
}

.slide-right-leave-from {
  position: relative;
  left: 0;
  opacity: 1;
}


.content-wrapper {
  height: 500px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  padding: 2px;
  overflow: hidden;
  background-color: var(--color-background-soft);
}
a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

nav {
  /* width: 100%; */
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 5px 0 5px 0;
  background-color: var(--color-background-mute);
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: var(--color-background-soft);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  border-radius: 1000px;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  border: 1px solid var(--color-border);
}

nav a:first-of-type {
  /* border: 0; */
}

@media (hover: hover) {
  a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
