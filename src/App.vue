<template>
  <v-app>
    <Nav :appName="appName"/>
    <v-content transition="slide-x-transition">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {};
  }
};
</script>
