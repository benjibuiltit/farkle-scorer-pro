<template>
  <v-app>
    <AppBar />

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

    <v-bottom-navigation
    v-if="$route.path === '/'"
    fixed
    grow
    dark
    color="secondary"
    :style="`background-color: ${$vuetify.theme.currentTheme.primary}`">
      <v-btn @click="endTurn">
        <span>End Turn</span>
        <v-icon>mdi-check</v-icon>
      </v-btn>

      <v-btn @click="farkle">
        <span>Farkle</span>
        <v-icon>mdi-emoticon-sad-outline</v-icon>
      </v-btn>

      <v-btn @click="undo">
        <span>Undo</span>
        <v-icon>mdi-undo</v-icon>
      </v-btn>

    </v-bottom-navigation>

    <v-dialog
    v-model="installPrompt"
    >
    <v-card color="">
      <v-card-title class="luckiest">
        Install?
      </v-card-title>
      <v-card-text>
        {{ installMessage }}

        <template v-if="installInstructionsVisible">
          <div>
            1) Tap the Share button in Safari.
          </div>
          <div>
            2) Tap the icon labeled Add to Home Screen.
          </div>
          <div>
            3) Tap Add in the upper-right corner.
          </div>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-btn class="luckiest" elevation="0" color="white" dark @click="installPrompt = false">
          Close
        </v-btn>
        <v-spacer/>
        <v-btn class="luckiest" color="secondary" @click="install">
          Install
        </v-btn>
      </v-card-actions>

    </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import { sync } from 'vuex-pathify';
import { history } from '@/utils/history';
import { defer } from 'q';

export default {
  name: 'App',
  data: () => ({
    installPrompt: false,
    installInstructionsVisible: false,
    deferredPrompt: '',
    isIOS: navigator.userAgent.includes('iPhone') && !navigator.userAgent.includes('Chrome'),
    isChrome: navigator.userAgent.includes('Chrome'),
    installMessage: 'This app can be installed to your device. This will allow this web app to look and behave like any other installed up. You will find it in your app lists and be able to pin it to your home screen.',
    installInstructions: '1) Tap the Share button in Safari.\n\n2) Tap the icon labeled Add to Home Screen.\n3) Tap Add in the upper-right corner.'
  }),
  created () {
    if (this.isIOS) {
      this.installPrompt = true;
    } else {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        this.installPrompt = true;
  
        this.deferredPrompt.userChoice
            .finally(() => {
              this.installPrompt = false;
            });
      });
    }
  },
  components: {
    AppBar
  },
  computed: {
    turnScore: sync('turnScore'),
    activePlayerIndex: sync('activePlayerIndex'),
    players: sync('players'),
    sets: sync('sets'),
    diceCount: sync('diceCount'),
  },
  methods: {
    install() {
      if (this.isIOS) {
        this.installInstructionsVisible = true;
        this.installMessage = '';
      } else {
        this.deferredPrompt.prompt()
      }
    },
    endTurn() {
      history.push(this.$store.state);
      this.players[this.activePlayerIndex].score += this.turnScore;
      this.cyclePlayers();

    },
    farkle() {
      history.push(this.$store.state);
      this.cyclePlayers();
    },
    cyclePlayers() {
      Object.values(this.sets).forEach((set) => {
        set.count = 0;
      });
      this.activePlayerIndex = this.activePlayerIndex === this.players.length - 1
        ? 0 : this.activePlayerIndex += 1;
      this.diceCount = 6;
      this.turnScore = 0;
    },
    convertObject(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    undo() {
      const lastState = history.pop();
      this.$store.commit('replaceState', lastState);
    }
  }
};
</script>


<style>
@font-face {
  font-family: 'Luckiest Guy';
  font-weight: 600;
  src: url('./assets/LuckiestGuy.ttf');
}


.luckiest {
  font-weight: 600;
  font-family: 'Luckiest Guy';
  color: white;
  text-shadow:
  0px 0px 0 var(--v-primary-base),
  -1.5px -1.5px 0 var(--v-primary-base),
  1.5px -1.5px 0 var(--v-primary-base),
  -1.5px 1.5px 0 var(--v-primary-base),
  1.5px 1.5px 0 var(--v-primary-base);
  padding-left: 3px;
  padding-right: 3px;
}
.luckiest-title {
  font-weight: 600;
  font-family: 'Luckiest Guy';
  color: white;
  text-shadow:
  0px 0px 0 var(--v-primary-base),
  -3px -3px 0 var(--v-primary-base),
  3px -3px 0 var(--v-primary-base),
  -3px 3px 0 var(--v-primary-base),
  3px 3px 0 var(--v-primary-base),
  -6px -6px 0 var(--v-accent-base),
  6px -6px 0 var(--v-accent-base),
  -6px 6px 0 var(--v-accent-base),
  6px 6px 0 var(--v-accent-base);
  padding-left: 3px;
  padding-right: 3px;
}
</style>
