<template>
    <div id="working-hours-pharmacist">
         <hr style="background: #0bb1bd; height: 1px" />
         <h2>Consultations-pharmacist</h2>
        <div  id="Div-panel" style="display: inline">
            <div >
                <table id="myTable">
                    <thead>
                        <tr class="header" >
                           <th>First name</th>
                           <th>Last name</th>
                           <th>Date</th>
                           <th>Time</th>
                           <th>Cancel</th>
                           <th>Start consultation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td> <button
                                 class="buttonChoose"
                                 v-on:click="
                                    cancelConsultation()
                                 "
                                type="button"
                                ></button>
                            </td>
                            <td>
                                <b-button href="#/startConsultationPharmacist" variant="success">Start</b-button>
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
    data:function() {
        return {

        };
    },
    methods: {
        cancelConsultation() {
            axios
            .post()
            .then((response)=>this.succes(response.data))
            .catch(()=>this.failed());
        },
        succes() {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Appointment has been made",
                showConfirmButton: false,
                timer: 1400,
            });
            this.$router.push("/futureAppointments");
        },
        failed() {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        },
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

tr {
  border-bottom: 1px solid rgba(54, 4, 42, 0.801);
}

td {
  text-align: left;
  padding: 12px;
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