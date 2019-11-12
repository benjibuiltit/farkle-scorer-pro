<template>
  <v-app>
    <AppBar />

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

    <v-bottom-navigation
    v-if="$route.path === '/'"
    fixed
    grow
    dark
    color="secondary"
    :style="`background-color: ${$vuetify.theme.currentTheme.primary}`">
      <v-btn @click="endTurn">
        <span>End Turn</span>
        <v-icon>mdi-check</v-icon>
      </v-btn>

      <v-btn @click="farkle">
        <span>Farkle</span>
        <v-icon>mdi-emoticon-sad-outline</v-icon>
      </v-btn>

      <v-btn @click="undo">
        <span>Undo</span>
        <v-icon>mdi-undo</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import { sync } from 'vuex-pathify';
import { history } from '@/utils/history';

export default {
  name: 'App',
  components: {
    AppBar
  },
  computed: {
    turnScore: sync('turnScore'),
    activePlayerIndex: sync('activePlayerIndex'),
    players: sync('players'),
    sets: sync('sets'),
    diceCount: sync('diceCount')
  },
  methods: {
    endTurn() {
      history.push(this.$store.state);
      this.players[this.activePlayerIndex].score += this.turnScore;
      this.cyclePlayers();

    },
    farkle() {
      history.push(this.$store.state);
      this.cyclePlayers();
    },
    cyclePlayers() {
      Object.values(this.sets).forEach((set) => {
        set.count = 0;
      });
      this.activePlayerIndex = this.activePlayerIndex === this.players.length - 1
        ? 0 : this.activePlayerIndex += 1;
      this.diceCount = 6;
      this.turnScore = 0;
    },
    convertObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    undo() {
      const lastState = history.pop();
      this.$store.commit('replaceState', lastState);
    }
  }
};
</script>


<style>
@font-face {
  font-family: 'Luckiest Guy';
  font-weight: 600;
  src: url('./assets/LuckiestGuy.ttf');
}


.luckiest {
  font-weight: 600;
  font-family: 'Luckiest Guy';
  color: white;
  text-shadow:
  0px 0px 0 var(--v-primary-base),
  -1.5px -1.5px 0 var(--v-primary-base),
  1.5px -1.5px 0 var(--v-primary-base),
  -1.5px 1.5px 0 var(--v-primary-base),
  1.5px 1.5px 0 var(--v-primary-base);
  padding-left: 3px;
  padding-right: 3px;
}
.luckiest-title {
  font-weight: 600;
  font-family: 'Luckiest Guy';
  color: white;
  text-shadow:
  0px 0px 0 var(--v-primary-base),
  -3px -3px 0 var(--v-primary-base),
  3px -3px 0 var(--v-primary-base),
  -3px 3px 0 var(--v-primary-base),
  3px 3px 0 var(--v-primary-base),
  -6px -6px 0 var(--v-accent-base),
  6px -6px 0 var(--v-accent-base),
  -6px 6px 0 var(--v-accent-base),
  6px 6px 0 var(--v-accent-base);
  padding-left: 3px;
  padding-right: 3px;
}
</style>
