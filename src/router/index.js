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
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import FutureAppointments from "../views/FutureAppointments.vue"
import PassedAppointments from "../views/PassedAppointments.vue"
import ListPharmacies from "../views/ListPharmacies.vue"
import ScheduleConsultation from "../views/ScheduleConsultation.vue"
import ScheduleAppointment from "../views/ScheduleAppointment.vue"
import RequestForLeaveD from "../views/RequestForLeaveD.vue"
import RequestForLeaveP from "../views/RequestForLeaveP.vue"
import WorkingHoursPharmacist from "../views/WorkingHoursPharmacist.vue"
import WorkingHoursDermatologist from "../views/WorkingHoursDermatologist.vue"
import ListOfPatientsP from "../views/ListOfPatientsP.vue"
import ListOfPatientsD from "../views/ListOfPatientsD.vue"
import StartConsultationPharmacist from "../views/StartConsultationPharmacist.vue"

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
    path: "/historyDermatology",
    name: "PassedAppointments",
    component: PassedAppointments
  },
  {
    path: "/futureAppointments",
    name: "FutureAppointments",
    component: FutureAppointments
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
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/listPharmacies",
    name: "ListPharmacies",
    component: ListPharmacies
  },
  {
    path: "/scheduleConsultation",
    name: "ScheduleConsultation",
    component: ScheduleConsultation
  },
  {
    path: "/scheduleAppointment",
    name: "ScheduleAppointment",
    component: ScheduleAppointment
  },
  {
    path: "/requestForLeaveD",
    name: "RequestForLeaveD",
    component: RequestForLeaveD
  },
  {
    path: "/requestForLeaveP",
    name: "RequestForLeaveP",
    component: RequestForLeaveP
  },
  {
    path: "/workingHoursPharmacist",
    name: "WorkingHoursPharmacist",
    component: WorkingHoursPharmacist
  },
  {
    path: "/workingHoursDermatologist",
    name: "WorkingHoursDermatologist",
    component: WorkingHoursDermatologist
  },
  {
    path: "/listOfPatientsP",
    name: "ListOfPatientsP",
    component: ListOfPatientsP
  },
  {
    path: "/listOfPatientsD",
    name: "ListOfPatientsD",
    component: ListOfPatientsD
  },
  {
    path: "/startConsultationPharmacist",
    name: "StartConsultationPharmacist",
    component: StartConsultationPharmacist
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
