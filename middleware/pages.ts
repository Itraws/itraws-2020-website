export default function(context: any) {
  try {
    context.store.commit('pageAnimation/UPDATE_PAGE', context.route.name)
  } catch (err) {
    console.log({ err })
    context.store.dispatch('modal/setError', err)
  }
}
