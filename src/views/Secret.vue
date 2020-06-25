<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Compras</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Detalle</label>
          <input type="text" class="form-control" v-model="user.detalle" required />
        </div>

        <div class="form-group">
          <label>Fecha</label>
          <input type="text" class="form-control" v-model="user.fecha" required />
        </div>

        <div class="form-group">
          <label>Movimiento</label>
          <input type="text" class="form-control" v-model="user.movimiento" required />
        </div>

        <div class="form-group">
          <label>Cantidad</label>
          <input type="text" v-on:click="a" class="form-control" v-model="user.cantidad" required />
        </div>

        <div class="form-group">
          <label>P Unitario</label>
          <input type="text" v-on:click="b" class="form-control" v-model="user.punitario" />
        </div>

        <div class="form-group">
          <label>P total</label>
          <option ><input type="text"  class="form-control" v-model="user.ptotal" />{{totalS}}</option>
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Agregar Compra</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";

export default {
  data() {
    return {
      user: {},
      a: 0,
      b: 0,
      total: 0
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("Compras creado con éxito!");
          this.user.detalle = "";
          this.user.fecha = "";
          this.user.movimiento = "";
          this.user.cantidad = "";
          this.user.punitario = "";
          this.user.ptotal = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    totalS: function() {
      return this.user.cantidad * this.user.punitario;
    }
  },

};
</script>

<style scoped>
</style>