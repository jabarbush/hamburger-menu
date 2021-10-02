<template>
    <div>
        <img v-bind:src="image" />
        <div>
        <div>{{ item }}</div>
            <p>
                {{ price }}
            </p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MenuCard',
  props: {
    item: String,
    price: Number,
    image: String
  },
  methods: {
    
  }
}
</script>