<template>
  Async Page 1
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

@Options({
  beforeRouteEnter (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    console.log('Async Page 1')
    next()
  }
})
class AsyncPage1Component extends Vue {}
export default AsyncPage1Component
</script>