<template>
  <div id="app">

    <header>LAURA SHEACH</header>

    <nav>
      <button><router-link :to="{ name: 'home' }">Home</router-link></button>
      <button><router-link :to="{ name: 'cv'}">CV</router-link></button>
      <button><router-link :to="{ name: 'projects'}">Projects</router-link></button>
    </nav>

    <body>
      <router-view id="view"></router-view>
    </body>

    <footer>&#x24B8 Laura A Sheach</footer>

  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
header {
  font-size: 50px;
  padding: 10px;
  color: #D0BCD5;
  background-color: #181C1C;
}

nav {
  padding: 10px;
  background-color: #181C1C;
}

button {
  margin: 10px;
  padding: 0px;
  color: #181C1C;
  background-color: #D0BCD5;
  border-radius: 10px;
  width: 10vw;
  height: 2vw;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}

button::after {
    color: #181C1C;
}

body {
  color: #D0BCD5;
  background-color: #181C1C;
}

footer {
  color: #D0BCD5;
  background-color: #181C1C;
  bottom: 0;
  position: fixed;
  width: 100vw;
}

</style>
