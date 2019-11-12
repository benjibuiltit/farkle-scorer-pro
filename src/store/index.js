import Vue from 'vue';
import Vuex from 'vuex';
import pathify, { make } from 'vuex-pathify';
import { sets } from '@/constants';

const state = {
  players: [
  ],
  threeXmultiplier: 1,
  activePlayerIndex: 0,
  turnScore: 0,
  sets,
  diceCount: 6,
  activeGame: false,
  playerCount: '',
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
