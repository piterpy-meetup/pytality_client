<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-space-between row fill-height>
        <v-flex md4>
          <snippet-editor
            :place="'left'"
          />
        </v-flex>
        <v-flex md4>

        </v-flex>
        <v-flex md4>
          <snippet-editor
            :place="'right'"
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
