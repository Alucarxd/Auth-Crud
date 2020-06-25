<template>
  <div>
    <div class="modal-dialog text-center">
      <div class="col-sm-8 main-section">
        <div class="modal-content">
          <div class="col-12 user-img">
            <img src="../assets/img-user.svg" />
          </div>
          <b-form @submit.prevent="pressed" class="col-12">
            <div class="login form-group ">
              <b-input 
                class="form-control" 
                placeholder="email" 
                v-model="email" />
            </div>
            <div class="password form-group">
              <b-input
                type="password"
                class="form-control"
                placeholder="contraseña"
                v-model="password"
              />
            </div>
            <button class="btn">Ingresar</button>
            <div class="col-12 forgot">
              <a class="text-info">Inox Hierro</a>
            </div>
          </b-form>
          <div class="error" v-if="error">{{error.message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase/";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "secret" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  margin: 0 auto;
  margin-top: 130px;
  padding: 0;
}
.modal-content {
  background-color: #3b4652;
  opacity: 0.95;
  padding: 0 18px;
  box-shadow: 0px 0px 3px #848484;
}
.user-img {
  margin-top: -50px;
  margin-bottom: 15px;
}
.user-img img {
  height: 100px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #848484;
}
.form-group input {
  height: 50px;
  border-radius: 5px;
  border: 0;
  font-size: 20px;
}
.b-icon {
  width: 26px;
  height: 22px;
}
.btn {
  background-color: #27c2a5;
  color: #fff;
  font-size: 19px;
  padding: 7px 14px;
  border-radius: 5px;
  border-bottom: 4px solid #219882;
}
.btn:hover,
.btn:focus {
  background-color: #25a890 !important;
  border-bottom: 4px solid #25a890 !important;
}
.forgot {
  padding: 5px 0 25px;
}
.forgot a {
  color: #c2fbfe;
}
.error {
  color: red;
  font-size: 18px;
}
</style>