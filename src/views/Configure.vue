<template>
  <div>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center luckiest">
          How many players?
        </div>
        <v-row justify="center" align="center" class="my-0 py-0">
          <v-col cols="3" class="my-0 py-0">
            <div class="text-center luckiest">
              <v-text-field @input="notice = ''" v-model="playerCount" type="tel" class="ma-auto" autofocus/>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center luckiest">
          Rolling 3 ones worth 1000 points?
        </div>
        <div class="text-center">
          <v-btn
          :elevation="threeXonePoints === 1000 ? '2' : '0'"
          class="luckiest mr-1"
          :color="threeXonePoints === 1000 ? 'secondary' : '#e2e2e2'"
          dark
          @click="threeXonePoints = 1000">
            Yes
          </v-btn>
          <v-btn
          :elevation="threeXonePoints === 1000 ? '0' : '2'"
          class="luckiest ml-1"
          :color="threeXonePoints === 300 ? 'secondary' : '#e2e2e2'"
          dark
          @click="threeXonePoints = 300">
            No
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center luckiest">
          Enter your own player names?
        </div>
        <div class="text-center">
          <v-btn
          :elevation="useCustomPlayerNames ? '2' : '0'"
          class="luckiest mr-1"
          :color="useCustomPlayerNames  ? 'secondary' : '#e2e2e2'"
          dark
          @click="useCustomPlayerNames = true">
            Yes
          </v-btn>
          <v-btn
          :elevation="useCustomPlayerNames ? '0' : '2'"
          class="luckiest ml-1"
          :color="!useCustomPlayerNames ? 'secondary' : '#e2e2e2'"
          dark
          @click="useCustomPlayerNames = false">
            No
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" v-show="useCustomPlayerNames">
      <v-col sm="8" md="6" xl="6">
        <div class="text-center luckiest">
          Enter Player Names
        </div>
        <v-row justify="center" align="center" class="my-0 py-0">
          <v-col cols="6" class="my-0 py-0">
            <div class="text-center luckiest" v-for="(player, index) in players" :key="index">
              <v-text-field @input="setPlayerName(index, $event)" :value="player.name" class="ma-auto" :autofocus="index === 0"/>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center mt-5">
          <v-btn

          class="luckiest"
          color="secondary"
          dark
          @click="startGame">
            {{ 'Start Game' }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="text-center luckiest">
      {{ notice }}
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'configure',
  data: () => ({
    useCustomPlayerNames: false,
    notice: '',
  }),
  computed: {
    threeXonePoints: sync('sets@threeXone.points'),
    playerCount: sync('playerCount'),
    players: sync('players'),
    activeGame: sync('activeGame'),
  },
  methods: {
    startGame() {
      if (this.playerCount > 1) {
        if (!this.useCustomPlayerNames) {
          this.createPlayers();
        }
        this.checkPlayerNames();
        this.activeGame = true;
        this.$router.push('/');
      } else {
        this.notice = 'Player count must be atleast 2.'
      }
    },
    createPlayers() {
      const players = [];
      for (let i = 1; i <= this.playerCount; i++) {
        players.push({
          name: this.useCustomPlayerNames ? '' : `Player ${i}`,
          score: 0
        });
      }
      this.players = players;
    },
    setPlayerName(index, name) {
      this.$store.set(`players@[${index}].name`, name);
    },
    checkPlayerNames() {
      const players = this.$store.get(`players`);
      for (const [index, player] of players.entries()) {
        if (!player.name) {
          player.name = `Player ${index + 1}`
        }
      }

      this.$store.set('players', players);
    }
  },
  watch: {
    useCustomPlayerNames (answer)  {
      if (answer) this.createPlayers();
    },
    playerCount (count) {
      if (this.useCustomPlayerNames) this.createPlayers();
    }
  }
}
</script>

<style>
input {
  text-align: center !important;
  font-weight: 600;
  font-family: 'Luckiest Guy';
  color: white !important;
  text-shadow:
  0px 0px 0 var(--v-primary-base),
  -1.5px -1.5px 0 var(--v-primary-base),
  1.5px -1.5px 0 var(--v-primary-base),
  -1.5px 1.5px 0 var(--v-primary-base),
  1.5px 1.5px 0 var(--v-primary-base);
  padding-left: 3px;
  padding-right: 3px;
  background-color: var(--v-secondary-base) !important;
  border-radius: 3px 3px 0px 0px !important;
}

</style>