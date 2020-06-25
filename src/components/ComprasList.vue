<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Detalle</th>
            <th>Fecha</th>
            <th>Movimiento</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.detalle }}</td>
            <td>{{ user.fecha }}</td>
            <td>{{ user.movimiento }}</td>
            <td>{{ user.cantidad }}</td>
            <td>{{ user.punitario}}</td>
            <td>{{ user.cantidad * user.punitario }}</td>
            <td>
              <router-link
                :to="{name : 'comprasedit', params: { id: user.key }}"
                class="btn btn-primary"
              >Edit</router-link>
              <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      Users: []
    };
  },
  created() {
    db.collection("users").onSnapshot(snapshotChange => {
      this.Users = [];
      snapshotChange.forEach(doc => {
        this.Users.push({
          key: doc.id,
          detalle: doc.data().detalle,
          fecha: doc.data().fecha,
          movimiento: doc.data().movimiento,
          cantidad: doc.data().cantidad,
          punitario: doc.data().punitario,
          ptotal: doc.data().ptotal
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("¿De verdad quieres eliminar?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Documento elminado!");
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
    
  }
  
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>