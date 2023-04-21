<template>
  <!-- <navbar btn-background="bg-gradient-primary" /> -->
  <div class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg" :style="{
    backgroundImage: `url(${bgImg})`,
  }">
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class=" mb-2 text-white">Welcome!</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Register with</h5>
          </div>
          <div class="card-body">
            <form role="form">
              <div class="mb-3">
                <input type="text" class="form-control" v-model="name" placeholder="Nombre">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" v-model="email" placeholder="Email" aria-label="Email" required/>
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="Contraseña"
                  aria-label="Password" required/>
              </div>
              <div class="mb-3">
                <input type="number" class="form-control" v-model="phone" placeholder="Telefono">
              </div>
              <vsud-checkbox id="flexCheckDefault" checked>
                I agree the
                <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
              </vsud-checkbox>

              <div class="text-center">
                <vsud-button color="dark" full-width variant="gradient" class="my-4 mb-2" @click="register">Sign
                  up</vsud-button>
              </div>
              <p class="text-sm mt-3 mb-0">
                Already have an account?
                <a href="javascript:;" class="text-dark font-weight-bolder">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <app-footer /> -->
</template>

<script setup>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
import VsudCheckbox from "@/components/VsudCheckbox.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved6.jpg"
import { onMounted, ref } from "vue";
import useAuth from "../store/AuthStore";
import { useRouter } from "vue-router";

const store = useAuth()
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')

const register = async () => {
  console.log('action')
  const response = await store.register(name.value, email.value, password.value, phone.value)
  alert(response.message)
  if (response.status == true) {
    router.push('/dashboard')
  }
}

onMounted(() => {
  // this.$store.state.hideConfigButton = true;
  // this.$store.state.showNavbar = false;
  // this.$store.state.showSidenav = false;
  // this.$store.state.showFooter = false;
  // this.$store.state.hideConfigButton = false;
  // this.$store.state.showNavbar = true;
  // this.$store.state.showSidenav = true;
  // this.$store.state.showFooter = true;
})
</script>
