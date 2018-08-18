<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-space-between row fill-height>
        <v-flex md4>
          <snippet-editor
            :place="'left'"
            :username="'SomeUser'"
            :snippetCode="snippetCode"
            :forDev="false"
          />
        </v-flex>
        <v-flex md4>
          <fighter-screen/>
        </v-flex>
        <v-flex md4>
          <snippet-editor
            :place="'right'"
            :username="'Dima'"
            :snippetCode="snippetCode"
            :forDev="false"
          />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import SnippetEditor from './SnippetEditor'
  import FighterScreen from './FighterScreen'
  import axios from 'axios'

  export default {
    name: "ShowScreen",
    components: { SnippetEditor, FighterScreen },
    data () {
      return{
        snippetCode: '',
        timeToSolve: null
      }
    },
    methods: {
      getSnippet(){
        axios.get(process.env.BASE_URL + '/snippets/next/').then((response) => {
          console.log(response)
          this.snippetCode = response.data['code']
          this.$store.state.snippet.code = this.snippetCode
          this.timeToSolve = response.data['time_to_solve']
          this.$store.state.snippet.timeToSolve = this.timeToSolve
          this.$store.state.snippet.new = true
        })
      }
    }
  }
</script>

<style scoped>

</style>
