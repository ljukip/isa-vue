<template>
    <div id="pharmacistHome">
        <div class="container">
            <h1 style="margin-top: 10px; color: #35424a">
                Welcome 
            </h1>
          <hr style="background: #0bb1bd; height: 1px" />
        </div>

        <div v-if="user.role=='PHARMACIST'">
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
                               <h4 class="card-title mb-0" style="color: #0bb1bd">Consultations</h4>
                               <div class="card-text text-black-50">
                                   <br />
                                   <a
                                   href="#/scheduleConsultation"
                                   v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="schedule consultation"
                                   >Schedule new consultation
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
                                <h4 class="card-title mb-0" style="color: #0bb1bd">Patients</h4>
                                <div class="card-text text-black-50">
                                   <br />
                                    <a
                                    href="#/listOfPatientsP"
                                    v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="list of patients"
                                    >List of patients
                                    </a>
                                    <br />
                                     <a
                                    href="#/izdavanjeLekovaPacijentima"
                                    v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="izdavanje lekova pacijentima"
                                    >Izdavanje lekova pacijentima
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
                                    <a
                                    href="#/calendar"
                                    v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="calendar"
                                    >Calendar
                                    </a>
                                    <br />
                                    <a
                                    href="#/requestForLeaveP"
                                    v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="request for leave"
                                    >Request for leave
                                    </a>
                                     <br />
                                    <a
                                    href="#/workingHoursPharmacist"
                                    v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="working hours pharmacist"
                                    >Working hours pharmacist
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-0 shadow" style="display:inherit; height:30vh;">
                           <img
                           src="../images/pharmacist.png"
                           class="card-img-top"
                           style="width: 44px; height: 44px"
                            alt="..."
                           />
                           <div class="card-body text-center">
                               <h4 class="card-title mb-0" style="color: #0bb1bd">Pharmacist</h4>
                                <div class="card-text text-black-50">
                                   <br />
                                    <a 
                                    href="#/pharmacistProfile"
                                    v-if="user.role === 'PHARMACIST'"
                                    data-toggle="tooltip"
                                    title="pharmacist profile"
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
        
        role: "PHARMACIST",
      },
    };
  },
};
</script>