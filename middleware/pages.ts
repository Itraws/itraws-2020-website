export default function(context) {
  try {
    context.store.commit('pageAnimation/UPDATE_PAGE', context.route.name)
  } catch (err) {
    console.log({ err })
  }
}
