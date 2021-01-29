<template>
  Page 2
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

@Options({
  beforeRouteEnter (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    console.log('Page 2')
    next()
  }
})
class Page2Component extends Vue {}
export default Page2Component
</script>