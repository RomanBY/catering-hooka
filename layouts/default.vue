<template>
  <v-app dark>
    <div v-scroll="onScroll">
      <v-img
        v-show="$route.path === '/'"
        class="bg-image"
        :src="require('../assets/img/bg/actions-bg.webp')"
        height="100vh"
      />
      <v-app-bar
        fixed
        app
        class="toolbar"
      >
        <v-img
          max-width="50"
          src="/logo/logo192.png"
          class="mr-3"
        />
        <v-toolbar-title>
          <div>
            <a href="tel:+375255142795">
              <v-btn
                icon
                :small="isDesktop"
              >
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </a>
            <a href="tg://resolve?domain=@ShishaMinsk">
              <v-btn
                icon
                :small="isDesktop"
              >
                <v-icon>mdi-telegram</v-icon>
              </v-btn>
            </a>
            <a
              v-if="isDesktop"
              href="tel:+375255142795"
              class="toolbar__phone-number"
            >+375 (25) 514-27-95</a>
          </div>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-title
          v-if="false"
          v-for="(item, key) in menu"
          :key="key"
        >
          <nuxt-link
            class="d-lg-block d-none toolbar__menu-item mx-2"
            :to="item.url"
            v-if="item.visible"
          >
            {{ item.title }}
          </nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title
          class=""
          v-for="(item, key) in navigation"
          :key="key"
        >
          <div
            @click="changePlace(item.goTo)"
            class="d-md-block d-none toolbar__menu-item mx-4"
          >
            {{ item.title }}
          </div>
        </v-toolbar-title>
        <v-btn
          icon
          @click.stop="rightDrawer = !rightDrawer"
          class="d-md-none"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <nuxt />
      </v-content>
      <v-navigation-drawer
        v-model="rightDrawer"
        right
        temporary
        fixed
        class="drawer"
      >
        <div class="d-flex">
          <v-img
            class="my-auto mt-2"
            height="80"
            contain
            src="/logo/logo192.png"
          />
        </div>
        <div class="d-flex mt-2">
          <h1 class="mx-auto">ДЫМныйДОМ</h1>
        </div>
        <hr class="mt-3">
        <v-list class="mt-5">
          <v-list-item
            v-for="(item, index) in navigation"
            :key="index"
            @click="changePlace(item.goTo)"
          >
            <v-list-item-title
              class="drawer__title"
            >{{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer
        class="footer"
      >
        <footer-base />
      </v-footer>
    </div>
    <v-scale-transition>
      <v-btn
        @click="goToTop()"
        v-show="scroll > 200"
        class=" v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark"
        fab
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Base from '~/core/Base'
// eslint-disable-next-line camelcase
import { I_Menu } from '~/modules/intefaces'
import FooterBase from '~/components/Footer.vue'

@Component({
  components: {
    FooterBase
  }
})
export default class extends Base {
  $vuetify: any

  constructor () {
    super()
  }

  scroll: number = 0
  rightDrawer: boolean = false
  // eslint-disable-next-line camelcase
  menu: I_Menu.IMainManu[] = [
    {
      title: 'Главная',
      goTo: '',
      active: true,
      url: '/',
      visible: false
    }
  ]

  // eslint-disable-next-line camelcase
  navigation: I_Menu.INavigation[] = [
    {
      title: 'Главная',
      goTo: 'html',
      active: false
    },
    {
      title: 'О нас',
      goTo: '.about',
      active: false
    },
    {
      title: 'Почему мы',
      goTo: '.reasons',
      active: false
    },
    {
      title: 'Цены',
      goTo: '.prices',
      active: false
    },
    {
      title: 'Контакты',
      goTo: '.contacts',
      active: false
    }
  ]

  onScroll (e: any) {
    this.scroll = e.target.scrollingElement.scrollTop
  }

  goToTop () {
    // @ts-ignore
    this.$vuetify.goTo('html')
  }

  changePlace (anchor: string) {
    if (this.$route.path === '/') {
      this.$vuetify.goTo(anchor)
    } else {
      this.$router.push('/')
      setTimeout(() => {
        this.$vuetify.goTo(anchor)
      }, 500)
    }
    this.rightDrawer = false
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }

  .drawer {
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%);

    &__title {
      font-size: 1.3rem;
    }
  }

  .footer {
    min-height: 250px;
    background: $color--black !important;
    overflow: hidden;
  }

  .toolbar {
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%);

    &__phone {
      font-size: 14px;

      &-number {
        color: white !important;
      }
    }

    &__name {
      cursor: pointer;
      transition: 250ms;

      &-last {
        color: #ebcd84;
        transition: 250ms;
      }

      &:hover {
        color: $color--menu--text-hover;

        & .toolbar__name-last {
          color: white;
        }
      }
    }

    &__menu-item {
      cursor: pointer;
      transition: 250ms;
      color: $color--menu--text;

      &:hover {
        color: $color--menu--text-hover;
      }
    }
  }
</style>
