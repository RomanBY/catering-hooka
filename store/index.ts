
export const state = () => {
  return {
    device: ''
  }
}

export const mutations = {
  setDevice (state: { device: string }, device: string) {
    state.device = device
  }
}

export const actions = {
  // @ts-ignore
  nuxtServerInit ({ commit }, ctx) {
    commit('setDevice', ctx.isMobileOrTablet ? 'mobile' : 'desktop')
  }
}
