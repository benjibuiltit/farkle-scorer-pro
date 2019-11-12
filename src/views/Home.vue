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
              {{ diceCount }}
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
          @click="incrementSet(sets.one)">
            One - ({{ sets.one.count }})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.five)">
            Five - ({{ sets.five.count }})
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-0">
        <v-col>
          <v-btn
          :disabled="diceCount < threeXset.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(threeXset)">
            3 of a kind - ({{ threeXcount }})
          </v-btn>
          <v-slider
          :disabled="diceCount < threeXset.dice"
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
          :disabled="diceCount < sets.fourOak.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.fourOak)">
            4 of a kind - ({{ sets.fourOak.count }})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          :disabled="diceCount < sets.threePairs.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.threePairs)">
            3 pairs - ({{ sets.threePairs.count }})
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          :disabled="diceCount < sets.fiveOak.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.fiveOak)">
            5 of a kind - ({{ sets.fiveOak.count }})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          :disabled="diceCount < sets.straight.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.straight)">
            Straight - ({{ sets.straight.count }})
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          :disabled="diceCount < sets.sixOak.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.sixOak)">
            6 of a kind - ({{ sets.sixOak.count }})
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          :disabled="diceCount < sets.twoTriplets.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.twoTriplets)">
            2 Triplets - ({{ sets.twoTriplets.count }})
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col>
          <v-btn
          :disabled="diceCount < sets.fourOakPair.dice"
          class="luckiest"
          dark
          color="secondary"
          block
          @click="incrementSet(sets.fourOakPair)">
            4 of a kind & a pair - ({{ sets.fourOakPair.count }})
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { sync } from 'vuex-pathify';
import { history } from '@/utils/history';

export default {
  name: 'home',
  computed: {
    threeXmultiplier: sync('threeXmultiplier'),
    turnScore: sync('turnScore'),
    sets: sync('sets'),
    activePlayerIndex: sync('activePlayerIndex'),
    players: sync('players'),
    diceCount: sync('diceCount'),
    created() {
      window.scrollTo(0,0);
    },
    threeXset() {
      const mapping = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
      };
      return this.sets[`threeX${mapping[this.threeXmultiplier]}`];
    },
    threeXcount() {
      let aggregate = 0;
      Object.values(this.sets).forEach((set) => {
        if (set.name.startsWith('threeX')) aggregate += set.count;
      });
      return aggregate;
    },
  },
  methods: {
    incrementSet(set) {
      history.push(this.$store.state);
      this.turnScore += set.points;
      this.diceCount -= set.dice;
      if (this.diceCount === 0) this.diceCount = 6;
      set.count += 1;
    },
  },
};
</script>

<style scoped>
.v-messages {
  display: none;
}
.theme--dark.v-btn.v-btn--disabled {
  color: white !important;
}
</style>
