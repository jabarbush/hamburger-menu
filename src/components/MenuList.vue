<template>
    <div>
        <MenuCard
                v-for="(value,index) in menu"
                :item="value.item"
                :price="value.price"
                :image="value.image"
                :index="index"
                :key="value.item"
        />
    </div>
</template>
<script>
import MenuCard from './MenuCard'
export default {
    name: 'MenuList',
    data (){
        return {
            menu: [
                {
                    item: "Burger",
                    price: 5.99,
                    image: "./assets/burger.png"
                },
                {
                    item: "Fries",
                    price: 2.99,
                    image: "./assets/fries.png"
                },
                {
                    item: "Drink",
                    price: 1.99,
                    image: "./assets/drink.png"
                }
            ]
        }
        
    },
    components: {
        MenuCard
    }
}
</script>

