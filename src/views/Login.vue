<template>
  <div id="login">
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex alignlogin d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Welcome back!</h3>
                  <div class="alert alert-danger" v-if="error">
                    Wrong username or password
                  </div>

                  <form>
                    <div class="form-label-group">
                      <input
                        v-model="user.username"
                        class="form-control"
                        placeholder="username"
                        required
                      />
                      <label />
                    </div>

                    <div class="form-label-group">
                      <input
                        v-model="user.password"
                        type="password"
                        class="form-control"
                        placeholder="password"
                        required
                      />
                      <label />
                    </div>

                    <button
                      type="button"
                      class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      v-on:click="login(user)"
                    >
                      Sign in
                    </button>
                    <router-link to="/signup" class="small" exact
                      >Not Registered?</router-link
                    >
                  </form>
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
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      error: false,
    };
  },
  methods: {
    login: function (user) {
      axios.post("http://localhost:8080/auth/login", {
        username: user.username,
        password: user.password,
      });
    },
  },
};
</script>