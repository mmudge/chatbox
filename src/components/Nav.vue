<template>
  <div>
    <v-navigation-drawer app v-model="drawer" class="blue darken-2" dark disable-resize-watcher>
      <v-list>
        <v-list-tile v-for="item in sideBar" :key="item.index">
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="primary" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn flat dark>
        <v-toolbar-title>
          {{ appName }}
          <v-icon>chat_bubble_outline</v-icon>
        </v-toolbar-title>
      </v-btn>

      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn to="/login" flat class="hidden-sm-and-down">Login</v-btn>
        <v-btn to="/join" flat class="hidden-sm-and-down">Sign Up</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn flat to="/dashboard">Dashboard</v-btn>
        <v-btn flat @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      drawer: false,
      sideBar: [
        { title: "Profile" },
        { title: "Messages" },
        { title: "About" },
        { title: "Login" },
        { title: "Join" }
      ]
    };
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>

<style>
</style>
