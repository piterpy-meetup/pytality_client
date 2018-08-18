<template>
  <v-app>
  <v-content :style="'border-' + (place === 'right' ? 'left' : 'right') + ': 2px solid black; height: 100px'">
    <v-layout align-center justify-center column fill-height>
      <div class="display-1">{{ username }}</div>
      <v-card>
        <textarea
          style="height: 45vw; width: 30vw; resize: none"
          v-model="snippetCode"
        />
      </v-card>
      <v-btn color="success">
        check code
      </v-btn>
    </v-layout>

  </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "SnippetEditor",
    props: ['place', 'username'],
    data() {
      return{
        snippetCode: 'asdf\n    sdf',
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>

</style>
