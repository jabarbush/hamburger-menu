<template>
    <div v-for="menu in menus" :key="menu.item" class="card">
        <img v-bind:src="menu.image" class="image" />
        <div class="info">
            <div class="item">{{ menu.item }}</div>
            <p class="price">
                ${{ menu.price }}
            </p>
        </div>
        <div class="counterContainer">
            <button v-on:click="menu.counter--; subtractItem(menu.item, menu.counter);" class="subBtn">-</button>
                <p class="counterDisplay">{{ menu.counter }}</p>
            <button v-on:click="menu.counter++; addItem(menu.item, menu.counter);" class="addBtn">+</button>
        </div>
    </div>
    <div>
        <div style="text-decoration: underline; font-size: 20px;">
        Subtotal:
        </div>
        <ul>
            <template v-for="menu in menus" :key="menu.item">
                <li v-if="menu.counter>0">{{ menu.item }} - x{{ menu.counter }}</li>
            </template>
        </ul>
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
        ],
        order: [{}]
      }
  },
  methods: {
      addItem(itemName: string, counterAmt: number){
          if(!this.order.length){
            let temp = [{item: itemName, counter: counterAmt }]
            this.order.push(temp);
            console.log(this.order[0])
          }
      },
      subtractItem(itemName: string, counterAmt: number){
          if(this.order.includes(itemName)){
              console.log("how's it going, son?")
          }
      }
  }
});
</script>

<style>
.card{
    display: inline-block;
    border: 2px solid black;
    padding: 20px;
    margin: 20px;
    border-radius: 3%;
}
.counterContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
.addBtn, .subBtn{
    display: block;
    width: 22px;
    height: 23px;
    margin: 0;
    background: #dee0ee;
    text-decoration: none;
    text-align: center;
    line-height: 23px;
}
.addBtn{
    border-radius: 0 3px 3px 0;
}
.subBtn{
    border-radius: 3px 0 0 3px;
}
.counterDisplay{
    display: inline-block;
    width: 32px;
    height: 19px;
    margin: 0;
    padding: 0;
    text-align: center;
    border-top: 2px solid #dee0ee;
    border-bottom: 2px solid #dee0ee;
    border-left: 1px solid #dee0ee;
    border-right: 2px solid #dee0ee;
    background: #fff;
    color: #8184a1;
}
.image{
    display: inline-block;
    width: 100px;
    margin-right: 30px;
}
.info{
    display: inline-block;
    text-align: center;
    line-height: 50px;
}
.item{
    font-size: 20px;
}
</style>
