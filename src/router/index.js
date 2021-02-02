import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import PharmacistProfile from "../views/PharmacistProfile.vue";
import DermatologistProfile from "../views/DermatologistProfile.vue";
import UserHome from "../views/UserHome.vue";
import NewAppointmentDermatology from "../views/NewAppointmentDermatology.vue";
import PharmacistHome from "../views/PharmacistHome.vue";
import DermatologistHome from "../views/DermatologistHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/userProfile",
    name: "UserProfile",
    component: UserProfile
  },
  {
    path: "/newAppointmentDermatology",
    name: "NewAppointmentDermatology",
    component: NewAppointmentDermatology
  },
  {
    path: "/userHome",
    name: "UserHome",
    component: UserHome
  },
  {
    path: "/pharmacistProfile",
    name: "PharmacistProfile",
    component: PharmacistProfile
  },
  {
    path: "/dermatologistProfile",
    name: "DermatologistProfile",
    component: DermatologistProfile
  },
  {
    path: "/dermatologistHome",
    name: "DermatologistHome",
    component: DermatologistHome
  },
  {
    path: "/pharmacistHome",
    name: "PharmacistHome",
    component: PharmacistHome
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
