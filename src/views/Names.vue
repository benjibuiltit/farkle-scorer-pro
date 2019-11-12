<template>
  <div>
    <v-row justify="center" align="center">
      <v-col sm="8" md="6" xl="4">
        <div class="text-center luckiest">
          Enter Player Name
        </div>
        <v-row justify="center" align="center" class="my-0 py-0">
          <v-col cols="3" class="my-0 py-0">
            <div class="text-center luckiest">
              <v-text-field @input="notice = ''" v-model="playerCount" type="tel" class="ma-auto" autofocus/>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: 'configure-names'
}
</script>