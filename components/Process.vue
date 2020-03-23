<template>
  <div class="process process-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          :class="{ 'pl-0': !isDesktop }"
          md="12"
          lg="10"
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
              <div :data-aos="isDesktop ? (index % 2 === 0 ? 'fade-left' : 'fade-right') : 'fade-left'">
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
              </div>
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
      description: 'Все максимально просто! Вы выбираете услугу на странице и заполняете форму Заявки. Или просто делаете заказ по телефону +375 (25) 514-27-95.',
      image: '/logo/24-hours-phone-servis.svg'
    },
    {
      title: 'Мы доставляем',
      description: 'Мы доставляем заказ в максимально которкие сроки (не более 2 часов). Рассказываем, как пользоваться кальяном и о мерах безопасности. Делаем фотографию паспорта и составляем договор. Если захотите, то кальян приготовит курьер-кальянщик. В этом случае вы узнаете секреты как сделать хороший кальян. Либо приготовить кальян самому — это легко и интересно.',
      image: '/logo/logistics-delivery.svg'
    },
    {
      title: 'Вы отдыхаете',
      description: 'Вы наслаждаетесь кальяном! Если у вас возникнут вопросы, позвоните нам по телефону или Telegram.',
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
