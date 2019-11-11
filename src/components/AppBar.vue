<template>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
    >
        <v-toolbar-title>
          <h2 class="luckiest-title luckiest mt-2">
            Farkle Scorer
          </h2>
        </v-toolbar-title>

      <v-spacer/>

      <v-btn icon color="secondary" x-large @click="restart">
        <v-icon>mdi-restart</v-icon>
      </v-btn>

      <v-divider vertical class="mx-2"/>

      <router-link to="/scoreboard">
        <v-btn icon color="secondary" x-large>
          <v-icon>mdi-format-list-numbered</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
</template>

<script>
export default {
    name: 'app-bar',
    methods: {
      restart() {
        console.log('restart');
      }
    }
}
</script>