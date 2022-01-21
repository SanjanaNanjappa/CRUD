export const state = () => ({
    userId: null,
    email: null
})

export const mutations = {
    updateUserid(state, id) {
      state.userId = id
    },
    updateemail(state, email) {
      state.email = email
      console.log('in session', state.email)
    }
}