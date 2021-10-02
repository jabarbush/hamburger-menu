<template>
  <MenuList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from './components/HelloWorld.vue';
import MenuList from './components/MenuList.vue';
//import MenuCard from './components/MenuCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    //HelloWorld,
    MenuList,
    //MenuCard
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
