<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import '../node_modules/bootstrap/scss/bootstrap.scss';
export default {
  name: 'App'
}
</script>

<style>

  @font-face {
    font-family: 'Architects';
    src:  url('./fonts/VarelaRound-Regular.ttf')  format('truetype'); /* Safari, Android, iOS */
  }

  .fontkain{
    font-family: Architects;
  }
</style>



