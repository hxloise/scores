<script setup>
import Results from './components/TheResults.vue'
import Slider from './components/TheSlider.vue'
import NewList from './components/TheNewList.vue'
import NotFound from './components/TheNotFound.vue'
import { ref, computed } from 'vue'

const routes = {
    '/': Results,
    '/slider': Slider,
    '/new' : NewList, 
}

const currentPath = ref(window.location.hash)

//No navigation show on page setup
let showNav = ref(true)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
    showNav = currentPath.value === '#/new' ? false : true 
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <header>
    <!-- PWA Manifest -->
  </header>
  <main>
        <div class="column">
            <div class="end" v-if="showNav">
                <a href="#/">Résultas</a>
                <a href="#/slider">Slider</a>
            </div>
            <component :is="currentView" />
        </div>
    </main>
</template>

<style scoped>
</style>
