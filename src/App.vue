<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            style="max-width: 100px; margin-top: -7px"
            src="./images/logo.png"
          />
          PHARMA
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a v-if="role === '' || !role" class="nav-link" href="#/"
                >Home
                <span class="sr-only">(current)</span>
              </a>
              <a
                v-if="role === 'PATIENT'"
                href="#/userHome"
                data-toggle="tooltip"
                title="home"
                class="nav-link"
                >Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/about">Pharmacies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Medications</a>
            </li>

            <li v-if="role === 'PATIENT'" class="nav-item">
              <a
                href="#/penalties"
                data-toggle="tooltip"
                title="penalties"
                class="nav-link"
                >penalties
              </a>
            </li>
            <li v-if="role === 'PATIENT'" class="nav-item">
              <a
                href="#/newAppointmentDermatology"
                data-toggle="tooltip"
                title="new dermatologist appointment"
                class="nav-link"
                >New appointment
              </a>
            </li>
            <li v-if="role === 'PATIENT'" class="nav-item">
              <a
                href="#/newConsultationAppointment"
                data-toggle="tooltip"
                title="new pharmacist consultation appointment"
                class="nav-link"
                >New consultation
              </a>
            </li>
            <li v-if="role === 'PATIENT'" class="nav-item">
              <a href="#/userProfile" data-toggle="tooltip" title="profile"
                ><img src="./images/profile.png" width="44" height="44" />
              </a>
            </li>
            <li v-if="role === 'PATIENT'" class="nav-item">
              <a
                href="#"
                v-on:click="logout()"
                data-toggle="tooltip"
                title="logout"
                ><img src="./images/logout.png" width="44" height="44" />
              </a>
            </li>
            <li v-if="role === '' || !role" class="nav-item">
              <a href="#/login" data-toggle="tooltip" title="login"
                ><img src="./images/login.png" width="44" height="44" />
              </a>
              <a href="#/signup" data-toggle="tooltip" title="register"
                ><img src="./images/register.png" width="44" height="44" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="nav" style="margin-top: 117px; min-height: 80vh">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; ISA 2021</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data: function () {
    return {
      role: localStorage.getItem("role"),
    };
  },
  methods: {
    logout: function () {
      Swal.fire({
        title: "Are you sure you want to logout?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0bb1bd",
        cancelButtonColor: "#aed1cd",
        confirmButtonText: "Yes, Im sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("username");
          localStorage.removeItem("role");
          localStorage.removeItem("jwt");
          this.$router.push("/login");
          window.location.reload(); //load pushed
        }
      });
    },
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  background-size: 1600px 1160px;
  background-image: url("./images/background.png");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
