<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-space-between row fill-height>
        <v-flex md4>
          <snippet-editor
            :place="'left'"
            :username="'SomeUser'"
            :wins="1"
          />
        </v-flex>
        <v-flex md4>

        </v-flex>
        <v-flex md4>
          <snippet-editor
            :place="'right'"
            :username="'Dima'"
            :wins="2"
          />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import SnippetEditor from './SnippetEditor'

  export default {
    name: "ShowScreen",
    components: { SnippetEditor }
  }
</script>

<style scoped>

</style>
