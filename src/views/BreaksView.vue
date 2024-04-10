<template>
  <div class="flex justify-evenly items-center h-92 flex-col">
    <div class="col-span-full sm:w-1/4">
      <div class="flex my-4">
        <button
          @click="gotoBreak"
          :class="[
            isOutForBreack || tookBothBreaks
              ? 'opacity-50 cursor-not-allowed'
              : '',
            'flex w-full justify-center rounded-md mr-1 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
          ]">
          Go to break
        </button>
        <button
          v-if="isOutForBreack"
          @click="backfromBreak"
          :class="[
            tookBothBreaks ? 'opacity-50 cursor-not-allowed' : '',
            'flex w-full justify-center rounded-md mr-1 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
          ]">
          Back from break
        </button>
      </div>

      <div class="flex my-4">
        <button
          @click="lunch"
          :class="[
            isOutForBreack ||
            (tookLunch && !backFromLunch) ||
            (tookLunch && backFromLunch)
              ? 'opacity-50 cursor-not-allowed'
              : '',
            'flex w-full justify-center rounded-md mr-1 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
          ]">
          Go on lunch
        </button>

        <button
          @click="lunch"
          v-if="!backFromLunchBtn"
          class="flex w-full justify-center rounded-md mr-1 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Back from lunch
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useTimeTrackerStore } from "@/store/timeTrackerStore";
import { createRecord, updateRecord, closeRecord } from "@/helpers/requester";

export default {
  methods: {
    gotoBreak() {
      if (this.goToBreakButtonDisabled || this.tookBothBreaks) return;
      const { id } = useTimeTrackerStore().record;
      if (!this.tookFirstBreak) {
        updateRecord(
          { id, first_break_out: new Date().toUTCString() },
          this.handleGone
        );
      } else {
        updateRecord(
          { id, secound_break_out: new Date().toUTCString() },
          this.handleGone
        );
      }
    },

    backfromBreak() {
      const { id } = useTimeTrackerStore().record;
      if (this.backFromFirstBreak) {
        updateRecord(
          { id, first_break_in: new Date().toUTCString() },
          this.handleBack
        );
      } else {
        updateRecord(
          { id, secound_break_in: new Date().toUTCString() },
          this.handleBack
        );
      }
    },

    handleBack(record) {
      const { goOnBreak } = useTimeTrackerStore();
      if (!this.backFromFirstBreak) {
        goOnBreak("back_from_first_break", record);
      } else if (this.backFromFirstBreak && this.tookSecBreak) {
        goOnBreak("back_from_sec_break", record);
      }
    },

    handleGone(record) {
      const { goOnBreak } = useTimeTrackerStore();
      if (!this.tookFirstBreak) {
        goOnBreak("gone_first_break", record);
      } else if (this.tookFirstBreak && this.backFromFirstBreak) {
        goOnBreak("gone_sec_break", record);
      }
    },

    handleLunch(record) {
      const { goOnBreak } = useTimeTrackerStore();
      if (!this.tookLunch) {
        goOnBreak("gone_lunch", record);
      } else if (this.tookLunch && !this.backFromLunch) {
        goOnBreak("back_from_lunch", record);
      }
    },

    lunch() {
      const { id } = useTimeTrackerStore().record;
      if (this.tookLunch) {
        updateRecord(
          { id, lunch_in: new Date().toUTCString() },
          this.handleLunch
        );
      } else {
        updateRecord(
          { id, lunch_out: new Date().toUTCString() },
          this.handleLunch
        );
      }
    },
  },
  computed: {
    backFromLunchBtn() {
      if (this.tookLunch && this.backFromLunch) {
        return true;
      } else if (!this.tookLunch && !this.backFromLunch) {
        return true;
      }

      return false;
    },
    isOutForBreack() {
      return useTimeTrackerStore().isOutForBreak;
    },
    tookFirstBreak() {
      return useTimeTrackerStore().isGoneFirstBreak;
    },
    tookSecBreak() {
      return useTimeTrackerStore().isGoneSecoundBreak;
    },
    tookLunch() {
      return useTimeTrackerStore().isGoneLunch;
    },

    backFromFirstBreak() {
      return useTimeTrackerStore().isBackFirstBreak;
    },

    backFromSecBreak() {
      return useTimeTrackerStore().isBackSecBreak;
    },
    backFromLunch() {
      return useTimeTrackerStore().isBackLunch;
    },

    goToBreakButtonDisabled() {
      if (this.backFromFirstBreak || this.backFromSecBreak) {
        return false;
      }
      if (this.tookFirstBreak || this.tookSecBreak) {
        return true;
      }

      if (
        (this.tookFirstBreak || this.tookSecBreak) &&
        (!this.backFromFirstBreak || !this.backFromSecBreak)
      ) {
        return true;
      }

      return false;
    },

    tookBothBreaks() {
      return (
        this.tookFirstBreak &&
        this.tookSecBreak &&
        this.backFromFirstBreak &&
        this.backFromSecBreak
      );
    },
  },
};
</script>
