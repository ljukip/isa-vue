<template>
  <div style="height: 81.7%">
    <nav>
      <h1 style="margin-top: 10px; color: #35424a">Passed appointments</h1>
      <hr style="background: #0bb1bd; height: 1px" />
    </nav>
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
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-bind:key="appointment.id"
              v-for="appointment in appointmentsPassed"
            >
              <td>{{ new Date(appointment.date) }}</td>
              <td>{{ appointment.time }}</td>
              <td>
                <div
                  v-bind:key="dermatolog.id"
                  v-for="dermatolog in getDermatologist"
                >
                  {{ dermatolog.firstName }}
                </div>
              </td>
              <td>{{ appointment.price }}</td>
              <td>{{ appointment.rating }}</td>
              <td>
                <button
                  class="buttonChoose"
                  v-on:click="review(appointment.id, appointment.date)"
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
      appointmentsPassed: [],
      appointmentsFuture: [],
      appointments: [],
      dermatolog: [],
    };
  },
  methods: {
    getDermatologist() {
      axios
        .get("http://localhost:8086/dermatologist/all")
        .then((Response) => (this.dermatolog = Response.data));
      return this.dermatolog;
    },
    cancel(id, date) {
      var today = new Date();
      today.setDate(today.getDate() + 1);
      if (today.toISOString() > date) {
        Swal.fire({
          icon: "error",
          title: "Cancelation time passed",
          text: "You have less then 24h to the appointment!",
        });
      } else {
        Swal.fire({
          title: "Are you sure you want to cancel the appointment?",
          text: "Appointment will be canceled",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ffdff0",
          cancelButtonColor: "#c41088",
          confirmButtonText: "Yes, Im sure!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .put(`http://localhost:8086/appointment/cancel/` + id)
              .then(() => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Appointment has been canceled!",
                  showConfirmButton: false,
                  timer: 3500,
                });
                setTimeout(() => window.location.reload(), 3500);
              });
          }
        });
      }
    },
    review() {
      this.$router.push("http://localhost:8086/appointment/review");
      //axios  + appointment.id
    },
    load(data) {
      this.appointments = data;
      var today = new Date();

      for (let i = 0; i < this.appointments.length; i++) {
        var date = new Date(this.appointments[i].date);
        console.log(date.toDateString() + today.toDateString());
        if (today > date) {
          this.appointmentsPassed.push(this.appointments[i]);
        } else {
          this.appointmentsFuture.push(this.appointments[i]);
        }
      }
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
    if (localStorage.getItem("jwt") == {}) {
      this.$router.push("/login");
    } else {
      axios
        .get(
          "http://localhost:8086/appointment/patientAppointments/" +
            localStorage.getItem("username")
        )
        .then((Response) => this.load(Response.data));
    }
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
  background-color: #e2c5fe70;
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
  background-image: url("../images/review.webp");
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

