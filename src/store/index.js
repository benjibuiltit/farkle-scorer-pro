import Vue from 'vue';
import Vuex from 'vuex';
import pathify, { make } from 'vuex-pathify';
import {
  sets,
  setCounts,
} from '@/constants';

const state = {
  players: [
    {
      name: 'Benji',
      score: 0,
    },
    {
      name: 'Kayla',
      score: 0,
    },
  ],
  threeXmultiplier: 1,
  setPoints: {
    [sets.one]: 100,
    [sets.five]: 50,
    [sets.threeXone]: 300,
    [sets.threeXtwo]: 200,
    [sets.threeXthree]: 300,
    [sets.threeXfour]: 400,
    [sets.threeXfive]: 500,
    [sets.threeXsix]: 600,
    [sets.fourOak]: 1000,
    [sets.fiveOak]: 2000,
    [sets.sixOak]: 3000,
    [sets.straight]: 1500,
    [sets.threePairs]: 1500,
    [sets.fourOakPair]: 1500,
    [sets.twoTriplets]: 2500,
  },
  activePlayerIndex: 0,
  turnScore: 0,
  setCounts,
};

const mutations = make.mutations(state);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state,
  mutations,
});
