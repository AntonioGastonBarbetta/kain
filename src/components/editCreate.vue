<template>
  
    <modal name="editCreate"  @before-open="beforeOpen" height="auto" adaptive="True" classes="v--modal mt-5" scrollable="True"> 

    <div class="container detail">

        <div class="row justify-content-start mt-5">

          <h3 class="ml-4 mr-5 col-4"> <strong> User:</strong></h3> 

          <input class="mr-3 col-5" v-model="passwords.tags.username" />

        </div>

        <div class="row justify-content-start mt-5">

          <h3 class="ml-4 mr-5 col-4"> <strong>Password:</strong> </h3> 

          <input class="mr-3 col-5" v-model="passwords.tags.password" />

        </div>

          
       <div >

        <div class="row justify-content-start mt-5">

          <h3 class="ml-4 mr-5 col-4"> <strong>Url:</strong> </h3> 

          <input class="mr-3 col-5" v-model="passwords.tags.url"/>

        </div>

        <div class="row justify-content-start mt-5 mb-5">

          <h3 class="ml-4 mr-5 col-4"> <strong>Description:</strong> </h3> 

          <textarea class="mr-3 col-5"  v-model="passwords.tags.description"/>

        </div>

        <div class="row justify-content-end mb-5 mr-5">
          <button class="buttonEdit" @click="saveEdit()" >Save</button>
        </div>

      </div>

    </div>
    </modal>
</template>

<script>
import axios from 'axios'

    export default{
        data(){
            return{
                passwords:{
                    "tags": {
                        "username": "",
                        "password": "",
                        "description": "",
                        "url": "",
                    }
                },
                edit:false,
                id:""
            }
        },

        methods:{
            beforeOpen (event) {
                
                if (event.params.id){
                    this.passwords = this.$store.getters.getAPassword(event.params.id);
                    this.edit = true;
                    this.id = event.params.id;
                }
            },
            saveEdit(){
                if(this.edit){
                    this.$store.dispatch('patchStore', this.passwords); 
                    this.passwords.tags.username = "";
                    this.passwords.tags.password = "";
                    this.passwords.tags.url = "";
                    this.passwords.tags.description = "";
                    this.$modal.hide('editCreate'); 
                    
                }else{
                    this.$store.dispatch('createStore', this.passwords);
                    this.passwords.tags.username = "";
                    this.passwords.tags.password = "";
                    this.passwords.tags.url = "";
                    this.passwords.tags.description = "";
                    this.$modal.hide('editCreate');

                }
            }

        }
 }

</script>

<style scoped>
.detail{
  border: 15px solid black !important;
}

.v--modal{
  margin-top: 400px;
}

.buttonEdit{
    border: solid black 3px;
    height: 40px;
    width: 130px;
    background-color: black;
    color: white;
    outline: none;
}

.buttonEdit:active{
    border: solid black 3px;
    height: 40px;
    width: 130px;
    background-color: white;
    color: black;
    outline: none;
}

</style>
