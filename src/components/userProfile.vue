    <template>
  <div id="user-profile">
    <div>
      <div class="container" id="page-title">
        <h1 style="margin-top: 10px; color: #35424a">
          User <span id="titleEffect">Profile</span>
        </h1>
        <hr style="background: #0bb1bd; height: 1px" />
      </div>
      <div class="container">
        <form>
          <img
            src="../images/profile.png"
            width="66"
            height="66"
            style="position: absolute; left: 14px"
          />
          <fieldset class="form-group">
            <label style="color: #0bb1bd">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="user.username"
              disabled
            />
          </fieldset>

          <fieldset class="form-group">
            <label style="color: #0bb1bd">First name</label>
            <input type="text" class="form-control" v-model="user.firstname" />
          </fieldset>

          <fieldset class="form-group">
            <label style="color: #0bb1bd">Last name</label>
            <input type="text" class="form-control" v-model="user.lastname" />
          </fieldset>

          <div class="form-label-group">
            <label style="color: #0bb1bd">Gender</label>
            <br />
            <input type="radio" v-model="user.gender" required value="Male" />
            Male
            <input type="radio" v-model="user.gender" required value="Female" />
            Female
            <input type="radio" v-model="user.gender" required value="Other" />
            Other
            <br />
            <br />
          </div>

          <fieldset class="form-group">
            <label style="color: #0bb1bd">Phone number:</label>
            <input type="text" class="form-control" v-model="user.phone" />
          </fieldset>

          <fieldset class="form-group">
            <label style="color: #0bb1bd">Address:</label>
            <input
              type="text"
              class="form-control"
              v-model="user.address.streetNum"
            />
            <input
              type="text"
              class="form-control"
              v-model="user.address.city"
            />
            <input
              type="text"
              class="form-control"
              v-model="user.address.zip"
            />
            <input
              type="text"
              class="form-control"
              v-model="user.address.state"
            />
          </fieldset>

          <label style="color: #0bb1bd">Medication alergies:</label>
          <multiselect
            v-model="alergicTo"
            :options="medications"
            :multiple="true"
            :clear-on-select="false"
            :preserve-search="true"
            :searchable="false"
            :close-on-select="false"
            :show-labels="true"
            placeholder="Alergies"
          >
          </multiselect>

          <hr />
          <label style="color: #0bb1bd">Loyalty status:</label>
          <hr />
          <p>points: {{ user.loyalty.points }}</p>
          <p>status: {{ user.loyalty.status }}</p>
          <hr />

          <hr />
          <label v-on:click="changePassword()" style="color: #0bb1bd">
            Password change
          </label>
          <hr />

          <div v-if="passwordChangeClick">
            <fieldset class="form-group">
              <label>Old password</label>
              <input
                type="password"
                class="form-control"
                v-model="changedPassword.oldPassword"
                placeholder="Enter old password"
              />
            </fieldset>

            <fieldset class="form-group">
              <label>New password</label>
              <input
                type="password"
                class="form-control"
                v-model="changedPassword.newPassword"
                placeholder="Enter new password"
              />
            </fieldset>

            <fieldset class="form-group">
              <label>Repeat new password</label>
              <input
                type="password"
                class="form-control"
                v-model="changedPassword.newPasswordRepeat"
                placeholder="Repeat your new password"
              />
            </fieldset>
          </div>

          <div id="buttonUpdate">
            <button
              type="button"
              class="btn btn-lg btn-success"
              v-on:click="save"
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
import Multiselect from "vue-multiselect";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "UserProfile",
  data: function () {
    return {
      user: {
        username: "proba",
        firstname: "proba",
        lastname: "probic",
        gender: "male",
        loyalty: {
          points: 36,
          status: "Gold",
        },
        address: {
          streetNum: "decanska 6",
          city: "Novi Sad",
          zip: "2100",
          state: "Srbija",
        },
        phone: "+381632215468",
      },
      changedPassword: {
        oldPassword: "",
        newPassword: "",
        newPasswordRepeat: "",
      },
      passwordChangeClick: false,
      medications: ["panklav", "diklofen"],
      alergicTo: [],
    };
  },
  components: {
    Multiselect,
  },
  methods: {
    changePassword() {
      if (!this.passwordChangeClick) {
        this.passwordChangeClick = true;
      } else {
        this.passwordChangeClick = false;
      }
    },
    save: function () {
      console.log("in save");
      if (this.user.name == "") {
        console.log("wrong name");
        this.messageVal = "wrongName";
        setTimeout(() => (this.messageVal = ""), 6000);
      } else if (this.user.surname == "") {
        this.messageVal = "wrongSurname";
        setTimeout(() => (this.messageVal = ""), 6000);
      } else if (this.user.gender == "") {
        this.messageVal = "wrongGender";
        setTimeout(() => (this.messageVal = ""), 6000);
      } else if (this.user.username == "") {
        this.messageVal = "wrongUsername";
        setTimeout(() => (this.messageVal = ""), 6000);
      } else if (this.user.password == "") {
        this.messageVal = "wrongPassword";
        setTimeout(() => (this.messageVal = ""), 6000);
      } else {
        if (
          this.changedPassword.oldPassword != "" &&
          this.changedPassword.newPassword !=
            this.changedPassword.newPasswordRepeat
        ) {
          console.log("not a match");
          this.messageVal = "wrongMatch";
          setTimeout(() => (this.messageVal = ""), 6000);
        } else {
          console.log("axois profile put username: " + this.user.username);
          axios
            .put(`rest/profileUser/${this.user.username}`, this.user)
            .then((Responce) => {
              console.log("updated");
              this.messageVal = "SuccesfullUpdate";
              setTimeout(() => (this.messageVal = ""), 6000);
              localStorage.setItem("username", this.user.username);
              localStorage.setItem("role", this.user.role);
              this.user = Responce.data;

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 3500,
              });
              setTimeout(() => window.location.reload(), 3500);
            });
        }
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
</style>