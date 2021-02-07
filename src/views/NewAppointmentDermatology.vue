<template>
  <div class="home">
    <NewAppointments />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import NewAppointments from "@/components/newAppointmentDermatology.vue";

export default {
  name: "NewAppointmentsDermatology",
  components: {
    NewAppointments,
  },
};
</script>