<template>
  <v-row class="home" justify="center" align="center">
    <v-col sm="8" md="6" xl="4">
      <v-card color="secondary" class="mb-10">
        <v-row>
          <v-col>
            <div class="text-center luckiest">
              Current Player: Kayla
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
              1800
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
          @click="incrementTurnScore(CONSTANTS.sets.one)">
            One - ({{ setCounts[CONSTANTS.sets.one] }})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(CONSTANTS.sets.five)">
            Five - ({{setCounts[CONSTANTS.sets.five]}})
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
          @click="incrementTurnScore(CONSTANTS.sets.fourOak)">
            4 of a kind - ({{setCounts[CONSTANTS.sets.fourOak]}})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(CONSTANTS.sets.threePairs)">
            3 pairs - ({{setCounts[CONSTANTS.sets.threePairs]}})
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
          @click="incrementTurnScore(CONSTANTS.sets.fiveOak)">
            5 of a kind - ({{setCounts[CONSTANTS.sets.fiveOak]}})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(CONSTANTS.sets.straight)">
            Straight - ({{setCounts[CONSTANTS.sets.straight]}})
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
          @click="incrementTurnScore(CONSTANTS.sets.sixOak)">
            6 of a kind - ({{setCounts[CONSTANTS.sets.sixOak]}})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementTurnScore(CONSTANTS.sets.twoTriplets)">
            2 Triplets - ({{setCounts[CONSTANTS.sets.twoTriplets]}})
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
          @click="incrementTurnScore(CONSTANTS.sets.fourOakPair)">
            4 of a kind & a pair - ({{setCounts[CONSTANTS.sets.fourOakPair]}})
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { sync } from 'vuex-pathify';
import CONSTANTS from '@/constants';

export default {
  name: 'home',
  data: () => ({
    CONSTANTS,
  }),
  computed: {
    threeXmultiplier: sync('game@settings.threeXmultiplier'),
    turnScore: sync('turn@score'),
    setCounts: sync('turn@setCounts'),
    setPoints: sync('game@settings.setPoints'),
    threeXset() {
      const mapping = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
      };
      return CONSTANTS.sets[`threeX${mapping[this.threeXmultiplier]}`];
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
