<template lang="html">

  <div id="qualifications">
    <h2>Qualifications</h2>

    <table class="qualifications">
      <tr class="qual-table-header">
        <th class="qual-dates">Dates</th>
        <th class="qual-institution">Institution</th>
        <th class="qual-qualification">Qualification</th>
      </tr>
      <tr>
        <td>May 2019 - August 2019</td>
        <td class="qual-institution-link"><a href="https://codeclan.com/">CodeClan</a></td>
        <td class="qual-description">
          <ul>
            <li>Completed - Professional Software Development Course (16 weeks)</li>
            <li>SCQF Level 8 Professional Development Award in Software Development</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>July 2002 - December 2005</td>
        <td class="qual-institution-link"><a href="https://www.icas.com/">ICAS (Institute of Chartered of Accountants of Scotland)</a></td>
        <td class="qual-description">
          <ul>
            <li>Chartered Accountant</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>September 1998 - June 2002</td>
        <td class="qual-institution-link"><a href="https://www.stir.ac.uk/">University of Stirling</a></td>
        <td class="qual-description">
          <ul>
            <li>Bachelor of Accountancy with Honours (Second class, Upper Division)</li>
          </ul>
        </td>
      </tr>
    </table>

  </div>

</template>

<script>
export default {
  name: 'qualifications',
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

th.qual-dates {
  width: 8vw;
}

th.qual-institution {
  width: 20vw;
}

th.qual-qualification {
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

a:visited {
  color: #D0BCD5;
}

td.qual-description {
  text-align: left;
}

</style>
