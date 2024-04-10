import { defineStore } from "pinia";

export const useTimeTrackerStore = defineStore("timeTrackerStore", {
  state: () => ({
    record: null,
    _isClockedIn: false,
    goneToFirstBreak: false,
    goneToSecBreack: false,
    goneToLunch: false,
    backFromFirstBreak: false,
    backFromSecBreack: false,
    backFromLunch: false,
  }),

  actions: {
    setRecord({
      id,
      userID,
      name,
      description,
      clockIn,
      clockOut,
      first_break_out,
      first_break_in,
      secound_break_out,
      secound_break_in,
      lunch_in,
      lunch_out,
    }) {
      this.$patch({
        record: {
          id,
          userID,
          name,
          description,
          clockIn,
          clockOut,
          first_break_out,
          first_break_in,
          secound_break_out,
          secound_break_in,
          lunch_in,
          lunch_out,
        },
      });
      this._isClockedIn = true;
    },

    goOnBreak(type, record) {
      switch (type) {
        case "gone_first_break":
          this.$patch({
            record: record,
            goneToFirstBreak: true,
          });
          break;
        case "gone_sec_break":
          this.$patch({
            record: record,
            goneToSecBreack: true,
          });
          break;
        case "gone_lunch":
          this.$patch({
            record: record,
            goneToLunch: true,
          });
          break;
        case "back_from_first_break":
          console.log("getting here?");
          this.$patch({
            record: record,
            backFromFirstBreak: true,
          });
          break;
        case "back_from_sec_break":
          this.$patch({
            record: record,
            backFromSecBreack: true,
          });
          break;
        case "back_from_lunch":
          this.$patch({
            record: record,
            backFromLunch: true,
          });
          break;
      }
    },

    clockOut() {
      this.$reset();
    },
  },

  getters: {
    getCurrentRecord: ({ record }) => ({ ...record }),
    isClockedIn: (state) => state._isClockedIn,
    isGoneFirstBreak: (state) => state.goneToFirstBreak,
    isGoneSecoundBreak: (state) => state.goneToSecBreack,
    isGoneLunch: (state) => state.goneToLunch,
    isBackFirstBreak: (state) => state.backFromFirstBreak,
    isBackSecBreak: (state) => state.backFromSecBreack,
    isBackLunch: (state) => state.backFromLunch,
    isOutForBreak: (state) => {
      return (
        (state.goneToFirstBreak && !state.backFromFirstBreak) ||
        (state.goneToFirstBreak &&
          state.backFromFirstBreak &&
          state.goneToSecBreack &&
          !state.isBackSecBreak)
      );
    },
  },
  persist: true,
});
