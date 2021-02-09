<template>
    <div style="height: 81.7%">
        <h1 style="margin-top: 10px; color: #35424a">Schedule new Consultationt</h1>
        <hr style="background: #0bb1bd; height: 1px" />

        <div id="Div-panel" style="display: inline">
            <div>
                <label style = "font-size: 25px"> Patient:</label>
                <select id="patients" v-model="patient">
                    <option disabled value="">Patients</option>
                    <option v-bind:key="patient.id" v-for="patient in patients" >{{patient.id}},{{patient.firstName}},{{patient.lastName}}</option>
                
                </select>
            </div>
       <br>
            <div >
                <label style="font-size: 20px;">Start time:</label>
            
             <b></b><b></b>
            
                <input type="time" style="font-size: 20px;" size="80" placeholder="Enter time.." v-model="startTime">       
            </div>

            <br>

            <div>
                <div>
                    <label style="font-size: 20px;">Date of consulting:</label>
                
                <b></b>
                <b-calendar v-model="date" @context="onContext" ></b-calendar>                
        <!--         <input type="date" style="font-size: 20px;" size="80" placeholder="Enter date of consulting.." v-model="date">   -->
                </div>

            </div>
        <br>
            <div>
                <button class = "btn btn-success md-2 p-2" v-on:click="send" >Schedule consultation</button>
            </div>

            <br>
            <br>


        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            patients: [],
            patient:"",
        }
    },
    methods:{
        load(data){
            this.patients=data;
            console.log("patients:" + this.patients);
        }

    },
    created(){
        axios
            .get("http://localhost:8086/users/patients")
            .then((Response) => this.load(Response.data));
    }

    
}
</script>
<style scoped>
select{
    padding:5px;
    margin-right: 11px;
    margin-left: 11px;
    display: inline-block;
    border: 2px solid #e2c5fe70;
    color: black;
    border-radius: 11px;
    outline: 0;
}
</style>

