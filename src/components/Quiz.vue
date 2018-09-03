<template>
  <!-- 這是關卡內的Modal(lightbox) -->
  <div class="TheQuiz" :style="{zIndex: raiseZ_index}">
    <div class="circle_animation" :style="{height: height + 'px', width: width + 'px',transform: 'scale(' + QuizScaleRatio + ')'}" @transitionend.stop="handle_transtionend"></div>
    <div class="quiz_section" :style="{opacity: show_quiz}">
      <div class="question_section">
        <div class="quest">
          <img :src="QuizData[handle_stage].question">
        </div>
      </div>
      <ul class="answer_section">
        <li v-for="(item, index) in QuizData[handle_stage].selection" :key="item.choice" @click="handle_click_answer(index, item.toIntro)">
          <h2>{{item.choice}}</h2>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="result_wrapper" v-show="isInfoShow">
      <div class="result" ref="result">
        <img :src="IntroData[handle_introIndex].img" alt="">
        <img class="goodjob" :src="imgGood">
        <p><br></p>
        <p v-for="(item) in IntroData[handle_introIndex].text" :key="item.choice">{{item}}</p>
        <p><br></p>
        <div class="next_stage" @click="handle_click_next">
          <img v-show="isCorrect" :src="imgAnswer">
          <img v-show="!isCorrect" :src="imgNotAnswer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgGood from '@/assets/goodjob.png'
import imgAnswer from '@/assets/A1-6.png'
import imgNotAnswer from '@/assets/A1-5.png'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Quiz',
  data () {
    return {
      imgGood: imgGood,
      imgAnswer: imgAnswer,
      imgNotAnswer: imgNotAnswer,
      height: window.innerHeight * 2,
      width: window.innerHeight * 2,
      raiseZ_index: 0,
      show_quiz: 0,
      isInfoShow: false,
      isCorrect: false,
      handle_introIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'QuizScaleRatio',
      'QuizData',
      'stageIndex',
      'IntroData',
      'InfoData'
    ]),
    handle_stage () {
      if (this.stageIndex - 1 < 0) {
        return 0
      } else {
        if (this.stageIndex === this.InfoData.length + 1) {
          return 0
        } else {
          return this.stageIndex - 1
        }
      }
    }
  },
  watch: {
    QuizScaleRatio (val) {
      console.log(val)
      if (val === 1) {
        this.raiseZ_index = 100
        this.show_quiz = 1
      }
    }
  },
  methods: {
    ...mapActions([
      'ClickToCloseQuiz',
      'HandleCong',
      'CorrectToShowNext'
    ]),
    handle_click_answer (index, forIntro) {
      this.isInfoShow = true
      this.handle_introIndex = forIntro
      if (index === this.QuizData[this.handle_stage].answer) {
        this.isCorrect = true
        this.handle_click_next()
      } else {
        this.isCorrect = false
      }
    },
    handle_click_next () {
      if (this.isCorrect) {
        this.isInfoShow = false
        this.show_quiz = 0
        this.ClickToCloseQuiz()
        this.CorrectToShowNext()
      } else {
        this.isInfoShow = false
      }
    },
    handle_transtionend () {
      if (this.QuizScaleRatio !== 1) {
        this.raiseZ_index = 0
        this.HandleCong()
      }
    }
  },
  created () {
    if (window.innerWidth >= 1024) {
      this.height = window.innerWidth * 2
      this.width = window.innerWidth * 2
    }
  },
  updated () {
    this.$refs.result.scrollTop = 0
  },
  mounted () {
    console.log(this.QuizScaleRatio)
  }
}
</script>

<style lang="scss" scoped>
.TheQuiz{
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  padding: 25px 12px;
}
.circle_animation{
  position: absolute;
  z-index: 0;
  top: -50vh;
  left: -72.5vh;
  width: 200vh;
  height: 200vh;
  border-radius: 50%;
  transition: transform 888ms ease-in-out;
  background-color: #139DDE;
  @media screen and (min-width: 1024px) {
    top: -75vw;
    left: -50vw;
  }
}
.quiz_section{
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: opacity 444ms;
  max-width: 880px;
  margin: 0 auto;
}
.question_section{
  flex: 1;
  position: relative;
  overflow: hidden;
}
.spinner{
  width: 100%;
  height: 100%;
  transform: translate(0, -100%);
  transition: transform 444ms ease-in-out;
}
.quest{
  width: 100%;
  height: 100%;
  padding: 0 12px;
  img{
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
}
.answer_section{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  width: 100%;
  padding: 0;
  margin: 0;
  li{
    list-style: none;
    width: 45%;
    background-color: #fff;
    border-radius: 15px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
    margin-top: 10px;
    cursor: pointer;
    @media screen and (min-width: 1025px) {
      padding: 15px;
    }
    img{
      width: 100%;
    }
    h2{
      font-weight: bold;
      margin-top: 0;
      color: #F7B52C;
    }
    p{
      font-weight: bold;
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
      text-align: justify;
    }
  }
}
.result_wrapper{
  position: absolute;
  z-index: 300;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
  background-color: rgba(#000, .7);
  padding: 15px;
  animation: fadeIn 444ms;
  @media screen and (min-width: 1025px) {
    padding: 35px;
  }
}
.result{
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 880px;
  padding: 15px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: auto;
  @media screen and (min-width: 1025px) {
    padding: 35px;
  }
  h2{
    margin: 0;
  }
  img{
    display: block;
    width: 66%;
    max-width: 500px;
    margin: 0 auto;
  }
  p{
    color: #182987;
    margin: 0 auto;
    max-width: 500px;
    text-align: left;
  }
}
.goodjob{
  display: block;
  margin: 0 auto;
  width: 50% !important;
  @media screen and (min-width: 1024px) {
    width: 25% !important;
  }
}
.next_stage{
  width: 160px;
  margin: 0 auto;
  color: #fff;
  cursor: pointer;
  img{
    width: 160px;
  }
}
@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
