<template>
  <div class="process process-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          md="12"
          lg="10"
          xs="8"
        >
          <v-timeline
            :dense="$vuetify.breakpoint.smAndDown"
            light
          >
            <v-timeline-item
              v-for="(item, index) in process"
              :key="index"
              color="#000000b8"
            >
              <v-card class="elevation-2 pt-2">
                <v-img
                  :src="item.image"
                  height="80"
                  contain
                />
                <v-card-title class="headline">
                  <p class="mx-auto mb-0">{{ item.title }}</p>
                </v-card-title>
                <v-card-text>
                  <p class="mb-0 text-center">{{ item.description }}</p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Base from '../core/Base'
import { Component } from 'nuxt-property-decorator'

@Component
export default class Process extends Base {

  constructor () {
    super()
  }

  process: object[] = [
    {
      title: 'Вы заказываете',
      description: 'Все максимально просто!\n' +
        'Вы выбираете тип кальяна на странице вашего города и заполняете форму Заявки. Или просто делаете заказ по телефону 8(920) 22-44-77-2. Аренда осуществляется круглосуточно.',
      image: '/logo/24-hours-phone-servis.svg'
    },
    {
      title: 'Мы доставляем',
      description: 'Мы доставляем заказ в максимально которкие сроки в зависимости от города (не более 90 минут).\n' +
        'Рассказываем, как пользоваться кальяном и о мерах безопасности. Делаем фотографию паспорта и составляем договор.\n' +
        'Если захотите, то кальян приготовит курьер-кальянщик. В этом случае вы узнаете секреты как сделать хороший кальян.\n' +
        'Либо приготовить кальян самому — это легко и интересно.',
      image: '/logo/logistics-delivery.svg'
    },
    {
      title: 'Вы отдыхаете',
      description: 'Вы наслаждаетесь кальяном! Если у вас возникнут вопросы или вам понадобится что-то дополнительно, например, доставка табака или доставка углей для кальяна на дом, позвоните нам по телефону или Watsapp.',
      image: '/logo/24-hours-delivery.svg'
    }
  ]

}
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .process {
    &-wrap {
      background: white;
      min-height: 600px;
      overflow: hidden;
    }

    &__title {
      color: black;
    }
  }

</style>
