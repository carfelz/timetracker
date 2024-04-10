import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null,
    sellers: [],
  }),

  actions: {
    async setUser(user) {
      this.user = user;
    },

    logOut() {
      this.user = null;
    },
  },

  getters: {
    isUserSignedUp: (state) => !!state.user?.userId,
    getAllSellers: (state) => state.sellers && state.sellers,
    getSeller: (state) => (sellerId) =>
      state.sellers && state.sellers[sellerId],
  },
  persist: true,
});
