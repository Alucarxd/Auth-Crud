import Vue from "vue";
import App from "./App.vue"
import firebase from "firebase";
import router from "./router";
import store from "./store";
import axios from "axios";

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


var firebaseConfig = {
  apiKey: "AIzaSyBsjYqupGGuSfIdFsFu_6x8FPL1xc7Kohw",
  authDomain: "inox-auth.firebaseapp.com",
  databaseURL: "https://inox-auth.firebaseio.com",
  projectId: "inox-auth",
  storageBucket: "inox-auth.appspot.com",
  messagingSenderId: "323235144899",
  appId: "1:323235144899:web:73145b98657587667aae76",
  measurementId: "G-8561W0JZ4R"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig); // login & Register

export const db = firebaseApp.firestore(); // Init Database

let app;


firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});