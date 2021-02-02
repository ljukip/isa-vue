<template>
  <div id="dermatologist-profile">
        <div>
            <div class="container" id="page-title">
                <h1 style="margin-top: 10px; color: #35424a">
                  Dermatologist <span id="titleEffect">Profile</span>
                </h1>
                <hr style="background: #0bb1bd; height: 1px" />
            </div> 
            <div class="container">
                <form>
                    <fieldset class="form-group">
                        <label style="color: #0bb1bd"> Username </label>
                        <input
                        type="text"
                        class="form-control"
                       
                        
                        />
                    </fieldset>

                    <fieldset>
                        <label style="color: #0bb1bd">First name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                       />
                    </fieldset> 

                    <fieldset>
                        <br />
                        <label style="color: #0bb1bd">Last name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                       />
                    </fieldset>

                    <div class="form-label-group">
                        <br />
                        <label style="color: #0bb1bd">Gender</label>
                        <br />
                        <input type="radio" required value="Male" />
                        Male
                        <input type="radio" required value="Female" />
                       Female
                        <input type="radio" required value="Other" />
                       Other
                       <br />
                       <br />
                    </div>

                    <fieldset class="form-group">
                        <label style="color: #0bb1bd">Phone number:</label>
                        <input type="text" class="form-control"  />
                    </fieldset>

                    <fieldset class="form-group">
                        <label style="color: #0bb1bd">Address:</label>
                        <input type="text" class="form-control" placeholder="Street"
                            />
                        <input type="text" class="form-control" placeholder="City"
                             />
                        <input type="text" class="form-control" placeholder="Zip"
                             />
                    </fieldset>

                    <label style="color: #0bb1bd"> Uvid u radni kalendar  </label>

                    <hr/>
                    <label v-on:click="changePassword()" style="color: #0bb1bd">
                        Password change
                    </label>
                    <hr />

                    <div v-if="passwordChangeClick">
                        <fieldset class="form-group">
                            <label> Old password </label>
                            <input
                            type="password"
                            class="form-control"
                            placeholder="Enter old password"
                            />
                        </fieldset>

                        <fieldset class="form-group">
                             <label> New password </label>
                            <input
                            type="password"
                            class="form-control"
                            placeholder="Enter new password"
                            />
                        </fieldset>

                        <fieldset class="form-group">
                             <label> Repeat new password </label>
                            <input
                            type="password"
                            class="form-control"
                            placeholder="Repeat new password"
                            />
                        </fieldset>

                    </div>

                    <div id="buttonUpdate">
                        <button
                        type="button"
                        class="btn btn-lg btn-success"
                        >
                        Save
                        </button>
                    </div>
                </form>
            </div>   
        </div>
    </div>
</template>
    
 <script>


 export default {
    name: "DermatologistProfile",
   data: function() {
       return {
           passwordChangeClick: false,
       }
   },
   methods: {
       changePassword() {
           if(!this.passwordChangeClick) {
               this.passwordChangeClick = true;
           } else {
               this.passwordChangeClick = false;
           }
       },
       
   },
   
};
 </script>
    
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
</style>