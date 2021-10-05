<template>
    <div v-for="menu in menus" :key="menu.item" class="card">
        <img v-bind:src="menu.image" />
        <div>
            <div>{{ menu.item }}</div>
            <p>
                {{ menu.price }}
            </p>
        </div>
        <div>
            <button v-on:click="menu.counter--" class="subBtn">-</button>
                <p class="counterDisplay">{{ menu.counter }}</p>
            <button v-on:click="menu.counter++" class="addBtn">+</button>
        </div>
    </div>
    <div>
        Subtotal:
        <ul>
            <template v-for="menu in menus" :key="menu.item">
                <li v-if="menu.counter>0">{{ menu.item }} - x{{ menu.counter }}</li>
            </template>
        </ul>
        <div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HmaburgerMenuApp',
  components: {
  },
  data(){
      return{
          menus: [
            {
                item: "Burger",
                price: 5.99,
                image: "./assets/burger.png",
                counter:0
            },
            {
                item: "Fries",
                price: 2.99,
                image: "./assets/fries.png",
                counter:0
            },
            {
                item: "Drink",
                price: 1.99,
                image: "./assets/drink.png",
                counter:0
            },
        ]
      }
  },
  methods: {
      
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card{
    display: inline-block;
}
.addBtn{
    display: inline-block;
}
.subBtn{
    display: inline-block;
}
.counterDisplay{
    display: inline-block;
}
</style>
