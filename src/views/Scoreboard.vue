<template>
  <v-row class="scoreboard" justify="center" align="center">
    <v-col sm="8" md="6" xl="4">
      <v-card class="mb-10">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center luckiest mx-0" colspan="2">Scoreboard</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in rankedPlayers" :key="index">
                <td class="luckiest">
                  <span v-if="index === 0" class="mx-1">
                    🏆 
                  </span>
                  <span v-if="index === 1 && rankedPlayers.length > 2" class="mx-1">
                    🎉 
                  </span>
                  <span v-if="index === rankedPlayers.length - 1" class="mx-1">
                    💩 
                  </span>
                  {{ player.name }}
                  <span v-if="index === 0" class="mx-1">
                    🥇 
                  </span>
                </td>
                <td class="luckiest text-right">
                  {{ player.score }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>

      <v-btn @click="$router.push('/')" dark color="secondary" class="luckiest" block>
        Back to game
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { sync } from 'vuex-pathify';
export default {
  name: 'scoreboard',
  computed: {
    players: sync('players'),
    rankedPlayers () {
      return [...this.players].sort((player1, player2) => player2.score - player1.score);
    }
  }
}
</script>

<style>
  table {
    background-color: var(--v-secondary-base) !important;
  }

  th {
    color: white !important;
    font-size: 16px !important;
  }
</style>