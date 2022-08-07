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

      <v-btn icon color="secondary" x-large @click="isConfirmingRestart = true">
        <v-icon>mdi-restart</v-icon>
      </v-btn>

    <v-dialog
    v-model="isConfirmingRestart"
    >
    <v-card color="">
      <v-card-title class="luckiest">
        Are you sure you want to start a new game?
      </v-card-title>
      <v-card-text>
        {{ restartWarningText }}
      </v-card-text>
      <v-card-actions>
        <v-btn class="luckiest" elevation="0" color="white" dark @click="isConfirmingRestart = false">
          Return to Game
        </v-btn>
        <v-spacer/>
        <v-btn class="luckiest" color="secondary" @click="restart">
          New Game
        </v-btn>
      </v-card-actions>

    </v-card>
    </v-dialog>

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
    data: () => ({
      isConfirmingRestart: false,
      restartWarningText: ''
    }),
    methods: {
      restart() {
        this.$store.commit('replaceState', {
        players: [],
        threeXmultiplier: 1,
        activePlayerIndex: 0,
        turnScore: 0,
        sets: {
          one: {
            name: 'one',
            dice: 1,
            count: 0,
            points: 100,
          },
          five: {
            name: 'five',
            dice: 1,
            count: 0,
            points: 50,
          },
          threeXone: {
            name: 'threeXone',
            dice: 3,
            count: 0,
            points: 300,
          },
          threeXtwo: {
            name: 'threeXtwo',
            dice: 3,
            count: 0,
            points: 200,
          },
          threeXthree: {
            name: 'threeXthree',
            dice: 3,
            count: 0,
            points: 300,
          },
          threeXfour: {
            name: 'threeXfour',
            dice: 3,
            count: 0,
            points: 400,
          },
          threeXfive: {
            name: 'threeXfive',
            dice: 3,
            count: 0,
            points: 500,
          },
          threeXsix: {
            name: 'threeXsix',
            dice: 3,
            count: 0,
            points: 600,
          },
          fourOak: {
            name: 'fourOak',
            dice: 4,
            count: 0,
            points: 1000,
          },
          fiveOak: {
            name: 'fiveOak',
            dice: 5,
            count: 0,
            points: 2000,
          },
          sixOak: {
            name: 'sixOak',
            dice: 6,
            count: 0,
            points: 3000,
          },
          straight: {
            name: 'straight',
            dice: 6,
            count: 0,
            points: 1500,
          },
          threePairs: {
            name: 'threePairs',
            dice: 6,
            count: 0,
            points: 1500,
          },
          fourOakPair: {
            name: 'fourOakPair',
            dice: 6,
            count: 0,
            points: 1500,
          },
          twoTriplets: {
            name: 'twoTriplets',
            dice: 6,
            count: 0,
            points: 2500,
          },
        },
        diceCount: 6,
        activeGame: false,
        playerCount: '',
      });
        this.isConfirmingRestart = false;
        this.$router.push('/configure');
      }
    }
}
</script>