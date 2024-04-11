<template>
  <div class="main">
    <h2>please select you .csv file</h2>
    <input type="file" @change="handleFileChange" />
    <div v-if="isLoading">
      <h1>Loading....</h1>
    </div>
    <div v-else>
      <div v-for="data in dataset1" :key="data.id">
        {{ data }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      dataset1: ['data'],
      isLoading: ['loader']
    })
  },
  methods: {
    handleFileChange (event) {
      this.$store.dispatch('handleFileChange', event)
    }
  }
}
</script>
<style scoped>
 .main{
  background-color: rgb(182, 241, 241);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px;
  flex-direction: column;
 }
 .main h2{
  font-size: 22px;
  font-weight: 600;
 }
 .main input{
   border: 1px solid goldenrod;
   padding: 20px;
 }
</style>