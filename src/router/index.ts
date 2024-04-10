import { createMemoryHistory, createRouter } from "vue-router";
import { useTimeTrackerStore } from "../store/timeTrackerStore";
import { useUserStore } from "../store/userStore";

import ClockerView from "../views/ClockerView.vue";
import BreaksView from "../views/BreaksView.vue";
import AllTracks from "../views/AllTracks.vue";

const routes = [
  { path: "/", component: ClockerView },
  {
    path: "/breaks",
    component: BreaksView,
    beforeEnter: () => {
      if (!useTimeTrackerStore().isClockedIn) {
        return false;
      }
    },
  },
  {
    path: "/allTracks",
    component: AllTracks,
    beforeEnter: () => {
      if (!useUserStore().isAdmin) return false;
    },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
