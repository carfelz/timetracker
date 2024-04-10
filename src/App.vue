<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Authenticator from "./components/Authenticator.vue";
</script>

<template>
  <Authenticator>
    <div>
      <NavBar />
      <RouterView />
    </div>
  </Authenticator>
</template>
