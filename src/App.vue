<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
    >
      <v-toolbar-title>
        <h2 class="luckiest-title luckiest mt-2">
          Farkle Scorer
        </h2>
      </v-toolbar-title>

      <v-spacer/>

      <v-btn icon color="secondary" x-large>
        <v-icon>mdi-restart</v-icon>
      </v-btn>

      <v-divider vertical class="mx-2"/>

      <v-btn icon color="secondary" x-large>
        <v-icon>mdi-format-list-numbered</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

    <v-bottom-navigation
    fixed
    grow
    dark
    color="secondary"
    :style="`background-color: ${$vuetify.theme.currentTheme.primary}`">
      <v-btn>
        <span>End Turn</span>
        <v-icon>mdi-check</v-icon>
      </v-btn>

      <v-btn>
        <span>Farkle</span>
        <v-icon>mdi-emoticon-sad-outline</v-icon>
      </v-btn>

      <v-btn>
        <span>Undo</span>
        <v-icon>mdi-undo</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
