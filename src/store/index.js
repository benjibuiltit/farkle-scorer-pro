import Vue from 'vue';
import Vuex from 'vuex';
import pathify, { make } from 'vuex-pathify';
import constants from '@/constants';

const { sets } = constants;

const state = {
  players: [],
  game: {
    settings: {
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
    },
    players: [
      {
        name: 'Benji',
        score: 5000,
      },
    ],
  },
  turn: {
    score: 0,
    setCounts: {
      [sets.one]: 0,
      [sets.five]: 0,
      [sets.threeXone]: 0,
      [sets.threeXtwo]: 0,
      [sets.threeXthree]: 0,
      [sets.threeXfour]: 0,
      [sets.threeXfive]: 0,
      [sets.threeXsix]: 0,
      [sets.fourOak]: 0,
      [sets.fiveOak]: 0,
      [sets.sixOak]: 0,
      [sets.straight]: 0,
      [sets.threePairs]: 0,
      [sets.fourOakPair]: 0,
      [sets.twoTriplets]: 0,
    },
  },
};

const mutations = make.mutations(state);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state,
  mutations,
});
