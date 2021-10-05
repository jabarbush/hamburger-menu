<template>
  <MenuList/>
  <!-- <MenuCard
    item="Burger"
    price=5.99
    image="./assets/burger.png"
  />
  <MenuCard
    item="Fries"
    price=2.99
    image="./assets/fries.png"
  />
  <MenuCard
    item="Drink"
    price=1.99
    image="./assets/drink.png"
  /> -->
  <Subtotal/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from './components/HelloWorld.vue';
import MenuList from './components/MenuList.vue';
//import MenuCard from './components/MenuCard.vue'
import Subtotal from './components/Subtotal.vue';

export default defineComponent({
  name: 'App',
  components: {
    //HelloWorld,
    MenuList,
    //MenuCard,
    Subtotal
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
</style>
