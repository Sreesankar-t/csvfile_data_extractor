

export const state = () => ({
  content: [],
  loader: true
})

export const getters = {
  data (state) {
    return state.content
  },
  loader (state) {
    return state.loader
  }
}

export const mutations = {
  setData (state, payload) {
    state.content = payload
    console.log(state.content, 'data get in mutations')
  },
  setLoader (state, payload) {
    state.loader = payload
  }
}

export const actions = {
 
}
