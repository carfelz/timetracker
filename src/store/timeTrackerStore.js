import { defineStore } from "pinia";

export const useTimeTrackerStore = defineStore("timeTrackerStore", {
  state: () => ({
    record: null,
  }),

  actions: {
    setRecord(record) {
      this.$patch({
        record,
      });
    },
  },

  getters: {
    getCurrentRecord: ({ record }) => ({ ...record }),
    hasClockedIn: ({ record }) => !!record.clockIn,
    hasTakenFirstBreak: ({ record }) => record.first_break,
  },
  persist: true,
});
