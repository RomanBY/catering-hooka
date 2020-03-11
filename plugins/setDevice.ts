// @ts-ignore
export default function ({ app }) {
  if (process.client) {
    app.store.commit('setDevice', app.context.isMobileOrTablet ? 'mobile' : 'desktop')
  }
}
