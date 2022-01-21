<template>
<div>
<h1>To Do List For Each User</h1>

  <v-expansion-panels>
    <v-expansion-panel v-for="name in users">
      <v-expansion-panel-header @click="getval(name.id)" class="listitem">
        {{name.name}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        
  <v-simple-table
    fixed-header
    height="300px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Todo Item
          </th>
          <th class="text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in todos"
          :key="item.name"
        >
          <td>{{ item.title }}</td>
          <td><v-chip :class="getColor(item.completed)">{{
              pill(item.completed)
            }}</v-chip></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</div>

</template>


<script>
export default {

    data() {
      return {
          users: null,
          todos: null

      }
    },

    mounted() {
      this.check()
    },

    methods: {
        async check(name) {
          console.log('called')
          try{
            const usernames = await this.$axios.$get(
          '/users')
            this.users = usernames
          }catch(error) {

          }
      },

      async getval(val) {
          try{
            const todolist = await this.$axios.$get(
          '/todos?userId=' + val)
            this.todos = todolist
          }catch(error) {

          }
      },

      async getColor(val) {
          if(val == true) {
              return 'green--text'
          }else{
              return 'red--text'
          }
      },

        pill(value) {
      if (value == true) {
        return 'Completed'
      } else if (value == null) {
        return '--'
      } else {
        return 'Not Completed'
      }
    },
    getColor(kycCompleted) {
      if (kycCompleted == true) {
        return 'green'
      } else if (kycCompleted == false) {
        return 'red'
      }
    },
    }
}

</script>

<style>
  .listitem {
    text-decoration: underline;
    color: #F76F72;
    cursor: pointer;
    font-size: 25px;
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