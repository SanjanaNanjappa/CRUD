<template>
  <v-content>
      <v-container class="fill-height mt-5" fluid>

       <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-card>
              <v-card-text>
                <v-form v-model="valid">
                  <v-row align="center" justify="center">
                    <v-img
                      max-width="200"
                      contain
                      src="/S-logos_transparent.png"
                    ></v-img>
                  </v-row>
                  <v-text-field
                    v-model="login.email"
                    placeholder="someone@example.com"
                    outlined
                    :rules="emailRules"
                    class="mt-5"
                    label="Email ID"
                    name="email"
                    type="email"
                    @keyup.enter="loginauth"
                  />

                  <v-text-field
                    id="password"
                    v-model="login.password"
                    outlined
                    placeholder="super secret password"
                    :rules="passwordRules"
                    label="Password"
                    name="password"
                    type="password"
                    v-on:keypress="isNumber($event)"
                    @keyup.enter="loginauth"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn class="white--text" color="#F76F72" :disabled="!valid" large @click="loginauth"
                  >Login &amp; Continue</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
  </v-content>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'login',

  components: {
    Logo,
    VuetifyLogo
  },

  data() {
      return {
        login: {
          email: '',
          password: ''
        },
        valid: true,

      passwordRules: [
        (v) => !!v || 'Password field is required'
      ],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      }
  },

  mounted() {
    },
    methods: {

      loginauth() {
        if(this.login.email == null){
          this.valid = false
        }else{
          this.$router.push({ path: '/table' })
          this.$store.commit('sessionStorage/updateemail', this.login.email)
        }
      },

      isNumber(val) {
        console.log('called')
        if(val.length > 6) {
          this.valid = false
        }else{
          this.valid = true
        }
      }
    }
}
</script>

<style>
.btncolor {
  color: #F76F72 !important;
}
</style>