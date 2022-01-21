<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>

      <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar tile>
            <img contain src="/S-logos.jpeg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="font-size: 12px;">
              Sanjana
            </v-list-item-title>
            <v-list-item-subtitle style="font-size: 12px;">
              {{useremail}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#F76F72">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#F76F72"
    >
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />

      
      <h2 @click="navto()" class="ml-5 white--text cursortype">CRUD Operation</h2>

      <v-spacer></v-spacer>
      <v-icon
        color="white"
        style="cursor: pointer;"
        @click="logoutapp"
      >
      mdi-logout
      </v-icon>
      
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} CRUD Project</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Users',
          to: '/table'
        },
        {
          icon: 'mdi-apps',
          title: 'Photos',
          to: '/album'
        },
        {
          icon: 'mdi-notebook-edit',
          title: 'To-Do',
          to: '/todo'
        },
        {
          icon: 'mdi-animation-play',
          title: 'Play Now',
          to: '/play'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      useremail: null
    }
  },

  mounted() {
    this.load()
    },

  methods: {
    load() {
      this.useremail = this.$store.state.sessionStorage.email
      console.log('logging', this.$store.state.sessionStorage.email)
    },

    logoutapp() {
      this.$router.push({ path: '/login' })
    },

    navto() {
      this.$router.push({ path: '/table' })
    }
  }
}
</script>

<style>
.textcolor {
  background-color: #F76F72 !important;
}
.cursortype {
  cursor: pointer;
}
</style>

