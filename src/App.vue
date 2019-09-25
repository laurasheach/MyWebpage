<template>
  <div id="app">

    <header>LAURA SHEACH</header>

    <nav>
      <button><router-link :to="{ name: 'home' }">Home <i class="fas fa-home"></i></router-link></button>
      <button><router-link :to="{ name: 'cv'}">CV <i class="fas fa-file"></i></router-link></button>
      <button><router-link :to="{ name: 'projects'}">Projects <i class="fas fa-briefcase"></i></router-link></button>
    </nav>

    <body>
      <router-view id="view"></router-view>
    </body>

    <footer>
      <div id="contact">
        <a class="contact-links" href="https://www.linkedin.com/in/laura-sheach/"><i class="fab fa-linkedin"></i></a>
        <button class="email-button">
          <a class="email" href="mailto:laurasheach@yahoo.co.uk?subject=Email From Site">laurasheach@yahoo.co.uk <i class="fas fa-envelope"></i></a>
        </button>
        <a class="contact-links" href="https://github.com/laurasheach"><i class="fab fa-github"></i></a>
      </div>
      <p>&#x24B8 Laura A Sheach</p>
    </footer>

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
  background-color: #D0BCD5;
  border-radius: 10px;
  width: 10vw;
  height: 2vw;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}

button.email-button {
  margin: 10px;
  padding: 0px;
  background-color: #D0BCD5;
  border-radius: 10px;
  width: 18vw;
  height: 2vw;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}

a {
    color: #181C1C;
}

a.contact-links {
  color: #D0BCD5;
  font-size: 40px;
}

a.email {
  color:  #181C1C;
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
  padding: 10px;
}

#contact {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
