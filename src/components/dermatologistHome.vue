<template>
    <div id="dermatologistHome">
        <div class="container">
            <h1 style="margin-top: 10px; color: #35424a">
                Welcome 
            </h1>
          <hr style="background: #0bb1bd; height: 1px" />
        </div>

        <div v-if="user.role=='DERMATOLOGIST'">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-0 shadow" style="display:inherit; height:30vh;" >
                           <img 
                           src="../images/pregled.png"
                           class="card-img-top"
                           style="width: 44px; height: 44px"
                           alt="..."
                           />
                           <div class="card-body text-center">
                               <h4 class="card-title mb-0" style="color: #0bb1bd">Appointments</h4>
                               <div class="card-text text-black-50">
                                  <br/>
                                   <a 
                                   href="#/startAppointment"
                                   v-if="user.role === 'DERMATOLOGIST'"
                                    data-toggle="tooltip"
                                    title="start appointment"
                                   >Start appointment
                                   </a>
                                   <br />
                                   <a
                                   href="#/scheduleAppointment"
                                   v-if="user.role === 'DERMATOLOGIST'"
                                    data-toggle="tooltip"
                                    title="schedule appointment"
                                   >Schedule new appointment
                                   </a>
                               </div> 
                           </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-0 shadow" style="display:inherit; height:30vh;">
                            <img 
                             src="../images/patient.png"
                             class="card-img-top"
                             style="width: 44px; height: 44px"
                             alt="..."
                            />
                            <div class="card-body text-center">
                                <h4 class="card-title mb-0" style="color: #0bb1bd">Petients</h4>
                                <div class="card-text text-black-50">
                                   <br />
                                    <a
                                    href="#/allPatients"
                                    v-if="user.role === 'DERMATOLOGIST'"
                                    data-toggle="tooltip"
                                    title="list of patients"
                                    >List of patients
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                     <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-0 shadow" style="display:inherit; height:30vh;">
                            <img 
                             src="../images/kalendar.png"
                             class="card-img-top"
                             style="width: 44px; height: 44px"
                             alt="..."
                            />
                            <div class="card-body text-center">
                                <h4 class="card-title mb-0" style="color: #0bb1bd">Calendar</h4>
                                <div class="card-text text-black-50">
                                   <br />
                                    <a
                                    href="#/calendar"
                                    v-if="user.role === 'DERMATOLOGIST'"
                                    data-toggle="tooltip"
                                    title="calendar"
                                    >Calendar
                                    </a>
                                    <br />
                                    <a
                                    href="#/requestForLeave"
                                    v-if="user.role === 'DERMATOLOGIST'"
                                    data-toggle="tooltip"
                                    title="request for leave"
                                    >Request for leave
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-0 shadow" style="display:inherit; height:30vh;">
                           <img
                           src="../images/dr.png"
                           class="card-img-top"
                           style="width: 44px; height: 44px"
                            alt="..."
                           />
                           <div class="card-body text-center">
                               <h4 class="card-title mb-0" style="color: #0bb1bd">Dermatologist</h4>
                                <div class="card-text text-black-50">
                                   <br />
                                    <a 
                                    href="#/dermatologistProfile"
                                    v-if="user.role === 'DERMATOLOGIST'"
                                    data-toggle="tooltip"
                                    title="dermatologist profile"
                                    >Profile
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: {
        
        role: "DERMATOLOGIST",
      },
    };
  },
};
</script>