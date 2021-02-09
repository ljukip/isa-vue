<template>
    <div style="height: 81.7%">
        <h1 style="margin-top: 10px; color: #35424a">Schedule new appointment</h1>
        <hr style="background: #0bb1bd; height: 1px" />

        <div id="Div-panel" style="display: inline">
            <div>
                <label style = "font-size: 25px"> Patient:</label>
                <b-dropdown id="ddCommodity" name="ddCommodity" text="Choose patient" class = "btn btn-link btn-lg" style="margin-left:20px;" color="primary">
                     <b-dropdown-item v-for="patient in this.patients"  v-on:click ="patientIsSelected($event, patient)" v-bind:key="patient.id"> {{patient.name}}  </b-dropdown-item>
                </b-dropdown>
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
                    <label style="font-size: 20px;">Date of appointment:</label>
                
                <b></b>
                <b-calendar v-model="date" @context="onContext" ></b-calendar>                
        <!--         <input type="date" style="font-size: 20px;" size="80" placeholder="Enter date of consulting.." v-model="date">   -->
                </div>

            </div>
        <br>
            <div>
                <button class = "btn btn-success md-2 p-2" v-on:click="send" >Schedule appointment</button>
            </div>

            <br>
            <br>


        </div>

    </div>
</template>

