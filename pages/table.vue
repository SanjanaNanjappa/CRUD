<template>
<div>
<h1>User list</h1>
<br/>

<v-overlay
        v-if="!users"
      >
      <div class="text-center">
          <v-progress-circular
            :size="50"
            color="#F76F72"
            indeterminate
          ></v-progress-circular>
        </div></v-overlay>

<div v-if="users">
<v-data-table
    v-model="selected"
    :headers="headers"
    :items="users"
    :items-per-page="10"
    class="elevation-1"
  >
  <template v-slot:item.name="{ item }">
            <div @click="viewposts(item.id)" style="cursor: pointer;" class="txtcolor">{{ item.name }}</div>
          </template>

  <template v-slot:item.edit="{ item }">
                    <v-tooltip left>
                      <template v-slot:activator="{ on }">
                        <v-icon
                          color="#F76F72"
                          style="cursor: pointer;"
                          v-on="on"
                          @click="edituser(item)"
                        >
                        mdi-pencil
                        </v-icon>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>
                  </template>
  
  <template v-slot:item.delete="{ item }">
                    <v-tooltip left>
                      <template v-slot:activator="{ on }">
                        <v-icon
                          color="#F76F72"
                          style="cursor: pointer;"
                          v-on="on"
                          @click="deleteuser(item)"
                        >
                        mdi-delete
                        </v-icon>
                      </template>
                      <span>Delete</span>
                    </v-tooltip>
                  </template>
  </v-data-table>

  <v-layout row justify-center>
        <v-dialog v-model="dialog" max-width="1200">
          <v-card>
            <v-btn
              
              fab
              icon
              class="float-right mr-2"
              right
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-card-text>
                <v-layout wrap>
                  <v-flex xs12>
                  <h2 class="mt-5 mb-5">Edit Details</h2>
                    <v-row>
                      <v-col>
                        <h4 class="mb-2 black--text">Name</h4>
                        <v-text-field
                          v-model="name"
                          placeholder="Name"
                          outlined
                          class="mt-5"
                          label="Name"
                          type="text"
                        />
                      </v-col>
                      <v-col>
                        <h4 class="mb-2 black--text">Mobile</h4>
                        <v-text-field
                          v-model="mobile"
                          placeholder="Mobile"
                          outlined
                          class="mt-5"
                          label="Mobile"
                          type="text"
                        />
                      </v-col>
                      <v-col>
                        <h4 class="mb-2 black--text">Website</h4>
                        <v-text-field
                          v-model="website"
                          placeholder="Website"
                          outlined
                          class="mt-5"
                          label="Website"
                          type="text"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                    <v-col>
                        <h4 class="mb-2 black--text">Email</h4>
                        <v-text-field
                          v-model="email"
                          placeholder="Email"
                          outlined
                          class="mt-5"
                          label="Email"
                          type="text"
                        />
                      </v-col>
                      <v-col></v-col>
                      <v-col></v-col>
                    </v-row>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#F76F72"
                        class="white--text"
                        @click="editdata"
                      >
                        Save
                      </v-btn>
        </v-card-actions>
                  </v-flex>
                </v-layout>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>

      <v-layout row justify-center>
        <v-dialog v-model="dialog1" max-width="500">
          <v-card>
            <v-card-text>
                <v-layout wrap>
                  <v-flex xs12>
                  <h2 class="mt-5 mb-5">Are you sure you want to delete {{name}} ?</h2>

                  <v-card-actions>
                  <v-spacer></v-spacer>
                      <v-btn
                        color="#F76F72"
                        class="white--text mr-3"
                        @click="dialog1 = false"
                      >
                        Cancel
                      </v-btn>

                      <v-btn
                        color="#F76F72"
                        class="white--text"
                        @click="deletedata"
                      >
                        Delete
                      </v-btn>
        </v-card-actions>

                  </v-flex>
                </v-layout>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-layout>
  </div>


  <v-snackbar v-model="snackbar" :color="color" timeout=2000 top>
  {{text}}
  </v-snackbar>

  </div>
</template>

<script>

import Toast from '@/components/Toast'

export default {

  components: {
    Toast,
  },
  

  data() {
      return {
          headers: [
          {
            text: 'Name',
            value: 'name',
          },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
          { text: 'Website', value: 'website' },
          { text: 'Edit', value: 'edit'},
          { text: 'Delete', value: 'delete'}
        ],
        users: [],
        selected: [],
        dialog: false,
        name: null,
        email: null,
        website: null,
        mobile: null,
        id: null,
        snackbar: false,
        text: '',
        color: null,
        dialog1: false
      }
  },

  mounted() {
      this.check()
    },
    methods: {
      nav() {
        this.$router.push({ path: '/table' })

      },
      async check() {
          console.log('called')
          const userlist = await this.$axios.$get(
          '/users')
          this.users = userlist
      },
      edituser(val) {
        console.log(val)
        this.dialog = true
        this.name = val.name
        this.mobile = val.phone
        this.website = val.website
        this.email = val.email
        this.id = val.id
      },

      async editdata() {
        console.log(this.name)
        try{
        const userlist = await this.$axios.$patch(
          '/users/' + this.id)
          this.snackbar = true
          this.text = 'User updated successfully'
          this.color = 'success'
          this.dialog = false
        }catch(error) {
          this.snackbar = true
          this.text = 'Please try again'
          this.color = 'red'
        }
      },

      deleteuser(val) {
        this.dialog1 = true
        this.name = val.name
        this.id = val.id

      },
      async deletedata() {
        try{
        const userlist = await this.$axios.$delete(
          '/users/' + this.id)
          this.snackbar = true
          this.text = 'User deleted successfully '
          this.color = 'success'
          this.dialog = false
          this.check()
          this.dialog1 = false
        }catch(error) {
          this.snackbar = true
          this.text = 'Please try again'
          this.color = 'red'
        }
      },

      viewposts(id) {
        console.log(id)
        this.$store.commit('sessionStorage/updateUserid', id)
        this.$router.push({ path: '/posts' })
      }
    }
}
</script>

<style>
  .txtcolor {
    color: #F76F72;
    font-weight: 800;
    font-size: 15px;
  }

  .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}


.column {
  float: left;
  width: 50%;
  padding: 10px;
  
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>