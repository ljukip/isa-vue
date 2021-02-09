<template>
  <div id="home">
    <section id="showcase">
      <div class="container">
        <div>
          <h1>Welcome to PHARMA</h1>
          <h5>
            Perscription procurement, pharmaceutical and medical consulting are
            just few of the things a
            <span style="color: #1e878f; font-weight: bold">Pharma</span>
            aplication can offer!
          </h5>
        </div>
      </div>
    </section>

    <section id="newsletter">
      <div class="container">
        <h1>
          Looking for something in particular? Check out our wide offer...
        </h1>
        <form>
          <router-link to="/" class="nav-link" exact>
            <button type="submit" class="btn btn-info" id="btnRegistration">
              Medications
            </button>
          </router-link>
        </form>
      </div>
    </section>

    <section id="boxes">
      <div class="container">
        <div class="box" id="box1">
          <img style="height: 14vh" src="../images/meds.png" />
          <h3>Medications</h3>
          <p>some text...</p>
        </div>
        <div class="box" id="box2">
          <img
            style="height: 14vh; width: 63%"
            src="../images/consultations2.png"
          />
          <h3>Pharmaceutical consulting</h3>
          <p>some text...</p>
        </div>
        <div class="box" id="box3">
          <img style="height: 14vh" src="../images/impression.png" />
          <h3>Tell us your impressions</h3>
          <p>Your opinion matters to us!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeFront",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#home #showcase {
  min-height: 400px;
  background-image: url("../images/cover.png");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #35424a;
}
#home #showcase h1 {
  margin-top: 100px;
  font-size: 55px;
  line-height: 1.5em;
  margin-bottom: 10px;
}

#home #showcase p {
  font-size: 20px;
}

/*Newsletter*/

#home #newsletter {
  padding: 15px;
  background-color: #343a40;
  color: #fff;
}

#home #newsletter form {
  float: right;
  padding-top: 5px;
}
/*Boxes*/

#home #boxes {
  margin-top: 20px;
}

#home #boxes .box {
  float: left;
  width: 33.3%;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
}

#home #boxes .box img {
  width: 100px;
}

#home #boxes #box2 img {
  margin-bottom: 3px;
}

#home #boxes #box3 img {
  margin-bottom: 15px;
}

/*global*/
#home .container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}
</style>