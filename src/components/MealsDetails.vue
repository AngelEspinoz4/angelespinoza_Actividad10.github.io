<template>
  <h3 class="text-center">Detalle de comida</h3>
  <div v-if="meal" class="text-center">
    <div class="row">
      <div class="col-md-12">
        <h4 class="m-2">{{ meal["strMeal"] }} | {{ meal.strArea }}</h4>
        <img :src="meal.strMealThumb" width="300" />
      </div>

      <div>
        <h3>Ingredientes</h3>
        <p>{{ meal.strIngredient1 }}</p>
        <p>{{ meal.strIngredient2 }}</p>
        <p v-if="meal.strIngredient20">{{ meal.strIngredient20 }}</p>
      </div>

      <div>
        <h3>Porciones</h3>
        <p>{{ meal.strMeasure1 }} {{ meal.strIngredient1 }}</p>
        <p>{{ meal.strMeasure2 }} {{ meal.strIngredient2 }}</p>
        <p v-if="meal.strMeasure20">
          {{ meal.strMeasure20 }} {{ meal.strIngredient20 }}
        </p>
      </div>
    </div>

    <div class="instrucciones me-5 ms-5">
      <h3>Instrucciones</h3>
      <p>{{ meal.strInstructions }}</p>
    </div>

    <h6 class="mb-2" v-if="meal.strYoutube">
      <a :href="meal.strYoutube" target="_blank">Video Youtube</a>
    </h6>
  </div>
  <div v-else class="text-center">Cargando...</div>
</template>

<script>
import axios from "axios";

export default {
  name: "MealsDetails",
  components: {},
  methods: {
    openMealList() {
      console.log(this.category);
      this.$router.push("/meal/" + this.meal.idMeal);
      console.log(this.meal.idMeal);
    },
  },
  data() {
    return {
      meal: null,
    };
  },
  mounted() {
    console.log(this.$route.params);

    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
          this.$route.params.id
      )
      .then((res) => {
        console.log(res.data.meals[0]);
        this.meal = res.data.meals[0];
        //this.categories=res.data.categories
        //idCategory
        //strCategory "Beef" strCategoryDescription
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.instrucciones {
  text-align: justify;
}
</style>
