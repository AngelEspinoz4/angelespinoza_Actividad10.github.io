<template>
  <div class="container-fluid">
    <div class="card m-5" style="width: 50rem">
      <img
        @click="openMealList"
        class="card-img-top"
        :src="meal.strMealThumb"
        alt=""
      />
      <div class="card-body">
        <h2 class="card-title">{{ meal.strMeal }}</h2>
        <p class="card-text m-2">
          Categoria: {{ meal.strCategory }} | Origen:{{ meal.strArea }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["meal"],
  methods: {
    openMealList() {
      //console.log(this.category)
      this.$router.push("/meal/" + this.meal.idMeal);
      //console.log(this.meal.idMeal)
    },
  },
};
</script>
