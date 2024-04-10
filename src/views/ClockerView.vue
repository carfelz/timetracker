<template>
  <div class="flex justify-evenly items-center h-92 flex-col">
    <div class="lg:w-1/4 w-1/2">
      <h1 class="my-8">{{ welcomeMessage }}</h1>
      <div class="col-span-full">
        <button
          @click="clocker"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {{ buttonMessage }}
        </button>
        <div class="mt-2">
          <textarea
            id="about"
            v-model="description"
            name="about"
            rows="3"
            class="block w-full rounded-md border-0 p-1.5 text-gray-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <p class="mt-3 text-sm leading-6 text-gray-200">
          Anything you want to add?
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import { useUserStore } from "@/store/userStore";
import { useTimeTrackerStore } from "@/store/timeTrackerStore";
import { createRecord, updateRecord, closeRecord } from "@/helpers/requester";

export default {
  data() {
    return {
      timeRecord: "",
      description: "",
    };
  },

  computed: {
    welcomeMessage() {
      if (this.isClockedIn) {
        return "Have a great day";
      }

      return "Hello, get yourself started";
    },

    buttonMessage() {
      if (this.isClockedIn) {
        return "Clock out";
      }
      return "Clock in";
    },

    isClockedIn() {
      const { isClockedIn } = useTimeTrackerStore();
      return isClockedIn;
    },
  },

  methods: {
    async clockIn() {
      const { setRecord } = useTimeTrackerStore();
      const currentUser = useUserStore().getCurrentUser;
      const timeRecord = {
        id: uuidv4(),
        userID: currentUser.userId,
        name: currentUser.name,
        description: this.description,
        clockIn: new Date().toUTCString(),
      };

      createRecord(timeRecord, setRecord);
    },

    clockOut() {
      const { clockOut } = useTimeTrackerStore();
      const { getCurrentRecord } = useTimeTrackerStore();
      const currentUser = useUserStore().getCurrentUser;
      const timeRecord = {
        id: getCurrentRecord.id,
        clockOut: new Date().toUTCString(),
      };

      closeRecord(timeRecord, clockOut);
    },

    clocker() {
      if (this.isClockedIn) {
        this.clockOut();
      } else {
        this.clockIn();
      }
    },
  },
};
</script>
