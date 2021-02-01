<template>
  <div id="home">
    <div class="container">
      <h1 style="margin-top: 10px; color: #35424a">
        Welcome <span id="titleEffect">{{ user.username }}</span
        >!
      </h1>
      <hr style="background: #0bb1bd; height: 1px" />
    </div>

    <div v-if="user.role=='PATIENT'">
      <!-- Page Content -->
      <div class="container">
        <div class="row">
          <!-- medications -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="display:inherit; height:30vh;">
              <img
                src="../images/meds.png"
                class="card-img-top"
                style="width: 44px; height: 44px"
                alt="..."
              />
              <div class="card-body text-center">
                <h4 class="card-title mb-0" style="color: #0bb1bd">Medications</h4>
                <div class="card-text text-black-50">
                  <a
                    href="#/reservedMedications"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="list of reserved medications"
                    >list of reserved medications
                  </a>
                  <br>
                  <a
                    href="#/issuedMedications"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="list of issued medications"
                    >list of issued medications
                  </a>
                  <br>
                  <a
                    href="#/pickUpMedication"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="Medication pickup"
                    >Medication pickup
                  </a>
                  <br>
                  <a
                    href="#/perscriptionList"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="perscription list"
                    >My perscription list</a
                  >
                </div>
              </div>
            </div>
          </div>
            <!---pharmacies--->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow" style="display:inherit; height:30vh;">
              <img
                src="../images/pharmacy.png"
                class="card-img-top"
                style="width: 44px; height: 44px"
                alt="..."
              />
              <div class="card-body text-center">
                <h4 class="card-title mb-0" style="color: #0bb1bd">Pharmacies</h4>
                <div class="card-text text-black-50">
                  <a
                    href="#/allPharmacies"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="list of all pharmacies in the system"
                    >List of all pharmacies in the system
                  </a>
                  <br>
                  <a
                    href="#/subscribedPharmacies"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="list of pharmacies I have a subscription to"
                    >List of subscribed pharmacies
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
                <h4 class="card-title mb-0" style="color: #0bb1bd">Dermatology</h4>
                <div class="card-text text-black-50">
                  <a
                    href="#/historyDermatology"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="Passed visites"
                    >Appointment history
                  </a>
                  <br>
                  <a
                    href="#/futureAppointments"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="list of future appointments"
                    >List of future appointments
                  </a>
                  <br>
                  <a
                    href="#/newAppointmentDermatology"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="make a new appointment"
                    >New appointment
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
                  <a
                    href="#/historyPharmacist"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="passed consultations"
                    >Consultations history
                  </a>
                  <br>
                  <a
                    href="#/futureAppointments"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="list of future appointments"
                    >List of future appointments
                  </a>
                  <br>
                  <a
                    href="#/newConsultation"
                    v-if="user.role === 'PATIENT'"
                    data-toggle="tooltip"
                    title="make a new consultation appointment"
                    >New consultation appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        <!-- /.row -->
      </div>
      <!-- /container-->
    </div>
  </div>
  </div>
  <!--Home-->
</template>

<script>
export default {
  data: function () {
    return {
      user: {
        username: "proba",
        role: "PATIENT",
      },
    };
  },
};
</script>