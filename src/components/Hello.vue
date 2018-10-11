<template>
  <div class="hello">
    <h1 v-bind=:getMeetDay">{{ msg }}</h1>
    <table>
      <tbody>
          <tr v-for="user in users">
                <td>{{user.name}} </td>
                <td>{{user.age}}</td>
          </tr>
      </tbody>
    </table>  
  </div>
</template>

<script>

import {fb} from '../service/firebase'

export default {
  name: 'hello',
  firebase:{
      users: fb.ref('users')
  },

  data () {
    return {
      msg: 'HOME'
    }
  },
  methods:{
     getMeetDay(){
          alert(this.$firebaseRefs.users.child("1").name);
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
