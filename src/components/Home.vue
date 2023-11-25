<template>
  <h1 class="text-light mb-4">¿Deseas buscar una receta?</h1>
  <input
    type="text"
    placeholder="Buscar receta"
    v-model="search"
    @keyup.enter="searchData"
  />

  <Meals v-for="meal in meals" v-bind:key="meal.idMeal" v-bind:meal="meal" />
  <Category
    v-for="category in paginated"
    v-bind:key="category.idCategory"
    v-bind:category="category"
  ></Category>

  <div class="text-center fw-bold m-2">Actual: {{ current }}</div>
  <div class="text-center">
    <a @click="($event) => prev()" class="click me-5">Anterior</a>
    <a @click="($event) => next()" class="click">Siguiente</a>
  </div>
</template>

<script>
import Category from "./Category.vue";
import Meals from "./Meals.vue";
import swal from "sweetalert";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      categories: [], //lo llenaremos con la api
      current: 1,
      pageSize: 5,
      search: "",
      meals: [],
    };
  },
  mounted() {
    axios
      .get("https://themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        //console.log(res.data.categories)
        this.categories = res.data.categories;
        //idCategory
        //strCategory "Beef" strCategoryDescription
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Category,
    Meals,
  },

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.categories.slice(this.indexStart, this.indexEnd);
    },
  },
  methods: {
    prev() {
      this.current--;
    },
    next() {
      this.current++;
    },
    searchData() {
      if (this.search) {
        axios
          .get(
            "https://themealdb.com/api/json/v1/1/search.php?s=" + this.search
          )
          .then((res) => {
            console.log(res.data.meals);
            this.meals = res.data.meals;
          });
      } else {
        //alert("buscando...")
        swal({
          title: "Atencion",
          text: "Ingresa un texto",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style>
input {
  border: 0px;
  width: 200px;
  background-color: white;
  height: 30px;
  text-align: center;
}
input:focus {
  outline: none;
  color: black;
}
</style>
