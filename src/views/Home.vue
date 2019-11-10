<template>
  <v-row class="home" justify="center" align="center">
    <v-col sm="8" md="6" xl="4">
      <v-card color="secondary" class="mb-10">
        <v-row>
          <v-col>
            <div class="text-center luckiest">
              Current Player: {{ players[activePlayerIndex].name }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <div class="text-center luckiest">
              Turn Score:
            </div>
            <div class="text-center luckiest">
              {{ turnScore }}
            </div>
          </v-col>
          <v-col class="px-0">
            <div class="text-center luckiest">
              Total Score:
            </div>
            <div class="text-center luckiest">
              {{ players[activePlayerIndex].score }}
            </div>
          </v-col>
          <v-col class="px-0">
            <div class="text-center luckiest">
              Dice Left:
            </div>
            <div class="text-center luckiest">
              6
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.one)">
            One - ({{ setCounts[sets.one] }})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.five)">
            Five - ({{setCounts[sets.five]}})
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-0">
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(threeXset)">
            3 of a kind - ({{threeXcount}})
          </v-btn>
          <v-slider
          v-model="threeXmultiplier"
          min="1"
          max="6"
          :thumb-size="56"
          thumb-label
          class="mb-0"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.fourOak)">
            4 of a kind - ({{setCounts[sets.fourOak]}})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.threePairs)">
            3 pairs - ({{setCounts[sets.threePairs]}})
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.fiveOak)">
            5 of a kind - ({{setCounts[sets.fiveOak]}})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.straight)">
            Straight - ({{setCounts[sets.straight]}})
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.sixOak)">
            6 of a kind - ({{setCounts[sets.sixOak]}})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.twoTriplets)">
            2 Triplets - ({{setCounts[sets.twoTriplets]}})
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(sets.fourOakPair)">
            4 of a kind & a pair - ({{ setCounts[sets.fourOakPair] }})
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { sync } from 'vuex-pathify';
import { sets } from '@/constants';

export default {
  name: 'home',
  data: () => ({
    sets,
  }),
  computed: {
    threeXmultiplier: sync('threeXmultiplier'),
    turnScore: sync('turnScore'),
    setCounts: sync('setCounts'),
    setPoints: sync('setPoints'),
    activePlayerIndex: sync('activePlayerIndex'),
    players: sync('players'),
    threeXset() {
      const mapping = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
      };
      return sets[`threeX${mapping[this.threeXmultiplier]}`];
    },
    threeXcount() {
      let aggregate = 0;
      Object.keys(this.setCounts).forEach((set) => {
        if (set.startsWith('threeX')) aggregate += this.setCounts[set];
      });
      return aggregate;
    },
  },
  methods: {
    incrementTurnScore(set) {
      this.turnScore += this.setPoints[set];
      this.setCounts[set] += 1;
    },
  },
};
</script>

<style scoped>
.v-messages {
  display: none;
}
</style>
