<template>
  <div style="height: 81.7%">
    <h1 style="margin-top: 10px; color: #35424a">Create new appointment</h1>
    <hr style="background: #0bb1bd; height: 1px" />

    <div id="Div-panel" style="display: inline">
      <div>
        <table id="myTable">
          <thead>
            <tr class="header">
              <th>Date</th>
              <th>Time</th>
              <th>Dermatologist</th>
              <th>Price</th>
              <th>Dr rating</th>
              <th>Reserve</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="appointment.id" v-for="appointment in appointments">
              <td>{{ new Date(appointment.date) }}</td>
              <td>{{ appointment.time }}</td>
              <td>{{ appointment.dermatologistID }}</td>
              <td>{{ appointment.price }}</td>
              <td>{{ appointment.rating }}</td>
              <td>
                <button
                  class="buttonChoose"
                  v-on:click="
                    newAppointment(appointment.patientID, appointment.id)
                  "
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
    newAppointment(pId, Id) {
      axios
        .post("http://localhost:8086/appointment/reserve/" + Id, localStorage.getItem('username'))
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
    load(data) {
      this.appointments = data;
      console.log(this.appointments);
    },
  },
  created() {
    axios
      .get("http://localhost:8086/appointment/free")
      .then((Response) => this.load(Response.data));
  },
};
</script>

<style scoped>
#myTable {
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
  border: solid transparent 1px;
  border-radius: 6px;
  background-color: #d9f2f3d5;
}

th {
  text-align: left;
  padding: 12px;
  background-color: #89dfdfd5;
}
td {
  text-align: left;
  padding: 12px;
}

tr {
  border-bottom: 1px solid rgba(54, 4, 42, 0.801);
}

tr:hover {
  background-color: #8dd6db79;
}

.buttonChoose {
  border-radius: 60%;
  box-shadow: 11px 9px 9px rgba(54, 4, 42, 0.79);
  background-size: cover;
  background-image: url("../images/choose.png");
  display: inline-block;
  height: 6vh;
  min-height: 1vh;
  min-width: 6vh;
  display: inline-block;
  font-size: 16px;
  font-family: cursive;
  cursor: pointer;
  color: #fdfcfd;
}
</style>