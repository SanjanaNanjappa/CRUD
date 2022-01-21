<template>
<div>
    <div>
        <h2>Posts of {{name}}</h2>

        <v-overlay
        v-if="!name"
      >
      <div class="text-center">
          <v-progress-circular
            :size="50"
            color="#F76F72"
            indeterminate
          ></v-progress-circular>
        </div></v-overlay>

        <v-row>
        <div v-for="content in contents">
        <v-col>
        <v-card
        class="mt-3 mb-3"
    max-width="400"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{content.title}}
        </v-list-item-title>
        <v-list-item-subtitle>{{content.body}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="opencomments(content)"
      >
        Comments
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </div>
  </v-row>
    </div>

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
            <v-card-text class=" pt-4">
            <h2 class="mt-5 mb-3">Comments for Post ID {{postid}}</h2>
            <div v-for="comment in comments">
            <h3>Name : {{comment.name}} </h3>
            <h3>Comment : {{comment.body}} </h3>
            <hr class="mb-5 mt-2"/>
            </div>
            </v-card-text>
                
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
          name: null,
          post: null,
          body: null,
          contents: null,
          userid: this.$store.state.sessionStorage.userId,
          dialog: false,
          comments: null,
          postid: null

      }
  },

  mounted() {
      this.check()
      this.posts()
    },

    methods: {
        async check() {
          console.log('called')
          try{
            const userlist = await this.$axios.$get(
          '/users/' + this.userid)
          this.name = userlist.name
          // for(let i=0; i< userlist.length; i++) {
          //   console.log('within for')
          //   console.log(userlist[i].id)
          //   try{
          //     const userposts = await this.$axios.$get(
          // '/posts?userId=' + userlist[i].id)
          // this.contents = userposts
          //   this.post = userposts.title
          //   this.body = userposts.body
          // }catch(error) {

          // }
          // }
          }catch(error) {

          }
      },

      async posts() {
          try{
              const userposts = await this.$axios.$get(
          '/posts?userId=' + this.userid)
          this.contents = userposts
            this.post = userposts.title
            this.body = userposts.body
          }catch(error) {

          }

      },

      async opencomments(id) {
        this.dialog = true
        try{
              const usercomments = await this.$axios.$get(
          '/comments?postId=' + id.id)
          this.comments = usercomments
          this.postid = id.id
          }catch(error) {

          }
      }

    }

}

</script>