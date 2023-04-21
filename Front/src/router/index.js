import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import useAuth from "../store/AuthStore";

const routes = [
  {  
    path: "/",
    name: "/",
    redirect: "/dashboard",
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
    meta:{
      requireAuth: false
    }
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
    meta:{
      requireAuth: false
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next)=>{
  const token = useAuth()
  const auth = token.token != null
  const needAuth = to.meta.requireAuth

  console.log(token.token)

  if(needAuth && !auth){
    next('/sign-in')
    alert('Unauthorized')
  }else{
    next()
  }
})


export default router;
