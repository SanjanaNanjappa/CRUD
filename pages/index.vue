<template>
  <v-content>
      <v-container class="fill-height mt-5" fluid>

       

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
        (v) => !!v || 'Password field is required',
      ],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      }
  },

  mounted() {
    this.nav()
    },
    methods: {
      nav() {
        this.$router.push({ path: '/login' })

      },
      loginauth() {

      }
    }
}
</script>
