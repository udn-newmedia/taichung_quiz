// 從 <Anchor> 傳物件近來vuex
// anchorItem = {
//   "id": this.setId,
//   "title": this.setProps('title'),
//   "isActive": true
// }
import _throttle from 'lodash.throttle'
export const addAnchor = function ({ commit }, anchorItem) {
  commit('setAnchorMenu', anchorItem)
}
export const updateAnchor = function ({ commit }, anchorItem) {
  commit('updateAnchorMenuItem', anchorItem)
}
export const resetAnchorActive = ({ commit }) => {
  commit('resetAnchorActive')
}
export const setAnchorActive = ({ commit }, index) => {
  commit('setAnchorActive', index)
}
export const ClickToShowQuiz = ({ commit }) => {
  console.log('vuex clickToShowQuiz')
  commit('showQuiz')
}
export const ClickToCloseQuiz = ({ commit }) => {
  commit('closeQuiz')
}
export const ClickToNextStage = _throttle(({ commit, state }) => {
  if (state.stageIndex < state.InfoData.length + 1) {
    commit('nextStage')
  }
}, 2000, {leading: true, trailing: false})
export const ClickToShowIntro = ({ commit, state }, dataIndex) => {
  console.log(dataIndex)
  commit('showIntro')
  commit('setIntroIndex', dataIndex)
}
export const ClickToCloseIntro = ({ commit, state }) => {
  commit('closeIntro')
}
export const HandleCong = ({ commit }) => {
  commit('showCong')
}
export const CorrectToShowNext = ({ commit }) => {
  commit('showNext')
}
export const TransToCloseNext = ({ commit }) => {
  commit('closeNext')
}
