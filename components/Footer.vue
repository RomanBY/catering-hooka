<template>
  <v-content class="pt-1">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="11"
        lg="8"
      >
        <v-row justify="center">
          <v-col
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            cols="11"
            lg="8"
            class="d-flex"
          >
            <v-row justify="center">
              <v-col
                v-if="isDesktop"
                class="pt-0"
                cols="6"
              >
                <v-img
                  src="/logo/logo-footer.png"
                  height="150"
                  contain
                />
              </v-col>
              <v-col
                class="pt-0"
                cols="11"
                sm="6"
                md="6"
                lg="6"
                xl="6"
              >
                <h2>КОНТАКТЫ</h2>
                <div class="my-2">
                  <a
                    :href="`tel:${number}`"
                    class="mt-4 footer__contacts white--text"
                  >
                    <v-icon class="mr-2">mdi-phone</v-icon>
                    <span>{{ number }}</span>
                  </a>
                </div>
                <div class="mt-2">
                  <a
                    v-for="(item, index) in socialNetworks"
                    :key="index"
                    :href="item.link"
                  >
                    <v-btn
                      class="mx-1"
                      :class="{ 'ml-0': index === 0 }"
                      fab
                      small
                    >
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-btn>
                  </a>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            cols="10"
            lg="4"
          >
            <h2>ДЫМныйДОМ</h2>
            <p>Часы работы: с 10:00-22:00</p>
            <p>Прием заявок с сайта: крулостуточно</p>
          </v-col>
          <v-col
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            cols="10"
            lg="11"
          >
            <p class="mt-2">© 2020 Все права защищены</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import Base from '../core/Base'
import { Component } from 'nuxt-property-decorator'

@Component
export default class FooterBase extends Base {

  constructor () {
    super()
  }

  number: string = '+375 (25) 514-27-95'

  socialNetworks: object[] = [
    {
      icon: 'mdi-instagram',
      color: 'orange',
      link: 'https://instagram.com/dymdom_minsk'
    },
    {
      icon: 'mdi-telegram',
      color: 'blue',
      link: 'tg://resolve?domain=@ShishaMinsk'
    }
  ]
}
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .footer {
    &__contacts {
      font-size: 18px;
      transition: 250ms;
      cursor: pointer;

      &:hover {
        color: $color--menu--text-hover !important;
      }
    }
  }

</style>
