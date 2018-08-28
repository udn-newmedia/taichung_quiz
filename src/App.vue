<template>
  <div id="app">
    <Taichung></Taichung>
    <Quiz></Quiz>
    <QuizIntro></QuizIntro>
  </div>
</template>

<script>
import Taichung from '@/components/Taichung'
import Quiz from '@/components/Quiz'
import QuizIntro from '@/components/QuizIntro'
export default {
  name: 'App',
  components: {
    Taichung,
    Quiz,
    QuizIntro
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
}
</style>
