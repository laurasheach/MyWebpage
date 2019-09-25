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
  height: 55vh;
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

</style>
