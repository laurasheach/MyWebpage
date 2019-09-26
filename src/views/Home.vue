<template lang="html">

  <div id="homepage">

    <h2>Home</h2>

    <div class="intro">
      <p>Hello, I'm Laura Sheach and I have just completed the Professional Software Development with <a href="https://codeclan.com/">CodeClan</a> in Glasgow, Scotland. I am a quick learner and highly motivated individual with a curious mind who enjoys learning new skills and concepts, whilst collaborating with others to build solutions to problems.</p>
      <br>
      <p>I originally began my journey in Software Development at University, initially studying Computer Science with Maths. However after my first year, I changed my degree to pursue a different path in accountancy. Since then I have had a rewarding career as a Chartered Accountant and also HGV Driver.</p>
      <br>
      <p>Following a break from my previous career, I decided to take the plunge and return to my original plan, choosing to begin with the Professional Software Development course, offered by CodeClan. The best way I can describe the course is “Brutal but brilliant”! It has tested me at every point but pushed me to expand my knowledge of Software Development. I have thoroughly enjoyed the experience and it’s fuelled my desire to learn more and make the step into the Tech Industry.</p>
    </div>

    <div class="codeclan">
      <h3>CodeClan</h3>
      <br>
      <p>Intensive 16- week Professional Software Development course, accredited by SQA. The course is designed to cover not only best practice and the technical aspects of full stack development, incorporating the four pillars of Object Orientated Programming and the SOLID principles, but also the culture such as the use of Agile methodologies. Key skills I gained from the course are:</p>
    </div>

    <div class="key-skills">
      <table>
        <th></th>
        <th></th>
        <tr>
          <td>
            <ul>
              <li>OOP using Ruby <i class="far fa-gem"></i>, JavaScript <i class="fab fa-js"></i> and Java <i class="fab fa-java"></i></li>
            </ul>
          </td>
          <td>
            <ul>
              <li>HTML, CSS and UX Design</li>

            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Back-end Technologies with RESTful routes using PostgreSQL and MongoDB</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Test Driven Development - Minitest and Mocha</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
          <ul>
            <li>Frameworks including Sinatra, Node, Express, Vue.js, React and Spring</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Git and Github</li>
          </ul>
        </td>
        </tr>
      </table>
    </div>

  </div>


</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="css" scoped>

#homepage {
  margin: 0;
  padding: 0;
  background-color: black;
  color: #D0BCD5;
}

.intro {
  padding: 15px;
  height: 30vh;
  margin-left: 25vw;
  margin-right: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
  /* border: 1px solid green; */
}

a {
  text-decoration: underline;
}

a:visited {
  color: #D0BCD5;
}

.codeclan {
  padding: 15px;
  height: 10vh;
  margin-left: 25vw;
  margin-right: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
  /* border: 1px solid blue; */
}

.key-skills {
  margin-top: 15px;
  padding:15px;
  height: 10vh;
  margin-left: 25vw;
  margin-right: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  font-size: 18px;
}

table {
  margin-top: 20px;
  padding-left: 15px;
  text-align: center;
  background: none;
  /* border: 1px solid red; */
}

tr {
  width: 50vw;
}

td {
  text-align: left;
  padding: 5px;
}

</style>
