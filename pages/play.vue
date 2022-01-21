<template>
    <div>
        <h1>This is a simple game of Balloon Pop</h1>
        <br/>
        <br/>
        <h3>Rules:</h3>
        <br/>
        <p>The game is very basic, you cick on the "Blow Air" button to fill up the bollon with air, with every click you earn a dollar.
        The ballon might pop at any point so you can either continue to fill air or claim the money when
        needed. You will be given about 10 ballons to play with.</p>

        <div class="text-center btnclass">
            <v-btn
                rounded
                color="primary"
                dark
                @click="nav()"
            >
                Start Game
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {

  components: {
    
  },

  data() {
      return {
        
      }
  },

  mounted() {
    },
    methods: {
      nav() {
        this.$router.push({ path: '/startgame' })

      },
    }
}
</script>

<style>
.btnclass {
    margin-top: 50px;
    
}
</style>