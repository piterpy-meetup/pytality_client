<template>
  <v-app>
    <v-layout
      align-center
      justify-center
    >
      <countdown
        class="display-3"
        :auto-start="false"
        @countdownend="HandleCountdownEnded"
        ref="countdown"
        :time="time*1000"
      >
        <template slot-scope="props">{{ props.seconds }}</template>
      </countdown>
      <v-btn
        @click="StartTimer(5)"
      >
       Start
      </v-btn>
    </v-layout>
  </v-app>
</template>

<script>
  import VueCountdown from '@xkeshi/vue-countdown'
    export default {
        name: "TimerField",
        components: {
          'countdown': VueCountdown
        },
        data () {
          return{
            time: 0
          }
        },
        methods: {
          StartTimer(resolvetime) {
            this.time = resolvetime;
            this.$refs.countdown.start();
          },
          HandleCountdownEnded() {
            alert('Time is up!');
          }
        }

    }

</script>

<style scoped>

</style>
