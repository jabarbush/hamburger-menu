<template>
    <p>
        Subtotal:
    </p>
    <div>
        <ul>
            <li v-show="counter != 0">{{ item }} - {{ index }}</li>
        </ul>
    </div>
</template>

<script>
//import MenuCard from './MenuCard.vue'
/* eslint-disable */
export default {
  name: 'Subtotal',
  props: {
    item: String,
    price: Number,
    image: String,
    index: Number
  },
  methods: {
    
  }
}
</script>