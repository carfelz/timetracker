<template>
  <div class="relative overflow-x-auto">
    <table
      v-if="data"
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Employee Name</th>
          <th scope="col" class="px-6 py-3">Clock in</th>
          <th scope="col" class="px-6 py-3">Luch (from)</th>
          <th scope="col" class="px-6 py-3">Lunch (to)</th>
          <th scope="col" class="px-6 py-3">First Break (from)</th>
          <th scope="col" class="px-6 py-3">First Break (to)</th>
          <th scope="col" class="px-6 py-3">Second Break (from)</th>
          <th scope="col" class="px-6 py-3">Second Break (to)</th>
          <th scope="col" class="px-6 py-3">Clock out</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="dt in data"
          :key="dt.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ dt.name }}
          </th>
          <td class="px-6 py-4">{{ formatDate(dt.clockIn) }}</td>
          <td class="px-6 py-4">{{ formatHR(dt.lunch_out) }}</td>
          <td class="px-6 py-4">{{ formatHR(dt.lunch_in) }}</td>
          <td class="px-6 py-4">{{ formatHR(dt.first_break_out) }}</td>
          <td class="px-6 py-4">{{ formatHR(dt.first_break_in) }}</td>
          <td class="px-6 py-4">{{ formatHR(dt.secound_break_out) }}</td>
          <td class="px-6 py-4">{{ formatHR(dt.secound_break_in) }}</td>
          <td class="px-6 py-4">{{ formatDate(dt.clockOut) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  props: {
    data: Object,
  },
  methods: {
    formatDate(utc) {
      return dayjs(utc).format("MMM, DD/YYYY - H:mm:ss");
    },

    formatHR(utc) {
      return dayjs(utc).format("H:mm:ss");
    },
  },
};
</script>
