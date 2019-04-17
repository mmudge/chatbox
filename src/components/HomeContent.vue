<template>
  <v-container fill-height dark fluid>
    <v-layout align-center justify-center column>
      <v-flex class="display-3">Welcome to {{ appName }}</v-flex>
      <v-flex class="headline mb-3">A fun place to chat with your friends!</v-flex>
      <v-flex>
        <v-btn large color="info">Learn More</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeContent",
  computed: {
    appName() {
      return this.$store.state.appName;
    }
  }
};
</script>

<style scoped>
</style>
