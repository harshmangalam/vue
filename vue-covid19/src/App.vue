<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
       <v-toolbar-title>COVID-19</v-toolbar-title>

    </v-app-bar>
      <v-content app>
        <v-container>
            <h1 class="my-3 text-center">COVID-19 Track Detail</h1>
        <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app>
          <v-row justify="center">
              <v-col>
                 <BottomNav />
              </v-col>
          </v-row>
      </v-footer>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav"
export default {
  components:{
    BottomNav
  },

mounted(){
  this.$store.dispatch("fetchData")

}
};
</script>
