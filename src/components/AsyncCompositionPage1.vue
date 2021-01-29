<template>
  Async Composition Page 1
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

export default defineComponent({
  async beforeRouteEnter(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    console.log('Async Composition Page 1')

    next()
  },
  setup () {}
})
</script>