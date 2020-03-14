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
        description: 'ДЫМнаДОМ предлагает услугу сопровождения мероприятий. Вы планируете корпоратив, свадьбу или день рождения? Тогда обустройте кальянную зону без которой сегодня не проходит ни один праздник. Кейтеринг — это выездное обслуживание банкетов кальянами, аренда кальянов с кальянщиками и всем необходимым реквизитом',
        image: require('~/assets/img/about/hookah_mini-1.jpg')
      },
      {
        title: 'Кальянный аутсорсинг',
        description: 'Работаем с заведениями. Если вам необходим кальян в вашем кафе или ресторане, то мы готовы предоставить профессиональные кальянные услуги и проверенных кальянщиков. Предложение взаимовыгодное, поэтому мы сотрудничаем более чем с 30 заведениями по всей стране.',
        image: require('~/assets/img/about/XXL.jpg')
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
    background: #303030;
  }
</style>
