import Vue from 'vue';
import Vuex from 'vuex';
import pathify, { make } from 'vuex-pathify';
import { sets } from '@/constants';

const state = {
  players: [
    {
      name: 'Kayla',
      score: 0,
    },
    {
      name: 'Benji',
      score: 0,
    },
  ],
  threeXmultiplier: 1,
  activePlayerIndex: 0,
  turnScore: 0,
  sets,
  diceCount: 6,
  activeGame: false,
};

const mutations = make.mutations(state);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state,
  mutations: {
    ...mutations,
    replaceState(state, newState) {
      Object.assign(state, newState);
    }
  }
});
