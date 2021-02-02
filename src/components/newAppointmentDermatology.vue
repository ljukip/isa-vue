<template>
  <div style="height: 81.7%">
    <h1 style="margin-top: 10px; color: #35424a">Create new appointment</h1>
    <hr style="background: #0bb1bd; height: 1px" />

    <div id="Div-panel" style="display: inline">
      <div>
        <table class="myTable">
          <thead>
            <tr class="header">
              <th>Date</th>
              <th>Time</th>
              <th>Dermatologist</th>
              <th>Price</th>
              <th>Dr rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="appointments.id">
              <td>{{ appointments.date }}</td>
              <td>{{ appointments.time }}</td>
              <td>{{ appointments.dermatologistID }}</td>
              <td>{{ appointments.rating }}</td>
              <td>
                <button
                  class="buttonChoose"
                  v-on:click="newAppointment()"
                  type="button"
                ></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  data: function () {
    return {
      username: "proba", //localStorage.getItem("username"),
      appointments: [],
    };
  },
  methods: {
    getDermatologist() {},
    newAppointment() {
      axios
        .post(
          "appointment/reserve/" + this.appointments.patientID,
          this.appointments.id
        )
        .then((responce) => this.succes(responce.data))
        .catch(() => this.failed());
    },
    succes() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Appointment has been made",
        showConfirmButton: false,
        timer: 1400,
      });
      this.$router.push("/appointments");
    },
    failed() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    },
  },
  created() {
    axios
      .get("http://localhost:8080/appointment/free")
      .then((Response) => (this.appointments = Response.data));
  },
};
</script>