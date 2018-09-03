<template>
  <div class="infoSeciton">
    <div class="infoWrapper" v-show="showIntro">
      <div class="info" ref="info">
        <img :src="IntroData[IntroIndex].img">
        <p><br></p>
        <p v-for="item in IntroData[IntroIndex].text" :key="item">{{item}}</p>
        <p><br></p>
        <div class="next_stage" @click="ClickToCloseIntro"><img :src="imgBack" alt="回到上一頁" title="回到上一頁"></div>
      </div>
    </div>
  </div>
</template>

<script>
import imgBack from '@/assets/Back.png'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'QuizIntro',
  data () {
    return {
      imgBack: imgBack
    }
  },
  computed: {
    ...mapGetters([
      'showIntro',
      'IntroIndex',
      'IntroData'
    ])
  },
  methods: {
    ...mapActions([
      'ClickToCloseIntro'
    ])
  },
  updated () {
    this.$refs.info.scrollTop = 0
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.infoSection{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.infoWrapper{
  position: absolute;
  z-index: 300;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#000, .7);
  padding: 15px;
}
.info{
  position: relative;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  max-width: 880px;
  margin: 0 auto;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: auto;
  padding: 12px;
  animation: fadeIn 444ms ease-in-out both;
  @media screen and (min-width: 1025px) {
    padding: 35px;
  }
  h2{
    margin: 0;
  }
  img{
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  p{
    color: #182987;
    // color: #fff;
    max-width: 500px;
    text-align: left;
    margin: 0 auto;
  }
}
.next_stage{
  width: 150px;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  img{
    width: 100%;
  }
}
@keyframes fadeIn {
  0%{
    opacity: 0;
    transform: scale(0);
    transform-origin: center;
  }
  100%{
    opacity: 1;
    transform: scale(1)
  }
}
</style>
