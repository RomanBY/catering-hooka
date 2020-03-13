<template>
  <v-parallax
    dark
    :src="require('../assets/img/bg/ab2.webp')"
    height="600"
  >
    <v-container :class="{ 'px-0': !isDesktop }">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <h1
            class="display-2 font-weight-thin mb-4 text-center"
            :class="{ 'display-1': !isDesktop }"
          >Для нас процесс приготовления кальяна не просто работа, а целое искусство!</h1>
        </v-col>
        <v-col cols="12">
          <h4 class="subheading text-center">-- Hookah Cartel --</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'

  @Component
  export default class Parallax extends Base {

    constructor () {
      super()
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

</style>
