<template>
  <div class="container">
    
    <div class="fixed-top navegation ">
    <div class="row  mt-4 pb-2 ">


          <h2 class="col-2 align-self-start fontkain ml-3 ml-md-5">Kain</h2>

          <div class="col-6 align-self-center ml-4">

            <label> <img src="../assets/tool.svg" class="d-none d-lg-block  ml-3 magnifying-glass"></label>
            <input type="text" placeholder="Search" class="search col-10 align-self-start" v-model="search">
          
          </div>

          <div class="col-2 col-md align-self-end blockquote text-right mr-3 mr-md-5">
          <h3 >logout</h3>
          </div>
    
    </div>
    </div>

    <div class="container mt-5 pt-4">

      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Password</th>
            <th scope="col">Url</th>
            <th scope="col">Detail</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody v-for="item in filteredList" :key="item.id">
          <tr class="animation">
            <td  >{{ item.tags.username }}</td>
            <td >{{ item.tags.password}}</td>
            <td >{{ item.tags.url}}</td>
            <td > <button v-b-modal.banco class="btn" @click="modalFunction(item.id)"> <img src="../assets/medical.svg" id="detail"></button></td>
            <td> <button class="btn" @click="modalFunctionEdit(item.id)" ><img src="../assets/pencil.svg" id="detail"></button></td>
          </tr>
        </tbody>
      </table>

    </div>



      <div class="row justify-content-end mr-5 pr-5 mb-5 pb-5">
        <button class="mt-3 buttonCreate" @click="modalFunctionEdit(null)">Create</button>
      </div>

    <app-detail></app-detail>
    <app-editCreate></app-editCreate>

</div>


</template>

<script>
import axios from 'axios'
import Detail from './details.vue'
import EditCreate from './editCreate.vue'

export default {
  data(){
    return{
      search: ""
    }
  },
  
  computed:{
    passwords(){
      return this.$store.getters.getPasswords;
    },
    filteredList() {
      return this.passwords.filter(item => {
        return item.tags.url.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components:{
    'app-detail':Detail,
    'app-editCreate': EditCreate
  },
  methods:{
    modalFunction(id){
      this.$modal.show('detail', { id: id });

    },
    modalFunctionEdit(id){
      
      this.$modal.show('editCreate', { id: id});
      this.$forceUpdate()
    },
  },
  created (){
      this.$store.dispatch('getPasswordsApi');

  },
  updated(){
      this.$store.dispatch('getPasswordsApi');
  }
}
</script>


<style lang="scss" scoped>

#logout{
  text-align: right;
  width: 30px;
}


.btn {
 background-color: white;
 outline: 0px auto;
 border: 0px solid black;
}

.btn:focus {
 background-color: white;
 outline: 0px auto -webkit-focus-ring-color;
 border: 0px solid black;
}

.btn:active {
 background-color: white;
 outline: 0px auto -webkit-focus-ring-color;
 border: 0px solid black;
}



.navegation{
  background-color: white;
  opacity: 0.8;
}

.magnifying-glass{
    display: inline-block;
    width: 30px;
    height: 35px;
    margin-right: 15px;
    margin-top: -5px;
    margin-bottom: -20px;
}

#detail{
    width: 45px;
    height: 40px;
}

#detail:hover{
-webkit-transform:scale(1.3);transform:scale(1.3);
}


.text{
  font-size: 120%;
}



.buttonCreate{
    border: solid black 3px;
    height: 40px;
    width: 130px;
    background-color: black;
    color: white;
    outline: none;
}

.buttonCreate:active{
    border: solid black 3px;
    height: 40px;
    width: 130px;
    background-color: white;
    color: black;
    outline: none;
}





</style>


