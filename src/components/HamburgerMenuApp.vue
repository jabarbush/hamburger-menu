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
            <button :disabled="menu.counter<1" v-on:click="menu.counter--; subtractItem(menu.item, menu.counter); total();" class="subBtn">-</button>
                <p class="counterDisplay">{{ menu.counter }}</p>
            <button v-on:click="menu.counter++; addItem(menu.item, menu.counter); total();" class="addBtn">+</button>
        </div>
    </div>
    <div>
        <div style="text-decoration: underline; font-size: 20px;">
        Subtotal:
        </div>
        <ul>
            <template v-for="menu in menus" :key="menu.item">
                <li v-if="menu.counter>0">x{{ menu.counter }} - {{ menu.item }} - ${{ menu.price }}</li>
            </template>
        </ul>
        <hr v-if="sum>0">
        <div style="font-weight: bold; font-size: 15px;">
            <div>Total: ${{ formatMoney(sum) }}</div>
        </div>
    </div>
    <button v-if="sum>0" class="resetBtn">Reset</button>
    <button v-if="sum>0" class="reviewBtn">Review Order</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HamburgerMenuApp',
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
        order: [{}],
        sum: 0
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
      },
      total(){
          var temp = 0.00
          for(var i = 0; i<this.menus.length; i++){
              temp += this.menus[i].price * this.menus[i].counter;
          }
          this.sum = temp;
      },
      formatMoney(value: number) {
        let val = (value/1).toFixed(2).replace('.', '.')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
.resetBtn, .reviewBtn{
    display: inline;
    width: 110px;
    height: 45px;
    margin: 30px;
    border-radius: 3%;
}
hr{
    width: 100px;
}
</style>
