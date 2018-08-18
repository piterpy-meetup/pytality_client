<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-space-between row fill-height>
        <v-flex md4>
          <snippet-editor
            :place="'left'"
            :username="'SomeUser'"
            :snippetCode="snippetCode"
          />
        </v-flex>
        <v-flex md4>

        </v-flex>
        <v-flex md4>
          <snippet-editor
            :place="'right'"
            :username="'Dima'"
            :snippetCode="snippetCode"
          />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import SnippetEditor from './SnippetEditor'
  import axios from 'axios'

  export default {
    name: "ShowScreen",
    components: { SnippetEditor },
    data () {
      return{
        snippetCode: '',
        timeToSolve: null
      }
    },
    methods: {
      getSnippet(){
        axios.get(proccess.env.BASE_URL + '/snippets/next/').then((response) => {
          console.log(response)
          this.snippetCode = response.data['code']
          this.timeToSolve = response.data['time_to_solve']
        })
      }
    }
  }
</script>

<style scoped>

</style>
