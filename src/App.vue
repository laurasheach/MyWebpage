<template>
  <div id="app">
    <header>LAURA SHEACH</header>

    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>  ||
      <router-link :to="{ name: 'cv'}">CV</router-link>  ||
      <router-link :to="{ name: 'projects'}">Projects</router-link>
    </nav>

    <body>
      <router-view id="view"></router-view>
    </body>

  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
