<template>

<div>
<h1>List Of Albums</h1>

<v-list  v-for="name in titles">
<v-list-item>
    <h2 class="listitem" @click="photos(name)">{{name.id}}. {{name.title}}</h2>
</v-list-item>
</v-list>

<v-dialog v-model="dialog" max-width="1600" class="">
<v-card>
            <v-btn
              
              fab
              icon
              class="float-right mr-2 mt-2"
              right
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-card-text class="paddingt pt-4">
            <h2 class="mt-5 mb-3">Photos Of Album "{{albmname}}"</h2>
            </v-card-text>
                <v-row class="spacings">
    <div v-for="image in images">
        <v-img max-width="50" class="mr-2 mb-2" :src="image.thumbnailUrl">
        </v-img>
    </div>
    </v-row>
    </v-card>
</v-dialog>

</div>
</template>

<script>

export default {

  components: {
  },
  

  data() {
      return {
          image: null, 
          titles: null,
          dialog: false,
          images: null,
          albmname: null
      }
  },

  mounted() {
      this.check()
    },

    methods: {
        async check() {
          console.log('called')
          try{
            const albumnames = await this.$axios.$get(
          '/albums')
            this.titles = albumnames
          }catch(error) {

          }
      },

      async photos(name) {
          this.dialog = true
          try{
            const photo = await this.$axios.$get(
          '/photos?albumId=' + name.id)
            this.images = photo
            this.albmname = name.title
          }catch(error){

          }
      }

    }

}

</script>

<style>
  .listitem {
    text-decoration: underline;
    color: #F76F72;
    cursor: pointer;
  }
  .spacings {
      padding-bottom: 60px;
      padding-right: 30px;
      padding-left: 30px;
  }
  .paddingt: {
      padding-top: 60px !important;
  }
</style>