<template>
  <div class="container-fluid mt-5">

    <div class="row justify-content-center pt-5">

      <div class="alignment">
      
      <div class="row justify-content-center">
        <h1 class="m-4 fontkain display-4">Kain</h1>
      </div> 
        
        <img src="../assets/lock.svg" alt="">

        <div class="row justify-content-center">
        <button @click="authenticate" class="mt-5 button">ingresar</button>
        </div>
      
      </div>
    </div>

  </div>
</template>

<script>
  import firebase from '../firebaseService.js';


export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    authenticate(){
    
      this.$store.dispatch('authenticate');
    
    },
      
  }
}
</script>

<style scoped>
  .button{
    border: solid black 3px;
    height: 40px;
    width: 130px;
    background-color: white;
  }
  .button:hover{
    border: solid black 3px;
    height: 40px;
    width: 130px;
    background-color: black;
    color: white;
  }

  
</style>

