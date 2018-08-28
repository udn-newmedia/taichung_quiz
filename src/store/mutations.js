export const setAnchorMenu = (state, data) => {
  state.anchorMenu.push(data)
}
export const updateAnchorMenuItem = (state, data) => {
  let tIndex = state.anchorMenu.findIndex((element) => {
    return element.id === data.id
  })
  state.anchorMenu[tIndex] = data
}
export const resetAnchorActive = (state) => {
  for (let i = 0; i < state.anchorMenu.length; i++) {
    state.anchorMenu[i].isActive = false
  }
}
export const setAnchorActive = (state, index) => {
  state.anchorMenu[index].isActive = true
}
export const showQuiz = (state) => {
  state.QuizScaleRatio = 1
}
export const closeQuiz = (state) => {
  state.QuizScaleRatio = 0
}
export const nextStage = (state) => {
  state.stageIndex++
}
export const showIntro = (state) => {
  state.showIntro = true
}
export const closeIntro = state => {
  state.showIntro = false
}
export const setIntroIndex = (state, index) => {
  console.log(index)
  state.IntroIndex = index
}
export const showCong = (state) => {
  state.congShow = true
  setTimeout(() => {
    state.congShow = false
  }, 888)
}
export const showNext = (state) => {
  state.showNext = true
}
export const closeNext = (state) => {
  state.showNext = false
}
