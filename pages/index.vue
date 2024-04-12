<template>
  <div class="main">
    <h2>please select you .csv file</h2>
    <input type="file" @change="handleFileChange" />
    <div v-if="isLoading">
      <h1>Loading....</h1>
    </div>
    <div v-else>
      <div v-for="data in dataset1" :key="data.id">
  <h1>{{ `My name is ${data['name ']}. I am ${data['age '] } years old. My phone number is ${data.mobile}` }}</h1>
  {{ data }}
</div>

    </div>
  </div>
</template>

<script>
import { mapGetters ,mapMutations} from 'vuex'
import * as d3 from 'd3'
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
 handleFileChange(event) {
      const file = event.target.files[0]
      if (!file) return

      this.setLoader(true)

      try {
        const reader = new FileReader()
        reader.onload = e => {
          const text = e.target.result
          const parsedData = this.parseCSV(text)
          this.setData(parsedData) // Here we pass data to the mutation
          this.setLoader(false)
          
        }
        reader.readAsText(file)
      } catch (error) {
        console.error('Error reading CSV:', error)
      }
    },
    ...mapMutations(['setData', 'setLoader']),
    
    parseCSV(text) {
      return d3.csvParse(text) // Returning parsed CSV data
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