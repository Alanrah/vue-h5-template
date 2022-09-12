<script>
import { mapStores, mapState, mapActions } from 'pinia'
import {useCounterStore} from '@/stores/counter';

// optionAPI写法生效 pinia在optionAPI中的使用
export default {
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['counter', 'doubleCount']),
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
<div>
  <van-button type="primary" @click="count++;increment()">点击加倍</van-button>
  Count is: {{ count }}pinia的countStore {{doubleCount}}
</div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>