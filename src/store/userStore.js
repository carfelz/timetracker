import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null,
  }),

  actions: {
    async setUser(user) {
      this.$patch({
        user,
      });
    },

    logOut() {
      this.user = null;
    },
  },

  getters: {
    isUserSignedUp: (state) => !!state.user?.userId,
    getCurrentUser: (state) => ({ ...state.user }),
    isAdmin: (state) => state.user.isAdmin === "true",
  },
  persist: true,
});
