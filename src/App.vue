<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col md='3' offset='1'>
          <div>
            <h4>Today's Tickets</h4>
            <b-table striped hover :items="info"></b-table>
          </div>
        </b-col>
        <b-col md='3' >
          <div>
            <h4>DPS Leaderboard</h4>
            <b-table striped hover :items="info2"></b-table>
          </div>
        </b-col>
        <b-col md='3' >
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
      info3: null
    }
  },
  mounted () {
    var self = this;
    setInterval(function(){
      axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.info = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.info2 = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.info3 = response.data.Referral))));
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
