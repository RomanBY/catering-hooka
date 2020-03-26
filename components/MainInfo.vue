<template>
  <v-container class="main">
    <v-carousel
      cycle
      :show-arrows="false"
      hide-delimiter-background
      height="100vh"
      class="slider"
    >
      <v-carousel-item
        v-for="(item,i) in slides"
        :key="i"
        :src="item.url"
      />
    </v-carousel>
    <v-row
      class="main"
      align="center"
      justify="center"
    >
      <v-col
        xl="8"
        md="10"
        class="main__block display-3 text-center"
      >
        <v-card
          color="#00000070"
          class="py-5"
        >
          <h1
            class="main__block-text mt-5"
          >ДЫМныйДОМ — кальянный сервис по аренде, кейтерингу и аутсорсингу</h1>
          <v-card-text>
            Если вам нужна аренда кальяна с  доставкой, кальянный кейтеринг или кальянный аутсорсинг, то ДЫМныйДОМ — это компания, которая вам нужна! Всего один звонок, и вы наслаждаетесь дымным кальяном в любом удобном для вас месте.
            <br>+375 (25) 514-27-95
          </v-card-text>
          <v-row justify="center">
            <v-col
              cols="6"
            >
              <v-btn
                dark
                large
                color="#C99A2E"
                @click="$vuetify.goTo('.prices')"
              >Подробнее
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Base from '../core/Base'
import { Component } from 'nuxt-property-decorator'

@Component
export default class MainInfo extends Base {

  constructor () {
    super()
  }

  slides: object[] = [
    {
      url: require('../assets/img/slider/foto1.jpg')
    },
    {
      url: require('../assets/img/slider/foto2.jpg')
    },
    {
      url: require('../assets/img/slider/foto3.jpg')
    }
  ]

}
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .main {
    max-height: 100vh;
    min-height: 100vh;

    &__block {
      z-index: 1;
      font-weight: bolder;

      &-text {
        font-size: 40px;
      }

      &-wrap {
        background: black;
      }
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: 1263px) {
    .main {
      &__block {
        &-text {
          font-size: 40px;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .main {
      &__block {
        &-text {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .main {
      &__block {
        &-text {
          font-size: 24px;
          line-height: 35px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .main {
      &__block {
        &-text {
          font-size: 18px;
          line-height: 35px;
        }
      }
    }
  }
</style>
