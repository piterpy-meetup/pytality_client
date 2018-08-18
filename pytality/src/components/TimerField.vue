<template>
  <v-app>
    <v-layout
      align-center
      justify-center
    >
      <countdown
        class="display-3"
        :auto-start="false"
        @countdownend="handleCountdownEnded"
        ref="countdown"
        :time="time*1000"
      >
        <template slot-scope="props">{{ props.seconds }}</template>
      </countdown>
      <v-btn
        @click="starttimer(5)"
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
          starttimer(resolvetime) {
            this.time = resolvetime;
            this.$refs.countdown.start();
          },
          handleCountdownEnded() {
            alert('Time is up!');
          }
        }

    }

</script>

<style scoped>

</style>
