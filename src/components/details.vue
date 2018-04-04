<template>
  <div class="container detail mt_5">
      <div class="relleno"></div>
    
    <modal name="detail"  @before-open="beforeOpen" height="auto" adaptive="true" classes="v--modal mt-5" scrollable="True"> 
  
      <div class="container detail">

        <div class="row justify-content-center mt-5 mb-2">

          <h3 class="ml-4 mr-5 col-4 "> <strong>Description:</strong> </h3> 
        
        </div>

        <div class="row justify-content-center mb5">
         
          <p class="mr-3 col-5 mb-5 "> {{this.password}} </p>

        </div>

      </div>

    </modal>


   
      
  </div>

</template>


<script>
import axios from 'axios'
import EditCreate from './editCreate.vue'

 export default {
  data(){
    return{
        password : {}
        }
    },
    methods: {
       beforeOpen (event) {
         
        this.password = this.$store.getters.getAPassword(event.params.id).tags.description;
        console.log(this.password);

    },
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
