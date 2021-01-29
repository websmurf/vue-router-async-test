<template>
  Page 1
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { NavigationGuardNext, RouteLocation } from 'vue-router'

@Options({
  beforeRouteEnter (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    console.log('Page 1')
    next()
  }
})
class Page1Component extends Vue {}
export default Page1Component
</script>