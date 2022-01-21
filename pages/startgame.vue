<template>
    <div>
        <div>
            <h2 class="green--text">Your score</h2>
            <h3 class="green--text">${{current_score}}</h3>

        </div>

        <div>
        <v-row align="center" justify="center">
        <div v-if="!pop" class="text-center divpos">
            <v-icon
                :size="getsize()"
                color="green darken-2"
            >
                mdi-balloon
            </v-icon>
        </div>
        <div v-if="pop" class="text-center divpos">
            <v-img contain class="popdiv" src="/pop.png"></v-img>
        </div>
        </v-row>
        </div>

        <div class="text-center">
            <v-btn
                rounded
                large
                color="success"
                dark
                @click="increase()"
            >
                Blow Air
            </v-btn>
        </div>
        <div class="text-center mt-3">
            <v-btn
                rounded
                large
                color="primary"
                dark
                @click="claim()"
            >
                Claim Cash
            </v-btn>
        </div>

        <template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          You have made $ {{current_score}}
        </v-card-title>
        <v-card-text>
        Restart the game to continue or exit the game.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="nav()"
          >
            EXIT
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="restart()"
          >
            RESTART
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
    </div>
</template>

<script>
export default {

  components: {
    
  },

  data() {
      return {
          score: 10,
          size: 100,
          current_score: 10,
          pop: false,
          dialog: false,
          random: null
        
      }
  },

  mounted() {
      this.load()
    },
    methods: {
        async load() {
            this.score = 10
            this.size = 100
            this.current_score = 10
            this.pop = false

        },

      async increase() {
          this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
          if (this.size >= (this.random*100)) {
              this.pop = true
              this.current_score = 0
              this.dialog = true
          }else{
              this.pop = false
              this.current_score += 1
              this.size += 20
          }


      },

      getsize() {
          return this.size.toString() + 'px'
      },

      async claim() {
          this.dialog = true
      },

      nav() {
          this.$router.push({ path: '/play' })
      },

      restart() {
          this.dialog = false
          this.load()
      }
    }
}
</script>

<style>
.btnclass {
    margin-top: 50px;  
}
.divpos {
    width: 300px;
    height: 550px;

}
.popdiv {
    width: 330px;
    height: 330px;
}
</style>