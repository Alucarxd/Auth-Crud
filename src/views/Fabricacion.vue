<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Fabricacion</h3>

      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Fecha</label>
          <input type="text" 
          class="form-control" 
          v-model="fabricacion.fecha" required />
        </div>

        <div class="form-group">
          <label>Detalle</label>
          <input type="text" 
          class="form-control" 
          v-model="fabricacion.detalle" required />
        </div>

        <div class="form-group">
          <label>Movimiento</label>
          <input type="text" 
          class="form-control" 
          v-model="fabricacion.movimiento" required />
        </div>

        <div class="form-group">
          <label>Cantidad</label>
          <input
            type="text"
            class="form-control"
            v-model="fabricacion.cantidad"
            required
          />
        </div>

        <div class="form-group">
          <label>Precio Unitario</label>
          <input type="text" 
          class="form-control" 
          v-model="fabricacion.punitario" />
        </div>

        <div class="form-group">
          <label>Precio total de la obra</label>
          <option>
            <input type="text" 
            class="form-control" 
            v-model="fabricacion.pobra" />
            {{ totalObra }}
          </option>
        </div>

        <div class="form-group">
          <label>Abonar</label>
          <input type="text" 
          class="form-control" 
          v-model="fabricacion.pabono" />
        </div>

        <div class="form-group">
          <label>Saldo Por Abonar</label>
            <input type="text" 
            class="form-control" 
            v-model="fabricacion.pabonosaldo" />
            {{totalAbono}}
        </div>

        <div class="form-group">
          <label>Saldo en caja</label>
          <option>
            <input type="text" 
            class="form-control" 
            v-model="fabricacion.pcaja" />
            {{totalCaja}}
          </option>
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
      fabricacion: {},
      con: 0
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("fabricacions")
        .add(this.fabricacion)
        .then(() => {
          alert("Fabricacion creado con éxito!");
          this.fabricacion.fecha = "";
          this.fabricacion.detalle = "";
          this.fabricacion.movimiento = "";
          this.fabricacion.cantidad = "";
          this.fabricacion.punitario = "";
          this.fabricacion.totalObra = "";
          this.fabricacion.pobra = "";
          this.fabricacion.pabono = "";
          this.fabricacion.pabonosaldo = "";
          this.fabricacion.pcaja = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    totalObra: function() {
      return this.fabricacion.cantidad * this.fabricacion.punitario;
    },
    totalAbono: function() {
      return this.totalObra - this.fabricacion.pabono;
    },
    totalCaja: function() {
      return this.fabricacion.pabono;
    }
  }
};
</script>

<style scoped>
</style>

<!-- cambios solo hasta aqui -->