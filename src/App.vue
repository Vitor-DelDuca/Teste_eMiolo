<template>
  <div>
    <nav class="navbar navbar-dark bg-primary navbar-expand-md">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logo_eMiolo.jpg" alt="" height="40" class="d-inline-block align-text-center">
          Desafio eMiolo
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">  
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/feed">Feed</router-link>
            </li>
          </ul>
          <div>
            <mdicon name="Logout" @click="handleSignOut" v-if="isLoggedIn"/>
          </div>
        </div>
      </div>

    </nav>

    <router-view></router-view>

    <footer class="py-1 bg-dark">
      <div class="container text-center text-light">
        <span class="">Desafio eMiolo - Vítor Del Duca &copy; 2022</span>
      </div>
    </footer>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>

<style>
body{
background-color: #0093E9;
background-image: linear-gradient(315deg, #0093E9 0%, #80D0C7 100%);
min-height: 100vh;
}
footer{
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>