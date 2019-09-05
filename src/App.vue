<template>
  <div id="app">
    
    <b-container fluid>
      <b-row >
        <b-col cols='2' class='d-none d-lg-block'>
          
          <div style=''>
          <h1 ><a >{{myDate}}</a> </h1>
          
          </div>
        </b-col>
        <b-col xl='8' lg='12'>
          <div style=' '>
          <h2>
          Total Tickets: {{(total[0].Total + total[1].Total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}  -  {{((total[0].Total/(total[0].Total + total[1].Total))*100).toString().slice(0,5)}}% Web </h2>
          <h4>Express Tickets : {{sat[0].Total}}</h4>
          Yesterday: {{(yesterday[0].Total + yesterday[1].Total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} Tickets  -  {{((yesterday[0].Total/(yesterday[0].Total + yesterday[1].Total))*100).toString().slice(0,5)}}% Web 
          </div>
        </b-col>
      </b-row>
      <div class="d-none d-lg-block"> 
    <b-carousel
      id="carousel-fade"
      fade
      :interval="10000"
      controls
      indicators
      background="#212529"
      height='50px'
      img-width="1024"
      img-height="440"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    <b-carousel-slide id='slide_1' img-blank img-alt="Blank image">
      <h3>Year to Date</h3>
        <b-row style='padding-bottom:50px;height: 550px'>
        <b-col md='12' >
          <div>
            <h4>{{(ytd[0].Total + ytd[1].Total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} Tickets - {{((ytd[1].Total/(ytd[0].Total + ytd[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="ytd"></b-table>
          </div>
        </b-col>
        </b-row>
        <b-row>
          
        <b-col  md='12' style='margin-top:-350px'>
          <column-chart :download="{background: 'white'}" height='250px' :data="[[month[0].Name, month[0].Total], [month[1].Name, month[1].Total],[month[2].Name, month[2].Total],[month[3].Name, month[3].Total], [month[4].Name, month[4].Total],[month[5].Name, month[5].Total],[month[6].Name, month[6].Total], [month[7].Name, month[7].Total],[month[8].Name, month[8].Total]]"></column-chart>
        </b-col>
      </b-row>
      </b-carousel-slide>


      <b-carousel-slide id='slide_2' img-blank img-alt="Blank image">
        <h3>Today</h3>
        <b-row style='padding-bottom:25px;height: 550px'>
        <b-col md='4' >
          <div>
            <h4>Total Tickets - {{((total[0].Total/(total[0].Total + total[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="total"></b-table>
          </div>
          <pie-chart  :download="{background: 'white'}" width="auto" height="250px" style='opacity: 0.9;' :data="[[total[0].Name, total[0].Total], [total[1].Name, total[1].Total]]" :colors="['#42b983', '#e83e8c']" />
        </b-col>
        <b-col md='8' >
          <div>
            <h5>CA Tickets {{((ca[0].Total/(ca[0].Total + ca[1].Total))*100).toString().slice(0,5)}}% Web</h5>
            <b-table striped hover  dark :items="ca"></b-table>
          </div>
          
          <div>
            <h5>NV Tickets {{((nv[0].Total/(nv[0].Total + nv[1].Total))*100).toString().slice(0,5)}}% Web</h5>
            <b-table striped hover  dark :items="nv"></b-table>
          </div>
        </b-col>
        </b-row>
        
      </b-carousel-slide>

      <b-carousel-slide id='slide_3' img-blank img-alt="Blank image">
        <h3>Today</h3>
        <b-row style='padding-bottom:25px;height: 590px'>
        <b-col lg='4' md='12' >
          <h4>Web Tickets</h4>
          <div v-if="type_csr[1].Name != 'HOME'">No Data</div><div v-else>
        <pie-chart :download="{background: 'white'}" width="auto" height="250px" style='opacity: 0.9;'  :data="[[type_web[0].Name, type_web[0].Total], [type_web[1].Name, type_web[1].Total],[type_web[2].Name, type_web[2].Total]]" :colors="['#42b983', '#ffc107', '#e83e8c']" />
        <hr class="my-4" style=" margin-left:175px;margin-right:175px;">
        <h4>DPS Tickets</h4>
        <pie-chart :download="{background: 'white'}" width="auto" height="250px" style='opacity: 0.9;' :data="[[type_csr[0].Name, type_csr[0].Total], [type_csr[1].Name, type_csr[1].Total],[type_csr[2].Name, type_csr[2].Total]]" :colors="['#42b983', '#ffc107', '#e83e8c']" />
        </div>
        </b-col>
        <b-col lg='8' md='12' style="">
          <div><div v-if="type_csr[1].Name != 'HOME'">No Data</div><div v-else>
            <h4>Web %</h4>
            <h5 style="margin-bottom: -15px;">
            Contractors: {{((type_web[0].Total/(type_web[0].Total + type_csr[0].Total))*100).toString().slice(0,5)}}% - 
            Homeowners: {{((type_web[1].Total/(type_web[1].Total + type_csr[1].Total))*100).toString().slice(0,5)}}% - 
            Members: {{((type_web[2].Total/(type_web[2].Total + type_csr[2].Total))*100).toString().slice(0,5)}}% </h5>
            <hr class="my-4" style="border-color:#ced4da; margin-left:100px;margin-right:100px;">
            </div>
          </div>
          <div style=" margin-top: -15px">
            <h4>Web Tickets </h4>
            <b-table striped hover dark :items="type_web" ></b-table>
          </div>
        
          <div>
            <h4>DPS Tickets </h4>
            <b-table striped hover dark :items="type_csr"></b-table>
          </div>
        </b-col>
      </b-row>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide id='slide_4' img-blank img-alt="Blank image">
        <h3>Today</h3>
        <b-row style='padding-bottom:25px;position:relative; overflow-y:auto;height: 560px'>
        <b-col lg='6' md='12' style="padding-bottom:25px">
          <div>
            <h4>DPS Leaderboard</h4>
            <b-table striped hover dark :items="dps" ></b-table>
          </div>
        </b-col>
        <b-col lg='6' md='12' style="padding-bottom:25px">
          <div>
            <h4>WEB Leaderboard</h4>
            <b-table striped hover dark :items="web"></b-table>
          </div>
        </b-col>
      </b-row>
      </b-carousel-slide>

    </b-carousel>
  </div>
  <div class="d-lg-none"> 
    <hr class="my-4" style="border-color:#ced4da; margin-left:175px;margin-right:175px;">
<b-row style='padding-bottom:25px;'>
        <b-col lg='4' md='12' >
          <h3>Today</h3>
          <div>
            <h4>Total Tickets {{((total[0].Total/(total[0].Total + total[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="total"></b-table>
          </div>
          <div>
            <h4>CA Tickets {{((ca[0].Total/(ca[0].Total + ca[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="ca"></b-table>
          </div>
          <div>
            <h4>NV Tickets {{((nv[0].Total/(nv[0].Total + nv[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="nv"></b-table>
          </div>
        </b-col>
        <hr class="my-4" style="border-color:#ced4da; margin-left:175px;margin-right:175px;">
        <b-col md='12' >
          <div>
            <h3>YTD</h3>
            <h4>{{(ytd[0].Total + ytd[1].Total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} Tickets - {{((ytd[1].Total/(ytd[0].Total + ytd[1].Total))*100).toString().slice(0,5)}}% Web</h4>
            <b-table striped hover dark :items="ytd"></b-table>
          </div>
        </b-col>
        <b-col  md='12'>
          <column-chart :download="true" height='250px' :data="[[month[0].Name, month[0].Total], [month[1].Name, month[1].Total],[month[2].Name, month[2].Total],[month[3].Name, month[3].Total], [month[4].Name, month[4].Total],[month[5].Name, month[5].Total],[month[6].Name, month[6].Total], [month[7].Name, month[7].Total]]"></column-chart>
        </b-col>
        <hr class="my-4" style="border-color:#ced4da; margin-left:175px;margin-right:175px;">
        <b-col lg='8' md='12' style="position:relative; overflow-y:auto;">
          <h3>User Types</h3>
          <div><div v-if="type_csr[1].Name != 'HOME'">No Data</div><div v-else>
            <h4>Web %</h4>
            <h5 style="margin-bottom: -15px;">
            Contractors: {{((type_web[0].Total/(type_web[0].Total + type_csr[0].Total))*100).toString().slice(0,5)}}% - 
            Homeowners: {{((type_web[1].Total/(type_web[1].Total + type_csr[1].Total))*100).toString().slice(0,5)}}% - 
            Members: {{((type_web[2].Total/(type_web[2].Total + type_csr[2].Total))*100).toString().slice(0,5)}}% - </h5>
            <hr class="my-4" style="border-color:#ced4da; margin-left:175px;margin-right:175px;">
            </div>
          </div><div v-if="type_csr[1].Name != 'HOME'">No Data</div><div v-else>
          <div style=" margin-top: -15px">
            <h4>Web Tickets by User Type</h4>
            <b-table striped hover dark :items="type_web" ></b-table>
          </div>
        
          <div>
            <h4>DPS Tickets by User Type</h4>
            <b-table striped hover dark :items="type_csr"></b-table>
          </div></div>
          <h4>Web Tickets</h4>
        <pie-chart :download="true" width="auto" height="450px" :data="[[type_web[0].Name, type_web[0].Total], [type_web[1].Name, type_web[1].Total],[type_web[2].Name, type_web[2].Total]]" :colors="['#42b983', '#ffc107', '#e83e8c']" />
        <h4 style='padding-top: 20px'>DPS Tickets</h4>
        <pie-chart :download="true" width="auto" height="450px" :data="[[type_csr[0].Name, type_csr[0].Total], [type_csr[1].Name, type_csr[1].Total],[type_csr[2].Name, type_csr[2].Total]]" :colors="['#42b983', '#ffc107', '#e83e8c']" />
        </b-col>
      </b-row>
      <b-row style='padding-bottom:25px'>
        <b-col lg='6' md='12' style="padding-bottom:25px">
          <div>
            <h4>DPS Leaderboard</h4>
            <b-table striped hover dark :items="dps" ></b-table>
          </div>
        </b-col>
        <b-col lg='6' md='12' style="padding-bottom:25px">
          <div>
            <h4>WEB Leaderboard</h4>
            <b-table striped hover dark :items="web"></b-table>
          </div>
        </b-col>
      </b-row>
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
      total: null,
      dps: null,
      web: null,
      ca: null,
      nv: null,
      type_csr: null,
      type_web: null,
      sat: null,
      month: null,
      months: [],
      ytd: null,
      yesterday: null,
      myDate : new Date().toISOString().slice(5,10)
    }
  },
  mounted () {
    axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.total = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.dps = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.web = response.data.Referral), axios.get('https://guarded-depths.com/reports/ca')
        .then(response => (self.ca = response.data.Referral), axios.get('https://guarded-depths.com/reports/nv')
        .then(response => (self.nv = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_csr')
        .then(response => (self.type_csr = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_web')
        .then(response => (self.type_web = response.data.Referral), axios.get('https://guarded-depths.com/reports/sat')
        .then(response => (self.sat = response.data.Referral), axios.get('https://guarded-depths.com/reports/month')
        .then(response => (self.month = response.data.Referral), axios.get('https://guarded-depths.com/reports/ytd')
        .then(response => (self.ytd = response.data.Referral), axios.get('https://guarded-depths.com/reports/yesterday')
        .then(response => (self.yesterday = response.data.Referral))))))))))));
    var self = this;
    setInterval(function(){
      axios.get('https://guarded-depths.com/reports/total')
        .then(response => (self.total = response.data.Referral), axios.get('https://guarded-depths.com/reports/dps')
        .then(response => (self.dps = response.data.Referral), axios.get('https://guarded-depths.com/reports/web')
        .then(response => (self.web = response.data.Referral), axios.get('https://guarded-depths.com/reports/ca')
        .then(response => (self.ca = response.data.Referral), axios.get('https://guarded-depths.com/reports/nv')
        .then(response => (self.nv = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_csr')
        .then(response => (self.type_csr = response.data.Referral), axios.get('https://guarded-depths.com/reports/type_web')
        .then(response => (self.type_web = response.data.Referral), axios.get('https://guarded-depths.com/reports/sat')
        .then(response => (self.sat = response.data.Referral), axios.get('https://guarded-depths.com/reports/month')
        .then(response => (self.month = response.data.Referral), axios.get('https://guarded-depths.com/reports/ytd')
        .then(response => (self.ytd = response.data.Referral), axios.get('https://guarded-depths.com/reports/yesterday')
        .then(response => (self.yesterday = response.data.Referral))))))))))));
    }, 30000);
      
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
.orientation {
  width: 400px /* normal width */
}
@media print {
  .ortientation {
    width: 100% /* print width */
  }
}
</style>
