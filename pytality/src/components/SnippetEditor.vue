<template>
  <v-app>
  <v-content :style="'border-' + (place === 'right' ? 'left' : 'right') + ': 2px solid black; height: 100px'">
    <v-layout align-center justify-center column fill-height>

      <v-card>
        <textarea
          style="height: 50vw; width: 30vw; resize: none"
          v-model="snippetCode"
        />
      </v-card>
      <v-btn color="success">
        asdfasdf
      </v-btn>
    </v-layout>

  </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "SnippetEditor",
    props: ['place'],
    data() {
      return{
        snippetCode: 'asdf\n    sdf',
      }
    }
  }
</script>

<style scoped>

</style>
