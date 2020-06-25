<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Actualizar Biaticos</h3>
      <form @submit.prevent="onUpdatEdit">
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
          <input type="text" class="form-control" v-model="biatico.cantidad" required />
        </div>

        <div class="form-group">
          <label>P Unitario</label>
          <input type="text" class="form-control" v-model="biatico.punitario" required />
        </div>

        <div class="form-group">
          <label>P total</label>
          <input type="text" class="form-control" v-model="biatico.ptotal" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Editar Biatico</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      biatico: {}
    };
  },
  created() {
    let dbRef = db.collection("biaticos").doc(this.$route.params.id);
    dbRef
      .get()
      .then(doc => {
        this.biatico = doc.data();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    onUpdatEdit(event) {
      event.preventDefault();
      db.collection("biaticos")
        .doc(this.$route.params.id)
        .update(this.biatico)
        .then(() => {
          console.log("Usuario actualizado con éxito!");
          this.$router.push("../views/biaticos");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>