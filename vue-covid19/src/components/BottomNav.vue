<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          dark
          small
          color="red"
          v-on="on"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
          :to="tile.to"
        >
          <v-list-item-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
     sheet: false,
     tiles: [
       { img: 'keep.png', title: 'Search Results By Country',to:"/country"},
       { img: 'keep.png', title: 'Home',to:"/"},

     ],
   }),
  }
</script>
