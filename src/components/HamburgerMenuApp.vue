<template>
    <div
        v-for="menu in menus"
        :key="menu.item"
        class="card"
    > <!-- loop through menus array to display all food cards-->
        <img
            :src="menu.image"
            class="image" 
        />
        <div class="info">
            <div class="item">
                {{ menu.item }}
            </div>
            <p class="price">
                ${{ menu.price }}
            </p>
        </div>
        <div class="counterContainer">
            <button
                :disabled="menu.counter<1 || isActive"
                v-on:click="menu.counter--; total();"
                class="subBtn"
            >-
            </button>
                <p class="counterDisplay">
                    {{ menu.counter }}
                </p>
            <button
                :disabled="isActive"
                v-on:click="menu.counter++;total();"
                class="addBtn"
            >+
            </button>
        </div>
    </div>
    <br>
    <div v-if="!isActive"> <!-- only this section or the summary are active and rendered at a time-->
        <div style="text-decoration: underline; font-size: 20px;">
        Subtotal:
        </div>
        <ul>
            <template
                v-for="menu in menus"
                :key="menu.item"
            >
                <li v-if="menu.counter>0">
                    x{{ menu.counter }} - {{ menu.item }} - ${{ formatMoney(menu.price*menu.counter) }}
                </li>
            </template>
        </ul>
        <hr v-if="sum>0">
        <div style="font-weight: bold; font-size: 15px;">
            <div>
                Total: ${{ formatMoney(sum) }}
            </div>
        </div>
        <button
            v-if="sum>0"
            v-on:click="reset();"
            class="resetBtn"
        >Start Over
        </button>
        <button
            v-if="sum>0"
            v-on:click="showSummary();"
            class="reviewBtn"
            >Complete Order
        </button>
    </div>
    <div v-if="isActive">
        <div style="text-decoration: underline; font-size: 20px;">
        Order Summary:
        </div>
        <ul>
            <template v-for="menu in menus" :key="menu.item">
                <li>{{ menu.counter }} {{ menu.item }}</li>
            </template>
        </ul>
        <hr>
        <div style="font-weight: bold; font-size: 15px;">
            <div>Total: ${{ formatMoney(sum) }}</div>
        </div>
        <button v-on:click="reset();" class="resetBtn">Start Over</button>
        <button v-on:click="postOrder();" class="reviewBtn">Place Order</button>
        <div v-if="success">Order successfully placed!</div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HamburgerMenuApp',
  data(){
      return{
          menus: [
            {
                item: "Burger",
                price: 5.99,
                image: "https://i.pinimg.com/originals/b6/94/a3/b694a3e877fe852dd7e764f2684b1710.png",
                counter:0
            },
            {
                item: "Fries",
                price: 2.99,
                image: "https://static.thenounproject.com/png/82817-200.png",
                counter:0
            },
            {
                item: "Drink",
                price: 1.99,
                image: "https://i.pinimg.com/originals/cf/c2/9c/cfc29cd95b56c9d3f5debfd67eafd69c.png",
                counter:0
            },
        ],
        sum: 0,
        isActive: false,
        success: false
      }
  },
  methods: {
    /* The getMenu method is an example of how this application would receive the menu based on it's address. The menu used has been
    *  hardcoded for the purpose of this exercise.
    *
    *  The postOrder method is an example of sending a payload of restaurant and order information for the backend to process and save.
    *  The "Place Order" button would only display a successful order if it received a 201 response. Otherwise it would throw an error.
    * 
    getMenu(){
        fetch("https://getMenuAPI.com/{address}/", {
            method: 'GET'
        })
        .then(response => response.json());
    },
    postOrder(){
        fetch("https://postOrderAPI.com/{address}", {
            method: "POST",
            body: JSON.stringify({
                info:{
                    address: address,
                storenumber: storenumber
                },
                order:{
                    this.menu
                }
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
    },
    *
    */
    //this is a placeholder for the method above for the demonstration
    postOrder(){
        this.success = true;
    },
    //loops through the menus array to keep track of running total
    total(){
        var temp = 0;
        for(var i = 0; i<this.menus.length; i++){
            temp += this.menus[i].price * this.menus[i].counter;
        }
        this.sum = temp;
    },
    formatMoney(value: number) {
        let val = (value/1).toFixed(2).replace('.', '.');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // resets the counter on all the menu items, the running total, the subtotal, and API response
    reset(){
        for(var i = 0; i<this.menus.length; i++){
            this.menus[i].counter = 0;
        }
        this.sum = 0;
        this.isActive = false;
        this.success = false
    },
    showSummary(){
        this.isActive = !this.isActive;
    }
  }
});
</script>

<style>
.card{
    display: inline-block;
    border: 2px solid #dee0ee;
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
    width: 40px;
    height: 30px;
    margin: 0;
    background: #dee0ee;
    text-decoration: none;
    text-align: center;
    line-height: 13px;
    font-weight: bold;
    font-size: 17px;
    
}
.addBtn{
    border-radius: 0 3px 3px 0;
}
.subBtn{
    border-radius: 3px 0 0 3px;
}
.counterDisplay{
    display: inline-block;
    width: 40px;
    height: 27px;
    margin: 0;
    padding: 0;
    text-align: center;
    border-top: 2px solid #dee0ee;
    border-bottom: 2px solid #dee0ee;
    border-left: 1px solid #dee0ee;
    border-right: 2px solid #dee0ee;
    background: #fff;
    color: #8184a1;
    line-height: 30px;
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
    width: 120px;
    height: 45px;
    margin: 30px;
    border-radius: 8%;
}
.reviewBtn{
    background-color: #aaf7a8
}
.resetBtn{
    background-color: #fa9898;
}
hr{
    width: 100px;
}
li{
    list-style-type: none;
    text-align: center;
    margin-left:-30px;
}
</style>
