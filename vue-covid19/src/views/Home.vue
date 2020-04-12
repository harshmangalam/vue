<template>
<div>
  <v-row>
    <v-col cols="12" xs="12" sm="6" md="4" lg="4">
      <Card label="Confirmed" :value="data.confirmed.value" />
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="4" lg="4">
        <Card label="Recovered" :value="data.recovered.value" />
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="4" lg="4">
      <Card label="Deaths" :value="data.deaths.value" />
    </v-col>
  </v-row>

</div>
</template>

<script>
import Card from "../components/Card"
import {mapState} from "vuex"
export default {
  components:{
    Card
  },
  computed:{
    ...mapState(["data"])
  }
}
</script>
