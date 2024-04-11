import * as d3 from 'd3'

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
  async handleFileChange ({ commit }, event) {
    const file = event.target.files[0]
    if (!file) return

    commit('setLoader', true)

    try {
      const reader = new FileReader()
      reader.onload = async e => {
        const text = e.target.result
        const parsedData = d3.csvParse(text)
        commit('setData', parsedData)
        commit('setLoader', false)
        console.log(parsedData)
      }
      reader.readAsText(file)
    } catch (error) {
      console.error('Error reading CSV:', error)
    }
  }
}
