<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col lg='4' md='12' >
          <div>
            <h4>Total Tickets</h4>
            <b-table striped hover :items="info"></b-table>
          </div>
          <div>
            <h4>CA Tickets</h4>
            <b-table striped hover :items="info4"></b-table>
          </div>
          <div>
            <h4>NV Tickets</h4>
            <b-table striped hover :items="info5"></b-table>
          </div>
        </b-col>
        <b-col lg='4' md='12' style="position:relative; overflow-y:auto; height:565px;">
          <div>
            <h4>DPS Leaderboard</h4>
            <b-table striped hover :items="info2" ></b-table>
          </div>
        </b-col>
        <b-col lg='4' md='12' style="position:relative; overflow-y:auto; height:565px;">
          <div>
            <h4>WEB Leaderboard</h4>
            <b-table striped hover :items="info3"></b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      info: null,
      info2: null,
      info3: null,
      info4: null,
      info5: null
    }
  },
  mounted () {
    axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.info = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.info2 = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.info3 = response.data.Referral), axios.get('https://guarded-depths.com/reports/ca')
        .then(response => (self.info4 = response.data.Referral), axios.get('https://guarded-depths.com/reports/nv')
        .then(response => (self.info5 = response.data.Referral))))));
    var self = this;
    setInterval(function(){
      axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.info = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.info2 = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.info3 = response.data.Referral), axios.get('https://guarded-depths.com/reports/ca')
        .then(response => (self.info4 = response.data.Referral), axios.get('https://guarded-depths.com/reports/nv')
        .then(response => (self.info5 = response.data.Referral))))));
    }, 3000);
      
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
