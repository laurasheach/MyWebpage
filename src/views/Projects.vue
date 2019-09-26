<template lang="html">

  <div class="projects">

      <h2>Projects</h2>
      <br>
      <div class="project-intro">
        <p>I have completed the following projects either on my own, or in a group. The link provided takes you to the Github Repository which includes a readme file giving full details of each project.</p>
      </div>

      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td class="project-detail">
            <h3>Solo Ruby Project
              <a class="project-link" href="https://github.com/laurasheach/RubyProject"><i class="fab fa-github"></i></a>
            </h3>
            <br>
            <p class="tech">Ruby, Sinatra, PostgreSQL, HTML and CSS </p>
            <br>
            <p>The brief was to create a management system app for an animal shelter to help keep a track of the animals in its care and follow their journey through to adoption.</p>
          </td>
          <td>
            <img src="../assets/animal_shelter_homepage.png" alt="Solo Ruby Project Homepage" height=180 width=320>
          </td>
        </tr>
        <tr>
          <td class="project-detail">
            <h3>Group JavaScript Projects
              <a class="project-link" href="https://github.com/DafyddLlyr/World_Quiz"><i class="fab fa-github"></i></a>
            </h3>
            <br>
            <p class="tech">JavaScript, Vue.js and MongoDB</p>
            <br>
            <p>We created an app where the user is able to learn about the countries of the world using an interactive quiz. Users can create a profile to keep a track of correct answers, summarised using google charts.</p>
          </td>
          <td>
            <img src="../assets/final_landing_page.png" alt="Group JavaScript Project Homepage" height=180 width=320>
          </td>
        </tr>
        <tr>
          <td class="project-detail">
            <h3>Group Java Project
              <a class="project-link" href="https://github.com/laurasheach/Project3ComicClan"><i class="fab fa-github"></i></a>
            </h3>
            <br>
            <p class="tech">Java, Spring, Hibernate, PostgreSQL backend, JavaScript, JSX, React frontend</p>
            <br>
            <p>We created an app with a database of comics. Here a user can create, log-in, update and delete their profile, and use that profile to browse comics, characters and publishers.</p>
          </td>
          <td>
            <img src="../assets/main_page.png" alt="Group Java Project Homepage" height=180 width=320>
          </td>
        </tr>
      </table>

  </div>

</template>

<script>
export default {
  name: 'projects',
}
</script>

<style lang="css" scoped>

table {
  padding: 15px;
  text-align: center;
  background: none;
  margin-left: 12vw;
  margin-right: 12vw;
}

a.project-link {
  color: #D0BCD5;
}

tr {
  margin: 10px;
}

h3 {
  text-decoration: underline;
}

td {
  padding: 0.5vw;
}

td.project-detail {
  text-align: left;
}

p.tech {
  font-style: italic;
}

</style>
