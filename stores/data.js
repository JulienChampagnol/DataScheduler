export const useDataStore = defineStore('data', {
  state: () => ({ schedules: [] }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    add_new_schedule (schedule) {

    },
    increment () {
      this.count++
    },
  },
})