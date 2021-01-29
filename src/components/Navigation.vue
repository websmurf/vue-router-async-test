<template>
  <router-link style="margin-right: 15px;" :to="{ name: 'page1' }">Page 1</router-link>
  <router-link style="margin-right: 15px;" :to="{ name: 'page2' }">Page 2</router-link>
  <router-link style="margin-right: 15px;" :to="{ name: 'asyncpage1' }">Async page 1</router-link>
  <router-link style="margin-right: 15px;" :to="{ name: 'asyncpage2' }">Async page 2</router-link>
  <router-link style="margin-right: 15px;" :to="{ name: 'asynccompositionpage1' }">Async Composition page 1</router-link>
</template>
