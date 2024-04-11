<template>
  <div>somthing for now</div>
  <TrackerTable :data="data" />
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
