<template>
  <div class="container">
    <b-nav pills >
      <b-nav-item >Conectado</b-nav-item>
      <b-nav-item v-if="loggedIn">Si</b-nav-item>
      <b-nav-item v-else>No</b-nav-item>
      <button class="but btn" @click="signOut">Desconectar</button>
    </b-nav>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
.btn {
  background-color: #c2272f;
  color: #fff;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  border-bottom: 4px solid #d63605;
}
.btn:hover,
.btn:focus {
  background-color: #25a890 !important;
  border-bottom: 4px solid #25a890 !important;
}
</style>