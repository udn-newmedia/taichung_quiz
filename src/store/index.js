import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  anchorMenu: [],
  QuizData: [
    {
      key: 'quiz_1',
      question: '@/../static/Q1.png',
      selection: [
        {
          toIntro: 3,
          choice: 'A',
          text: '「減C計畫」對目標學生進行標靶式補救教學'
        },
        {
          toIntro: 4,
          choice: 'B',
          text: '學生家長直接登入校園網路報名學校課後社團'
        },
        {
          toIntro: 5,
          choice: 'C',
          text: '盤點空餘空間改造重建太平區新光國小舊校區'
        },
        {
          toIntro: 6,
          choice: 'D',
          text: '以上皆是'
        }
      ],
      answer: 3
    },
    {
      key: 'quiz_2',
      question: '@/../static/Q2.png',
      selection: [
        {
          toIntro: 6,
          choice: 'A',
          text: 'Maker夢想行動教室巡迴臺中中、小學'
        },
        {
          toIntro: 7,
          choice: 'B',
          text: '臺中高中生榮獲國際機器人(WRO)足球賽世界冠軍'
        },
        {
          toIntro: 2,
          choice: 'C',
          text: '創新學習實驗室研發Zenbo機器人AI互動創新課程'
        },
        {
          toIntro: 0,
          choice: 'D',
          text: '以上皆是'
        }
      ],
      answer: 3
    }
  ],
  IntroData: [
    {
      id: 'Bubble1',
      img: '@/../static/P1.png',
      text: [
        '臺中市教育局推動資訊教育智慧學習，放眼前瞻建置數位學習環境，已符合新課綱資訊科技教室設備基準，滿足教師運用資訊科技於輔助教學之需求，打造下世代的智慧學習環境。'
      ]
    },
    {
      id: 'Bubble2',
      img: '@/../static/P2.png',
      text: [
        '臺中市政府教育局從104年起連續3年補助共30所國中小設置創新學習實驗室，透過創新學習實驗室，研發Zenbo機器人AI互動創新課程Scratch程式語言等多元創客課程。全臺中市目前共有120所學校推動機器人教學，總超過600隻以上機器人在教育現場、進行程式設計課程。'
      ]
    },
    {
      id: 'Bubble3',
      img: '@/../static/square/P6.png',
      text: [
        '臺中市教育局力推「優質樂學、翻轉學習」偏鄉大學區制，開展學生寬廣學習天空，展現運用資訊科技發展互動及創新教學模式，顯現在英語學習領域。'
      ]
    },
    {
      id: 'Bubble4',
      img: '@/../static/square/P1.png',
      text: [
        '為輔助教師補救教學，臺中市政府教育局在國中小推廣運用台灣最大的公益線上學習平台「均一教育平台」進行教學，累計近3萬人次使用，許多教師及家長反映，學生透過均一數位線上學習課程，釐清了許多學習迷思，成績明顯提升，信心也大增。'
      ]
    },
    {
      id: 'Bubble5',
      img: '@/../static/square/P2.png',
      text: [
        '臺中市教育局協助市內各校無線網路與數位學習環境之建置，整合相關教育資源。協助家長透過網路參與學校社團報名作業，並了解學童在校作息，增加與學校聯絡的便利性。減少以往舟車勞頓一大早到校排隊報名的不便。'
      ]
    },
    {
      id: 'Bubble6',
      img: '@/../static/square/P3.png',
      text: [
        '太平區新光國小舊校區原址地處狹小巷弄內，既有道路遭到切割且校舍老舊，因此臺中市府與中央挹注經費新建校舍之餘，另將原有舊校區改造成為新世代綠能機房，提升臺中市資訊教育各項服務效能，如此一來全市師生所儲存的教學素材與學習檔案皆能確保安全。'
      ]
    },
    {
      id: 'Bubble7',
      img: '@/../static/square/P4.png',
      text: [
        '臺中市首創，特地為中小學課程打造，將師資、課程、教材移動巡迴至各校，省去中小學舟車勞頓之苦。並且落實動手做與解決問題的Maker（創客）精神。發展學生STEAM五個面向的軟硬能力，培養學生在科學(Science)、科技(Technology)、工程(Engineering)、藝術(Art)以及數學(Mathematics)五個構面的學習和發展能力。'
      ]
    },
    {
      id: 'Bubble8',
      img: '@/../static/square/P5.png',
      text: [
        '2017年臺中市衛道中學與中科實中學生共組隊伍榮獲WRO哥斯大黎加國際奧林匹亞機器人足球賽世界冠軍。可見臺中市推廣創客教育串連校際力量，鼓勵學校以製造、學習及分享三個核心精神，培養更多年輕人往智慧機器人研究'
      ]
    },
    {
      id: 'Bubble9',
      img: '@/../static/P3.png',
      text: [
        '臺中市公幼及非營利幼兒園招生E化上路。爸媽可逕至「臺中市公立幼兒園及非營利幼兒園招生資訊即時揭示系統」(http://kids.tc.edu.tw/)，查閱各階段臺中市公立幼兒園及非營利幼兒園可招生人數及登記人數即時訊息。'
      ]
    }
  ],
  InfoData: [
    {
      key: 'Info_1',
      BGimg: ['@/../static/stage_bg/2-1.png', '@/../static/stage_bg/P2-1.png'],
      bubble_1: '@/../static/bubble/2-2.png',
      bubble_2: '@/../static/bubble/2-3.png',
      bubble_3: '@/../static/bubble/2-4.png',
      infoIndex_1: 3,
      infoIndex_2: 4,
      infoIndex_3: 5
    },
    {
      key: 'Info_2',
      BGimg: ['@/../static/stage_bg/3-1.png', '@/../static/stage_bg/P3-1.png'],
      bubble_1: '@/../static/bubble/3-2.png',
      bubble_2: '@/../static/bubble/3-3.png',
      bubble_3: '@/../static/bubble/3-4.png',
      infoIndex_1: 6,
      infoIndex_2: 7,
      infoIndex_3: 2
    }
  ],
  QuizScaleRatio: 0,
  stageIndex: 0,
  showIntro: false,
  IntroIndex: 0,
  congShow: false,
  showNext: false
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
