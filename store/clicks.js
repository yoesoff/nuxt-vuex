export const state = () => ({
    saveCounter: 0,
    removeCounter: 0
})
  
export const mutations = {
    saveIncrement (state) {
        state.saveCounter++
    },
    removeIncrement (state) {
        state.removeCounter++
    }
}