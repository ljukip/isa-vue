<template>
  <div style="height: 81.7%">
    <h1>New consultation</h1>
    <hr style="background: #0bb1bd; height: 1px" />
    <div id="filter" style="flex-direction: row">
      <nav>
        <h5 style="color: #0bb1bd">Criteria</h5>
        <form class="form-inline">
          <div style="flex-direction: row; display: inline-flex">
            <Datepicker placeholder="Date" v-model="date"> </Datepicker>
          </div>

          <select id="timeFrom" v-model="timeFromString">
            <option disabled value="">Starting time</option>
            <option v-bind:key="time.value" v-for="time in timesFrom">
              {{ time.hour }}:{{ time.min }} {{ time.am_pm }}
            </option>
          </select>

          <button class="button2" type="submit" v-on:click="search()">
            Search
          </button>
          <button
            style="margin-right: 5px"
            v-on:click="reset()"
            class="button2"
            type="button"
          >
            Reset
          </button>
        </form>
        <hr style="background: #0bb1bd; height: 1px" />
      </nav>
    </div>
    <div id="Div-panel" style="display: inline">
      <div v-if="table === 'true'">
        <table class="myTable">
          <thead>
            <tr class="header">
              <th>Pharmacy name</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Pharmacists</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="pharmacy.id" v-for="pharmacy in filteredPharmacies">
              <td>{{ pharmacy.name }}</td>
              <td>{{ pharmacy.address }}</td>
              <td>{{ pharmacy.rating }}</td>
              <td>{{ pharmacy.consultationPrice }}</td>
              <td>
                <button
                  class="buttonChoose"
                  v-on:click="pharmacists()"
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
import axios from "axios";
import Datepicker from "vuejs-datepicker";

export default {
  data: function () {
    return {
      filteredPharmacies: {
        id: null,
        name: "",
        address: "",
        rating: "",
        consultationPrice: "",
        description: "",
      },
      date: new Date(),
      table: false,
      message: "",
      timesFrom: [
        { hour: "07", min: "00", am_pm: "AM" },
        { hour: "07", min: "30", am_pm: "AM" },
        { hour: "08", min: "00", am_pm: "AM" },
        { hour: "08", min: "30", am_pm: "AM" },
        { hour: "09", min: "00", am_pm: "AM" },
      ],
      timeFromString: "",
      timeFrom: { hour: "", min: "", am_pm: "" },
    };
  },

  methods: {
    pharmacists() {
      this.$router.push("/listPharmacists");
    },
    search() {
      if (this.date == "") {
        this.message = "wrongDate";
        setTimeout(() => (this.messageVal = ""), 6000);
      } else {
        let am_pm = this.timeFromString.split(" ");
        this.timeFrom.am_pm = am_pm[1];
        let time = am_pm[0].split(":");
        this.timeFrom.hour = time[0];
        this.timeFrom.min = time[1];

        this.date.setHours(this.timeFrom.hour);
        this.date.setMinutes(this.timeFrom.min);

        console.log(this.date + this.date.toISOString());

        axios
          .get(
            "http://localhost:8086/consultation/getSuggestions/" +
              this.date.toISOString()
          )
          .then((responce) => this.suggestions(responce.data))
          .catch(() => this.failed());
      }
    },
    suggestions(data) {
      this.filteredPharmacies = data;
      this.table = "true";
    },
    reset() {
      this.date = new Date();
      this.table = "false";
    },
  },
  components: {
    Datepicker,
  },
  created() {
    if (localStorage.getItem("jwt") == "") {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.filter {
  width: 100%;
  height: 14vh;
  background-color: transparent;
  display: contents;
}
.button2 {
  background-color: #e2c5fe70;
  height: 6vh;
  width: 11%;
  margin-right: 11px;
  margin-left: 11px;
  min-height: 1vh;
  min-width: 6vh;
  display: inline-block;
  font-size: 16px;
  font-family: cursive;
  cursor: pointer;
  color: black;
  border-radius: 14px;
}
select {
  padding: 5px;
  margin-right: 11px;
  margin-left: 11px;
  display: inline-block;
  border: 2px solid #e2c5fe70;
  color: black;
  border-radius: 11px;
  outline: 0;
}
.vdp-datepicker * {
  border-radius: 11px !important;
  min-inline-size: fit-content !important;
  border-color: #e2c5fe70;
}
.form-inline {
  margin-left: 21% !important;
}

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