<template>
  <div class="flex justify-evenly items-center h-92 flex-col">
    <h1 class="my-8">{{ welcomeMessage }}</h1>
    <div class="col-span-full w-1/2">
      <div>
        <button
          @click="clocker"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {{ buttonMessage }}
        </button>
      </div>
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
</template>
<script>
import { generateClient } from "aws-amplify/api";
import { createTimeTracker } from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      timeRecord: "",
      description: "",
      isClockedIn: false,
    };
  },

  computed: {
    welcomeMessage() {
      if (this.timeRecord) {
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
  },

  methods: {
    async clockIn() {
      this.timeRecord = new Date().toUTCString();
      this.isClockedIn = true;
      console.log({ clockInTime: this.timeRecord, desc: this.description });

      const client = generateClient();

      const timeRecord = {
        id: uuidv4(),
        name: "test name",
        description: "around us",
        first_break: new Date().toUTCString(),
      };

      try {
        await client.graphql({
          query: createTimeTracker,
          variables: {
            input: timeRecord,
          },
        });
        // const result = await API.graphql(
        //   graphqlOperation(createTimeTracker, { input: timeRecord })
        // );
        //this.data = result.data.getMyData Access data based on your query structure
      } catch (error) {
        this.error = error;
        console.error(error);
      }
    },

    clockOut() {
      this.timeRecord = null;
      this.isClockedIn = false;
      console.log("called");
    },

    clocker() {
      console.log(this.isClockedIn);
      if (this.isClockedIn) {
        this.clockOut();
      } else {
        this.clockIn();
      }
    },
  },
};
</script>
