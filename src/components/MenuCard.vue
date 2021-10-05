<template>
    <div>
        <img v-bind:src="image" />
        <div>
        <div>{{ item }}</div>
            <p>
                {{ price }}
            </p>
        </div>
        <div class="countMenuItem">
            <button v-on:click="subtract()">-</button>
                <p>{{ counter }}</p>
            <button v-on:click="add()">+</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MenuCard',
  data(){
      return{
          counter: 0
      }
  },
  props: {
    item: String,
    price: Number,
    image: String,
    index: Number
  },
  methods: {
      subtract(){
          this.counter--;
      },
      add(){
          this.counter++;
          let value = this.counter;
          this.$emit('clicked', value);
      }
  }
}
</script>