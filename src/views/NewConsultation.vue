<template>
  <div class="home">
    <NewConsultation />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import NewConsultation from "@/components/newConsultation.vue";

export default {
  name: "NewConsultationView",
  components: {
    NewConsultation,
  },
};
</script>