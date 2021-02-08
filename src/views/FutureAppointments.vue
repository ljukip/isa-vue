<template>
  <div class="home">
    <FutureAppointments />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import FutureAppointments from "@/components/futureAppointments.vue";

export default {
  name: "FutureAppointmentsDermatology",
  components: {
    FutureAppointments,
  },
};
</script>