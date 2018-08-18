<template>
  <v-app>
  <v-content :style="'border-' + (place === 'right' ? 'left' : 'right') + ': 2px solid black; height: 100px'">
    <v-layout align-center justify-center column fill-height>
      <div class="display-1">{{ username }}</div>
      <v-card>
        <textarea
          @change="sendChanges"
          style="height: 45vw; width: 30vw; resize: none"
          v-model="snippetCode"
        />
      </v-card>
      <v-btn
        v-if="forDev"
        color="success"
        @click="submitCode"
      >
        check code
      </v-btn>
    </v-layout>

  </v-content>
  </v-app>
</template>

<script>
  import io from 'socket.io-client'

  export default {
    name: "SnippetEditor",
    props: ['place', 'username', 'snippetCode', 'forDev'],
    data() {
      return{
        socket: io(process.env.BASE_URL)
      }
    },
    mounted(){
    },
    methods:{
      sendChanges() {
        if (this.forDev) {
          this.socket.emit('Test', {
            user: this.username,
            snippet: this.snippetCode
          })
        }
      },
      submitCode(){
        this.socket.emit('Submit', {
          user: this.username,
          submit: true
        })
      }
    }
  }
</script>

<style scoped>

</style>
