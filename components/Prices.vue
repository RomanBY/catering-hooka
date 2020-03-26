<template>
  <v-container class="prices mb-5">
    <v-row
      align="center"
      justify="center"
    >
      <h1 class="display-2 font-weight-thin mb-4 text-center mt-4">Наши цены</h1>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <p class="font-weight-thin text-center my-2">Цены указаны ориентировочно, есть возможность изменить количество кальянов и время препровождения</p>
    </v-row>
    <v-row justify="center">
      <v-col
        class="my-1"
        cols="10"
        md="6"
        v-for="(price, index) in prices"
        :key="index"
      >
        <v-card
          class="prices__card py-5"
        >
          <price-card :item="price"/>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <p class="font-weight-thin text-center my-2">за МКАД - 35 копеек/км</p>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'
  import { I_Price } from '~/modules/intefaces'
  import PriceCard from '~/components/CardInfo/PriceCard.vue'

  @Component({
    components: {
      PriceCard
    }
  })
  export default class Prices extends Base {

    constructor () {
      super()
    }

    prices: I_Price.IPrice[] = [
      {
        title: 'mini',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 10 ГОСТЕЙ',
        attributes: ['3 Кальяна', '1 Кальянщик'],
        prices: ['3 часа - 135 рублей', '5 часов - 190 рублей']
      },
      {
        title: 'standart',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 20 ГОСТЕЙ',
        attributes: ['5 Кальянов', '1 Кальянщик'],
        prices: ['3 часа - 180 рублей', '5 часов - 310 рублей']
      },
      {
        title: 'big',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 40 ГОСТЕЙ',
        attributes: ['8 Кальянов', '2 Кальянщика'],
        prices: ['3 часа - 300 рублей', '5 часов - 400 рублей']
      },
      {
        title: 'super',
        description: 'ОПТИМАЛЬНО ПОДОЙДЕТ ДЛЯ 80 ГОСТЕЙ',
        attributes: ['12 Кальянов', '2 Кальянщика'],
        prices: ['3 часа - 360 рублей', '5 часов - 600 рублей']
      }
    ]

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .prices {
    min-height: 600px;
    overflow: hidden;

    &__card {
      background: $color-bg--card-opacity !important;
    }
  }
</style>
