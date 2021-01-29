<template>
  Async Page 2
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

@Options({
  beforeRouteEnter (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    console.log('Async Page 2')
    next()
  }
})
class AsyncPage2Component extends Vue {}
export default AsyncPage2Component
</script>