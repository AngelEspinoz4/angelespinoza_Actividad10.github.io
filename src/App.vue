<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Category from "./components/Category.vue";
import Meals from "./components/Meals.vue";
import swal from "sweetalert";
import axios from "axios";
</script>

<template>
  <div class="container">
    <div>
      <nav class="navbar navbar-expand-lg">
        <div
          class="container-fluid d-flex justify-content-between align-items-center"
        >
          <div>
            <img src="/logoRes.png" class="logo" alt="Vite logo" />
          </div>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/categoryDetails"
                  >CategoryDetails</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/mealDetails"
                  >MealDetails</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  background-color: rgba(255, 140, 0, 0.904);
}
.logo {
  height: 5rem;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #ffaa64aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.card {
  background-color: rgb(185, 185, 253);
  box-shadow: 10px 10px 30px black;
}
.swal-modal {
  background-color: rgba(63, 255, 106, 0.69);
  border: 3px solid white;
}
.click:hover {
  cursor: pointer;
}

.nav-link {
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover {
  transform: scale(1.05);
  color: black;
}
</style>
