<template>
    <div id="home">
        
        <span style="float:left;margin:15px">
            <div class="input-group mb-3">
                <input type="text" v-model="name" class="form-control" placeholder="Search pharmacy by city" aria-label="Search pharmacy by name" aria-describedby="basic-addon1">
                <div class="input-group-append">
                     <button class="btn btn-outline-secondary" type="button"  v-on:click = "searchName(name)" >Search</button>
  
                </div>
            </div>
        </span>

        <span style="float:left;margin:15px">
            <div class="input-group mb-3">
                <input type="text" v-model="pharmacyCity" class="form-control" placeholder="Search pharmacy by city" aria-label="Search pharmacy by city" aria-describedby="basic-addon2">
                <div class="input-group-append">
                     <button class="btn btn-outline-secondary" type="button"  v-on:click = "searchCity(city)" >Search</button>
  
                </div>
            </div>
        </span>


        <br>
        <br>
        <br> 
    <div>
        <h4 style="float:left">
            List of Pharmacies:
      </h4>
    </div>

    <div>
        <div  v-if="showTable">
            <table id="table2" class="table" :href="href" @click="navigate"  elevation="1">
                <thead>
                    <tr >
                        <th scope="row"></th>
                        <td>Pharmacy name:</td>
                        <td>{{pharmacy.name}} </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Address:</td>
                        <td>{{pharmacy.address}} {{pharmacy.city}}, {{pharmacy.country}}</td>
                    </tr>

                   

                </thead>

            </table>
        </div>
    </div>

    </div>


</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
    data: function() {
        return {
        pharmacy : {},
       pharmacy1: null,
        name: null,
        pharmacyCity: null,
        city: null,
        showTable: null,
        filter: null
        };
    },
    methods:{
         searchName(name){
           
           axios
           .post(
               "http://localhost:8086/pharmacy/searchName/" + name,
               localStorage.getItem("name")
           )
           .then((responce)=> this.succes(responce.data))
           .catch(()=> this.failed());
        },
      
       searchCity(city){
           
           axios
           .post(
               "http://localhost:8086/pharmacy/searchName/" + city,
               localStorage.getItem("name")
                
                
           )
           .then((responce)=> this.succes(responce.data))
           .catch(()=> this.failed());
        },  

        succes() {
                Swal.fire({
                  text:"ok",
                });
               
        },

        failed() {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        },
      
    }


};
</script>

