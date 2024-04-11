<template>
  <div>
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
