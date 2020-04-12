<template>
  <div>
    <div>
      <v-form>
      <v-row>
        <v-col cols="12" xs="12" sm="4" offset-sm="3" md="4" offset-md="3">
          <v-select
          v-model="select"
              :items="countries"
              label="Select Country"
            ></v-select>

        </v-col>
        <v-col cols="12" xs="12" sm="2" md="2">
          <v-btn :disabled="loading"  @click="searchCountry"><div v-if="loading">Searching...</div><div v-else>Search</div></v-btn>
        </v-col>
      </v-row>
      </v-form>
    </div>
    <div v-if="countryData && countryData.confirmed">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4">
          <Card label="Confirmed Cases" :value="countryData.confirmed.value" />
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="4">
          <Card label="Recovered Cases" :value="countryData.recovered.value" />

        </v-col>

        <v-col cols="12" xs="12" sm="6" md="4">
          <Card label="Deaths Cases" :value="countryData.deaths.value" />

        </v-col>
      </v-row>
    </div>

  </div>
</template>
<script>
import {mapState} from "vuex"
import Card from "../components/Card"

  export default {
    components:{
      Card,
    },
    data: () => ({
       select:"",
       loading:false,
     }),
     mounted(){
         this.$store.dispatch("fetchCountry")
     },
     computed:{
       ...mapState(["country","countryData"]),
       countries(){
         return this.country.map(c=>c.name)
       },
     },
    methods: {
    async  searchCountry () {
        this.loading = true
        await this.$store.dispatch("countryDetail",this.select)
        this.loading = false
      },
    },
  }
</script>
