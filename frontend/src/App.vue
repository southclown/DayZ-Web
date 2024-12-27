<template>
  <div class="app">
    <Navbar :sectionIds="sectionIds" />
    <Home :sectionIds="sectionIds" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import { generateSectionId } from './utils/randomId'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  },
  setup() {
    const sectionIds = {
      home: generateSectionId('home'),
      features: generateSectionId('features'),
      about: generateSectionId('about'),
      stats: generateSectionId('stats')
    }

    return {
      sectionIds
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: black;
}

.app {
  min-height: 100vh;
  background: black;
  color: white;
}
</style>
