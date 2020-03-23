<template>
  <div class="about">
    <about-card
      v-for="(item, index) in cards"
      :key="index"
      :item="item"
      :even="index % 2 === 0"
    />
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component, Watch } from 'nuxt-property-decorator'
  import AboutCard from '~/components/CardInfo/AboutCard.vue'
  import { State } from 'vuex-class'

  @Component({
    components: {
      AboutCard
    }
  })
  export default class About extends Base {

    cards: object[] = [
      {
        title: 'Кальянный кейтеринг',
        description: 'ДЫМнайДОМ предлагает услугу сопровождения мероприятий. Вы планируете корпоратив, свадьбу или день рождения? Тогда обустройте кальянную зону без которой сегодня не проходит ни один праздник. Кейтеринг — это выездное обслуживание банкетов кальянами, аренда кальянов с кальянщиками и всем необходимым реквизитом',
        image: require('~/assets/img/about/hookah_mini-1.jpg')
      },
      {
        title: 'Кальянный аутсорсинг',
        description: 'Работаем с заведениями. Если вам необходим кальян в вашем кафе или ресторане, то мы готовы предоставить профессиональные кальянные услуги и проверенных кальянщиков. Предложение взаимовыгодное, поэтому мы сотрудничаем более чем с 30 заведениями по всей стране.',
        image: require('~/assets/img/about/XXL.jpg')
      },
      {
        title: 'Аренда кальяна посуточно',
        description: 'Всем любителям ароматного, густого дыма предлагаем услугу «Доставка готового кальяна на дом и на природу». В оговоренное время и дату мы привозим чистый, новый кальян, готовый к дымной церемонии. В комплекте вы получаете все необходимое.\n' +
          '\n' +
          'Заказать кальян вы можете в любую точку Минска: домой, в ресторан, на природу, в офис или отель.Для этого заполните форму или позвоните. И уже в скором времени вы сможете наслаждаться кальяном там, где вы сами пожелаете! Мы стараемся сделать сервис максимально простым! Аренда кальяна(+ 2 забивки) на 1 сутки от 20 рублей. Остальные условия оговариваются по звонку или телеграм.',
        image: require('~/assets/img/about/3.jpg')
      }
    ]
    constructor () {
      super()
    }

    @State('scroll') scroll: number | undefined

    @Watch('scroll')
    qwe () {
      console.log(this.scroll)
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .about {
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  }
</style>
