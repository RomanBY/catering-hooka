<template>
  <v-container class="about">
    <v-row justify="center">
      <v-col cols="12">
        <v-card
          :img="item.image"
        >
          <div data-aos="fade-up">
            <v-container class="py-0">
              <v-row class="justify-center about-bg">
                <v-col
                  cols="12"
                  sm="6"
                  :class="{ 'order-1': even }"
                >
                  <v-row class="mx-5">
                    <v-col
                      cols="12"
                      class="about__title text-center text-sm-left"
                    >{{ item.title }}
                    </v-col>
                    <v-col
                      cols="12"
                      class="about__text text-center text-sm-left"
                    >
                      {{ item.description }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  cols="6"
                  class="d-none d-sm-flex order-0"
                  :class="{ 'order-0': even }"
                >
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Base from '../../core/Base'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class AboutCard extends Base {

  @Prop({
    type: Object,
    required: true
  }) item!: object

  @Prop({
    type: Boolean,
    required: true
  }) even!: boolean

  constructor () {
    super()
  }
}
</script>
<style scoped lang="scss">
  @import "../../assets/variables";

  .about {
    &-bg {
      background: #00000069;
    }

    &__title {
      font-size: 30px;
    }

    &__text {
      font-size: 21px;
    }
  }

  @media (max-width: 1263px) {
    .about {
      &__title {
        font-size: 24px;
      }

      &__text {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 800px) {
    .about {
      &__title {
        font-size: 20px;
        padding-bottom: 0;
      }

      &__text {
        font-size: 14px;
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: 700px) {
    .about {
      &__title {
        font-size: 18px;
        padding-bottom: 0;
        padding-top: 0;
      }

      &__text {
        font-size: 12px;
        padding-bottom: 0;
      }
    }
  }

  @media (max-width: 599px) {
    .about {
      &__title {
        font-size: 22px;
        padding-bottom: 0;
        padding-top: 0;
      }

      &__text {
        font-size: 15px;
        padding-bottom: 0;
      }
    }
  }

</style>
