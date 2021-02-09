<template>
    <div class="container">
       <hr style="background: #0bb1bd; height: 1px" />
        <h2>Request for leave</h2>
        <div class="form-group">
            <br>
                <div>
                    <input type="radio" id="contactChoice1"
                    name="contact" value="vacation" size="large">
                    <label for="contactChoice1">Vacation</label>
                  <br>
                    <input type="radio" id="contactChoice2"
                    name="contact" value="absence" size="large">
                    <label for="contactChoice2">Absence</label>

                </div>
                <br>
             <b-row >
                 
                     <b-col md="auto">
                         OD:
                      <b-calendar
                        v-model="date"
                       
                        @context="onContext"
                     ></b-calendar>
                    </b-col>
              
                
                
                     <b-col md="auto">
                         DO:
                      <b-calendar
                        v-model="date"
                       
                        @context="onContext"
                     ></b-calendar>
                    </b-col>
               
             </b-row>   
             <br>
             <br>


             <div>
                  <b-button pill variant="info"  v-on:click="send()">Send</b-button>
             </div>

        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

  export default {
    data() {
      return {
       
      };
    },
    methods: {
        send(){
            axios
            .post()
            .then((response) => this.succes(response.data))
            .catch(()=> this.failed());
        },
        succes() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Request has been made",
        showConfirmButton: false,
        timer: 1400,
      });
      this.$router.push("/dermatologistHome");
    },
    failed() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    }
  }
</script>