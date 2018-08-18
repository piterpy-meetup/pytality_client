<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-space-between row fill-height>
        <v-flex md6>
          <snippet-editor
            :place="'left'"
            :username="'SomeUser'"
            :snippetCode="snippetCode"
            :forDev="true"
          />
        </v-flex>
        <v-flex md6>
          <fighter-screen/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import SnippetEditor from './SnippetEditor'
  import FighterScreen from './FighterScreen'

  export default {
    name: "DeveloperScreen",
    components: { SnippetEditor, FighterScreen },
    data () {
      return{
        snippetCode: ''
      }
    },
    watch: {
      'store.state.snippet.new': function () {
        if (this.$store.state.snippet.new === true) {
          this.snippetCode = this.$store.state.snippet.code
        }
        else {
          this.snippetCode = ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
