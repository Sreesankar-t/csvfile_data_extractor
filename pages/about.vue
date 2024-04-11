<template>
  <div>
    <h1>CSV Data</h1>
    <table v-if="dataLoaded">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: ["name","age","mobile"],
      rows: [],
      dataLoaded: false
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.$get('/api/csv-data');
      this.headers = Object.keys(response.data[0]);
      this.rows = response.data;
      this.dataLoaded = true;
    } catch (error) {
      console.error('Failed to fetch CSV data:', error);
    }
  }
};
</script>
