<template>
  <div id="app">
    
    <b-container>
      <b-row style='padding-bottom:25px'>
        <b-col>
          <h1 >{{myDate}} </h1>
          <h3>Total Tickets: {{info[0].Total + info[1].Total}}  -  {{((info[0].Total/(info[0].Total + info[1].Total))*100).toString().slice(0,5)}}% Web</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg='4' md='12' style='padding-bottom:25px'>
          <div>
            <h4>Total Tickets</h4>
            <b-table striped hover dark :items="info"></b-table>
          </div>
          <div>
            <h4>CA Tickets</h4>
            <b-table striped hover dark :items="info4"></b-table>
          </div>
          <div>
            <h4>NV Tickets</h4>
            <b-table striped hover dark :items="info5"></b-table>
          </div>
        </b-col>
        <b-col lg='4' md='12' style="position:relative; overflow-y:auto; height:580px;padding-bottom:25px">
          <div>
            <h4>DPS Leaderboard</h4>
            <b-table striped hover dark :items="info2" ></b-table>
          </div>
        </b-col>
        <b-col lg='4' md='12' style="position:relative; overflow-y:auto; height:580px;padding-bottom:25px">
          <div>
            <h4>WEB Leaderboard</h4>
            <b-table striped hover dark :items="info3"></b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-img src='./src/assets/811-logo.svg' width='150' style="padding-top:50px; padding-bottom: 25px;" />
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
      info5: null,
      myDate : new Date().toISOString().slice(5,10)
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
  color: white;
  margin-top: 30px;
  
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
body {
  background-color:#212529;
}
img {
  max-width: 65%;
    
}
</style>
