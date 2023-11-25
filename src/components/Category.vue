<template>
  <div @click="openCategoryList" class="container-fluid">
    <div class="card m-5" style="width: 50rem">
      <img
        class="card-img-top"
        :src="category.strCategoryThumb"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ category.strCategory }}</h5>
        <p class="card-text m-2">
          {{ category.strCategoryDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  methods: {
    openCategoryList() {
      console.log(this.category);
      this.$router.push("/category/" + this.category.strCategory);
      console.log(this.category.strCategory);
    },
  },
};
</script>
