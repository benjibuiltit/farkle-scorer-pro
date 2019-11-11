<template>
  <div>
    <v-row class="home" justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center luckiest">
          How many players?
        </div>
        <v-row justify="center" align="center" class="my-0 py-0">
          <v-col cols="3" class="my-0 py-0">
            <div class="text-center luckiest">
              <v-text-field type="tel" class="ma-auto" autofocus/>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="home" justify="center" align="center">
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
    <v-row class="home" justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center luckiest">
          Enter your own player names?
        </div>
        <div class="text-center">
          <v-btn
          :elevation="playerNames ? '2' : '0'"
          class="luckiest mr-1"
          :color="playerNames  ? 'secondary' : '#e2e2e2'"
          dark
          @click="playerNames = true">
            Yes
          </v-btn>
          <v-btn
          :elevation="playerNames ? '0' : '2'"
          class="luckiest ml-1"
          :color="!playerNames ? 'secondary' : '#e2e2e2'"
          dark
          @click="playerNames = false">
            No
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'configure',
  data: () => ({
    playerNames: false,
  }),
  computed: {
    threeXonePoints: sync('sets@threeXone.points')
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