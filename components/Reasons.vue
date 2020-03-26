<template>
  <div class="reasons reasons-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          :cols=" isDesktop ? 8 : 12"
        >
          <h1 class="display-2 font-weight-bold mb-4 text-center reasons__title mt-4 black--text">Почему Вам стоит сделать <br> заказ у нас?</h1>
        </v-col>
        <v-col
          :cols=" isDesktop ? 8 : 12"
        >
          <h2 class="text-center mt-3 font-weight-thin black--text">Прокат от "ДЫМныйДОМ" — это не только вкусный кальян, но и значительные преимущества</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :data-aos="index === 0 ? 'fade-up-right' : index === reasons.length - 1 ? 'fade-up-left' : 'fade-up'"
          v-for="(reason, index) in reasons"
          :key="index"
          cols="12"
          md="4"
        >
         <reason-card
           :item="reason"
         />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'
  import { I_Reason } from '~/modules/intefaces'
  import ReasonCard from '~/components/CardInfo/ReasonCard.vue'

  @Component({
    components: {
      ReasonCard
    }
  })
  export default class Reasons extends Base {

    constructor () {
      super()
    }

    reasons: I_Reason.IReason[] = [
      {
        title: 'Уникальность',
        description: 'Для кальянного бара мы предлагаем обширное меню палитры вкусов, абсолютно любой крепости, а также вы получите кальян в максимально короткие сроки. Вам остается только насладиться вкусом.',
        imageUrl: require('../assets/img/images/star.png')
      },
      {
        title: 'Квалификация',
        description: 'Наши мастера обучены всем тонкостям кальянного ремесла, а также уже длительное время работают в известных заведениях города Минска. Мы никогда не стоим на месте, а всегда растем и только вверх.',
        imageUrl: require('../assets/img/images/person.png')
      },
      {
        title: 'Качество',
        description: 'Для своих кальянов мы используем только качественный уголь, которым пользуются в кальнных, большой ассортимент вкусов и наименований. Woodu, Al Fakher, Duft, DS, MustHave и многое другое. Также помимо трационных чашек можно насладиться кальяном на фрукте.',
        imageUrl: require('../assets/img/images/fingerup.png')
      }
    ]

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";
  .reasons {
    &-wrap {
      background: white;
      min-height: 600px;
      overflow: hidden;
    }

    &__title {
      color: white;
    }
  }

</style>
