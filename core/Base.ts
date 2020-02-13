import { Component, Vue } from 'nuxt-property-decorator'

@Component
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
