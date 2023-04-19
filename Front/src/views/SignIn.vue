<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <!-- <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        /> -->
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">

                  <h3 class="font-weight-bolder text-info text-gradient">TurnosExpress</h3>
                  <p class="mb-0">Introduzca sus credenciales para ingresar</p>
                  
                  <div class="card-body mt-4">
                    <form role="form" class="text-start">
                      <label>Email</label>
                      <vsud-input type="email" placeholder="Email" name="email" v-model="email"/>
                      <label>Contraseña</label>
                      <vsud-input type="password" placeholder="Contraseña" name="password" v-model="password"/>
                      <!-- <vsud-switch id="rememberMe" checked>Remember me</vsud-switch> -->
                      <div class="text-center">
                        <vsud-button class="my-4 mb-3" variant="gradient" color="info" full-width @click.prevent="loginUser">Ingresar</vsud-button>
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      No estás registrado/a?
                      <a href="javascript:;" class="text-info text-gradient font-weight-bold">Registrate</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8">
                <div class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" :style="{
                  backgroundImage:
                    `url(${bgImg})`,
                }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script setup>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved9.jpg"
import { ref, onMounted } from "vue";
import useAuth from "../store/AuthStore";
import $store from '../store/index'


const body = document.getElementsByTagName("body")[0];
const store = useAuth()

const email = ref('')
const password = ref('')

const loginUser = async () => {
  const response = await store.login(email.value, password.value)
  if(response.status){
    alert(response.message)
  }else{
    alert("ERROR: "+response.message
    )
  }
}

// onMounted(() => {
//   $store.state.hideConfigButton = true;
//   $store.state.showNavbar = false;
//   $store.state.showSidenav = false;
//   $store.state.showFooter = false;
//   body.classList.remove("bg-gray-100");

//   $store.state.hideConfigButton = false;
//   $store.state.showNavbar = true;
//   $store.state.showSidenav = true;
//   $store.state.showFooter = true;
//   body.classList.add("bg-gray-100");
// })
</script>

<style scoped>
.card .card-body {
    font-family: "Open Sans";
    padding: 0;
}
</style>