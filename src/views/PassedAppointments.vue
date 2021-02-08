<template>
  <div class="home">
    <PassedAppointments />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import PassedAppointments from "@/components/passedAppointments.vue";

export default {
  name: "PassedAppointmentsDermatology",
  components: {
    PassedAppointments,
  },
};
</script>