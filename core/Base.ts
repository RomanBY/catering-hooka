import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'ДЫМныйДОМ | Кальянный сервис ДЫМныйДОМ.by | Дымный дым',
    meta: [
      { hid: 'description', name: 'description', content: 'аренда кальяна, кальянный кейтеринг, кальянный аутсорсинг. Выезжаем на мероприятия. Работаем с заведениями. Звоните +375 (25) 514-27-95' },
      { hid: 'keywords', name: 'keywords', content: 'аренда кальяна, кальян прокат, кальян дом, покурить кальян, доставка кальяна, доставка табака, доставка углей, аренда кальяна на сутки, кальян в дом, аренда кальяна цена, Кальянный аутсорсинг, кальянный кейтеринг, rent a hookah' }
    ]
  }
})
export default class Base extends Vue {

  constructor () {
    super()
  }

  get device (): string {
    return this.$store.state.device
  }

  get isDesktop () {
    return this.device === 'desktop'
  }
}
