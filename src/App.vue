<template>
  <div>
    <Navigation />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from './components/Navigation.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation
  }
})
</script>