<template lang="html">

  <div id="employment-history">

    <h2>Employment History</h2>

    <table class="resume">
      <tr class="table-header">
        <th class="date">Dates</th>
        <th class="employer">Employer</th>
        <th class="title">Job Title</th>
        <th class="description">Description of Duties</th>
      </tr>
      <tr>
        <td>September 2017 - February 2019</td>
        <td>Gist</td>
        <td>HGV Driver</td>
        <td class="job-description">
          <ul>
            <li>Undertook varied work as a class 1 HGV Driver</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>June 2017 - September 2017</td>
        <td>Eddie Stobart</td>
        <td>HGV Driver</td>
        <td class="job-description">
          <ul>
            <li>Undertook varied work as a class 1 HGV Driver</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>May 2016 - July 2016</td>
        <td>Hayton Coulthard</td>
        <td>HGV Driver</td>
        <td class="job-description">
          <ul>
            <li>Undertook varied work as a class 1 HGV Driver</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>December 2005 - December 2015</td>
        <td>Dickson Middleton Chartered Accountants</td>
        <td>Audit Manager</td>
        <td class="job-description">
          <ul>
            <li>Responsibility for managing my varied portfolio of clients all around the Central Scotland area</li>
            <li>Building and maintaining relationships with clients and liaising with and assisting them at all stages of the assignment process, ensuring all administration was complete and deadlines met</li>
            <li>Planning, management and review of audit and limited company accounts preparation, reporting to partner</li>
            <li>Responsibility for the supervision and training of Chartered Accountant Trainees</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>July 2002 - December 2005</td>
        <td>Dickson Middleton Chartered Accountants</td>
        <td>Trainee Chartered Accountant</td>
        <td class="job-description">
          <ul>
            <li>Undertook academic study and training required in order to qualify as a Chartered Accountant</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
export default {
  name: 'employment-history',
}
</script>

<style lang="css" scoped>

table {
  padding: 15px;
  text-align: center;
  background: none;
  margin-left: 15vw;
  margin-right: 15vw;
}

th {
  padding: 1vw 2vw;
  text-align: center;
  background: none;
  border-style: solid;
  border-width: thin;
  border-color: #D0BCD5;
}

th.date {
  width: 8vw;
}

th.employer {
  width: 8vw;
}

th.title {
  width: 8vw;
}

th.description {
  width: 30vw;
}

td {
  padding: 1vw 2vw;
  text-align: center;
  background: none;
  border-style: solid;
  border-width: thin;
  border-color: #D0BCD5;
}

td.job-description {
  text-align: left;
}


</style>
