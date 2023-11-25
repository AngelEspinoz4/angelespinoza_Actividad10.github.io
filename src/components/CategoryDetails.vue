

<template>
    

    <p>Lista de recetas por categoria</p>
    <h3>{{ category_title }}</h3>
    <Meals v-for="meal in meals" v-bind:key="meal.idMeal" v-bind:meal="meal"/>
</template>

<script>
    import axios from 'axios'
    import Meals from './Meals.vue'
    export default{
        name:"CategoryDetails",
        components:{
            Meals,
        },
        data(){
            return{
                category_title:this.$route.params.title,
                meals:[],
                page:1, //para la paginación
                pages:1, //total de pag

            }
        },
        mounted(){
        //console.log(this.$route.params)

        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+this.category_title)
            .then((res)=>{
            //console.log(res.data.meals)
            this.meals=res.data.meals
            //this.categories=res.data.categories
            //idCategory
            //strCategory "Beef" strCategoryDescription
            })
            .catch((err)=>{
            console.log(err)
    })
    }
        
    }
</script>
