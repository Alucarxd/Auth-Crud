<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Biaticos</h3>
      <form @submit.prevent="onFormBiaticos">
        <div class="form-group">
          <label>Detalle</label>
          <input type="text" class="form-control" v-model="biatico.detalle" required />
        </div>

        <div class="form-group">
          <label>Fecha</label>
          <input type="text" class="form-control" v-model="biatico.fecha" required />
        </div>

        <div class="form-group">
          <label>Movimiento</label>
          <input type="text" class="form-control" v-model="biatico.movimiento" required />
        </div>

        <div class="form-group">
          <label>Cantidad</label>
          <input type="text" v-on:click="a" class="form-control" v-model="biatico.cantidad" required />
        </div>

        <div class="form-group">
          <label>P Unitario</label>
          <input type="text" v-on:click="b" class="form-control" v-model="biatico.punitario" />
        </div>

        <div class="form-group">
          <label>P total</label>
          <option ><input type="text"  class="form-control" v-model="biatico.ptotal" />{{totalS}}</option>
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Agregar Biatico</button>
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
      biatico: {},
      a: 0,
      b: 0,
      total: 0
    };
  },
  methods: {
    onFormBiaticos(event) {
      event.preventDefault();
      db.collection("biaticos")
        .add(this.biatico)
        .then(() => {
          alert("Compras creado con éxito!");
          this.biatico.detalle = "";
          this.biatico.fecha = "";
          this.biatico.movimiento = "";
          this.biatico.cantidad = "";
          this.biatico.punitario = "";
          this.biatico.ptotal = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    totalS: function() {
      return this.biatico.cantidad * this.biatico.punitario;
    }
  },

};
</script>

<style scoped>
</style>