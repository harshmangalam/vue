<template>
      <v-sheet elevation="7" class="mx-auto">
        <v-container>
        <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="my-3 text-center "><h1>{{label}}</h1></v-list-item-title>
              <v-list-item-title class="text-center"><h2>{{value}}</h2></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-container>
      </v-sheet>
</template>

<script>
  export default {
    props:["label","value"],
  }
</script>
