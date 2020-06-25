<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Actualizar Compra</h3>
      <form @submit.prevent="onUpdateForm">
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
          <input type="text" class="form-control" v-model="user.cantidad" required />
        </div>

        <div class="form-group">
          <label>P Unitario</label>
          <input type="text" class="form-control" v-model="user.punitario" required />
        </div>

        <div class="form-group">
          <label>P total</label>
          <input type="text" class="form-control" v-model="user.ptotal" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add User</button>
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
      user: {}
    };
  },
  created() {
    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then(doc => {
        this.user = doc.data();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log("Usuario actualizado con éxito!");
          this.$router.push("../views/secret");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>