<template>
  <div class="flex justify-evenly items-center h-92 flex-col">
    <h1 class="my-8">Time Tracker Report</h1>
    <TrackerTable :data="data" />
  </div>
</template>
<script>
import TrackerTable from "../components/TrackerTable.vue";
import { getAllTracks } from "@/helpers/requester";
export default {
  data() {
    return {
      data: [],
    };
  },
  components: {
    TrackerTable,
  },
  created() {
    this.getData();
  },

  methods: {
    async getData() {
      this.data = await getAllTracks();
    },
  },
};
</script>
