<template>
  <div id="app">
    
    <b-container fluid>
      <b-row >
        <b-col cols='4'>
          <div style='margin-bottom: -25px; position: absolute;z-index : 1;'>
          <h1 ><a >{{myDate}}</a> </h1>
          
          </div>
        </b-col>
        <b-col cols='6'>
          <div style='text-align: center !important;margin-bottom: -25px; position: absolute;z-index : 1;'>
          <h2>
          Total Tickets: {{info[0].Total + info[1].Total}}  -  {{((info[0].Total/(info[0].Total + info[1].Total))*100).toString().slice(0,5)}}% Web </h2>
          <h4>Express Tickets : {{info8[0].Total}}</h4>
          </div>
        </b-col>
      </b-row>
      <div> 
    <b-carousel
      id="carousel-fade"
      fade
      :interval="15000"
      controls
      indicators
      background="#212529"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-blank img-alt="Blank image">
        <b-row>
        <b-col lg='4' md='12' style='padding-bottom:25px'>
          <div>
            <h4>Total Tickets {{((info[0].Total/(info[0].Total + info[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="info"></b-table>
          </div>
          <div>
            <h4>CA Tickets {{((info4[0].Total/(info4[0].Total + info4[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="info4"></b-table>
          </div>
          <div>
            <h4>NV Tickets {{((info5[0].Total/(info5[0].Total + info5[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="info5"></b-table>
          </div>
        </b-col>
        <b-col lg='8' md='12' style="">
          <div>
            <h4>Web %</h4>
            <h5 style="margin-bottom: -15px;">
            Contractors: {{((info7[0].Total/(info7[0].Total + info6[0].Total))*100).toString().slice(0,5)}}% - 
            Members: {{((info7[1].Total/(info7[1].Total + info6[1].Total))*100).toString().slice(0,5)}}% - 
            Homeowners: {{((info7[2].Total/(info7[2].Total + info6[2].Total))*100).toString().slice(0,5)}}% - </h5>
            <hr class="my-4" style="border-color:#ced4da; margin-left:175px;margin-right:175px;">
            
          </div>
          <div style=" margin-top: -15px">
            <h4>Web Tickets by User Type</h4>
            <b-table striped hover dark :items="info7" ></b-table>
          </div>
        
          <div>
            <h4>DPS Tickets by User Type</h4>
            <b-table striped hover dark :items="info6"></b-table>
          </div>
        </b-col>
      </b-row>
      </b-carousel-slide>

      

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-blank img-alt="Blank image">
        <b-row>
        <b-col lg='6' md='12' style="position:relative; overflow-y:auto; height:580px;padding-bottom:25px">
          <div>
            <h4>DPS Leaderboard</h4>
            <b-table striped hover dark :items="info2" ></b-table>
          </div>
        </b-col>
        <b-col lg='6' md='12' style="position:relative; overflow-y:auto; height:580px;padding-bottom:25px">
          <div>
            <h4>WEB Leaderboard</h4>
            <b-table striped hover dark :items="info3"></b-table>
          </div>
        </b-col>
      </b-row>
      </b-carousel-slide>

    </b-carousel>
  </div>

    </b-container>
    <b-img src='./src/assets/811-logo.svg' width='115' style="padding-top:30px; padding-bottom: 25px;" />
    
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
      info6: null,
      info7: null,
      info8: null,
      myDate : new Date().toISOString().slice(5,10)
    }
  },
  mounted () {
    axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.info = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.info2 = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.info3 = response.data.Referral), axios.get('https://guarded-depths.com/reports/ca')
        .then(response => (self.info4 = response.data.Referral), axios.get('https://guarded-depths.com/reports/nv')
        .then(response => (self.info5 = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_csr')
        .then(response => (self.info6 = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_web')
        .then(response => (self.info7 = response.data.Referral), axios.get('https://guarded-depths.com/reports/sat')
        .then(response => (self.info8 = response.data.Referral)))))))));
    var self = this;
    setInterval(function(){
      axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.info = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.info2 = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.info3 = response.data.Referral), axios.get('https://guarded-depths.com/reports/ca')
        .then(response => (self.info4 = response.data.Referral), axios.get('https://guarded-depths.com/reports/nv')
        .then(response => (self.info5 = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_csr')
        .then(response => (self.info6 = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_web')
        .then(response => (self.info7 = response.data.Referral), axios.get('https://guarded-depths.com/reports/sat')
        .then(response => (self.info8 = response.data.Referral)))))))));
    }, 20000);
      
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f9fa;
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
