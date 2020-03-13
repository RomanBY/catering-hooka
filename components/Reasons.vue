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
          <h2 class="text-center mt-3 font-weight-thin black--text">Прокат от "ДЫМнаДОМ" — это не только вкусный кальян, но и значительные преимущества</h2>
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
        description: 'Для кальянного бара  мы предлагаем не только традиционные арабские кальяны, но и  эксклюзивные дизайнерские кальяны ручной работы , которые несомненно  подчеркнут оригинальность, самобытность и статус Вашего заведения.  Кальяны подбираются по принципу соответствия их стилевого решения дизайну интерьера заведения.',
        imageUrl: require('../assets/img/images/star.webp')
      },
      {
        title: 'Квалификация',
        description: 'Мы проводим  мастер-классы и тренинги  для сотрудников  фирмы. Все работники проходят  ежемесячную аттестацию  по подтверждению своей квалификации. За каждым заведением-партнером закрепляется  супервайзер  от нашей компании, который  контролирует процесс работы персонала.',
        imageUrl: require('../assets/img/images/person.webp')
      },
      {
        title: 'Качество',
        description: 'Для своих кальянов  мы используем зарубежный уголь и табак высочайшего качества  премиальных брендов , таких как: Nakhla, Fumari, Golden Layalina, Starbuzz, Tangiers. Помимо традиционных кальянов, наше меню содержит оригинальные кальяны на различных овощах и фруктах, а также незабываемые кальянные коктейли.\n',
        imageUrl: require('../assets/img/images/fingerup.webp')
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
