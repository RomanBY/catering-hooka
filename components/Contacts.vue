<template>
  <div class="contacts contacts-wrap">
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="11"
          sm="8"
        >
          <h1
            data-aos="fade-right"
            class="display-2 font-weight-thin mb-4 contacts__title mt-4"
          >Напишите нам!</h1>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="11"
          sm="8"
        >
          <v-form
            lazy-validation
            ref="form"
          >
            <div data-aos="fade-up">
              <v-text-field
                ref="name"
                data-aos-anchor-placement="bottom-bottom"
                light
                v-model="name"
                :counter="10"
                label="Имя"
                color="blue-grey"
                :rules="[val => (val || '').length > 2 || 'Введите имя']"
                outlined
              />
            </div>
            <div data-aos="fade-up">
              <v-text-field
                ref="phone"
                class="mb-3"
                light
                label="Телефон"
                prefix="+375 "
                color="blue-grey"
                outlined
                v-model="phone"
                v-mask="phoneMask"
                :rules="phoneRules"
                :error="validationErrors.phone && validationErrors.phone.length > 0"
                :error-messages="validationErrors.phone && validationErrors.phone.length > 0 ? validationErrors.phone[0] : null"
                @input="validationErrors.phone = []"
              />
            </div>
            <div data-aos="fade-up">
              <v-textarea
                ref="message"
                light
                outlined
                v-model="message"
                label="Сообщение"
                color="blue-grey"
                :counter="100"
                :rules="[val => (val || '').length > 5 || 'Укажите интересующий вопрос']"
              />
            </div>
            <div data-aos="fade-up">
              <v-btn
                light
                color="white"
                class="mr-4"
                @click="sendMessage"
              >
                Отправить
              </v-btn>
            </div>
          </v-form>
          <v-dialog
            v-model="showAlert"
            max-width="290"
          >
            <v-card v-if="res">
              <v-card-title class="headline">{{ res.status }}</v-card-title>
              <v-card-text>
                {{ res.message }}
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  color="darken-1"
                  text
                  @click="showAlert = false, $vuetify.goTo('html')"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import Base from '../core/Base'
  import { Component } from 'nuxt-property-decorator'
  import axios from 'axios'
  // @ts-ignore
  import { mask } from 'vue-the-mask'

  interface Element extends Vue {
    validate (): boolean
  }

  @Component({
    directives: {
      mask
    }
  })
  export default class Contacts extends Base {
    constructor () {
      super()
    }
    name: string = ''
    phone: string = ''
    phoneMask: string = '(##) ###-##-##'
    phoneRules: ((arg0: string) => boolean | string)[] = [
      v => !!v || 'Телефон обязательное поле',
      v => v && v.length === 14 ? /[(](29|25|44|33)[)]\s\d{3}[ \- ]\d{2}[ \- ]\d{2}/.test(v) || 'Введите корректно номер телефона' : true
    ]
    validationErrors: any = {
      phone: []
    }
    message: string = ''
    showAlert: boolean = false
    res: object | null = null

    sendMessage () {
      const form: Element = this.$refs.form as unknown as Element
      if (form.validate() && this.checkPhoneLength()) {
        this.getFeedback()
      }
    }

    checkPhoneLength (): boolean {
      if (this.formatPhone(this.phone).length === 12) {
        return true
      } else {
        this.validationErrors.phone = ['Введите телефон полностью']
        return false
      }
    }

    formatPhone (val: string): string {
      return '375' + parseInt(val.replace(/[^\d]/g, ''))
    }

    async getFeedback () {
      const { status } = await axios.post('https://formspree.io/xrgknjey', {
        name: this.name,
        message: '+375 ' + this.phone + ' ' + this.message
      })
      if (status === 200) {
        this.res = {
          status: 'Данные отправлены',
          message: 'Мы свяжемся с Вами в ближайшее время.'
        }
        this.name = ''
        this.phone = ''
        this.message = ''
        Object.keys(this.inputs).forEach(f => {
          // @ts-ignore
          this.$refs[f].reset()
        })
      } else {
        this.res = {
          status: 'Данные не отправлены',
          message: 'Попробуйте отправить данные позже.'
        }
      }
      this.showAlert = true
    }

    get inputs () {
      return {
        name: this.name,
        phone: this.phone,
        message: this.message
      }
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/variables";

  .contacts {
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
