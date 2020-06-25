<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Detalle</th>
            <th>Movimiento</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio de obra</th>
            <th>Abono</th>
            <th>Saldo por Abonar</th>
            <th>Caja</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fabricacion in Fabricacions" :key="fabricacion.key">
            <td>{{ fabricacion.fecha }}</td>
            <td>{{ fabricacion.detalle }}</td>
            <td>{{ fabricacion.movimiento }}</td>
            <td>{{ fabricacion.cantidad }}</td>
            <td>{{ fabricacion.punitario}}</td>
            <td>{{ fabricacion.cantidad * fabricacion.punitario}}</td>
            <td>{{ fabricacion.pabono }}</td>
            <td>{{ fabricacion.obra }}</td>
            <td>{{ fabricacion.pcaja }}</td>

            <td>
              <router-link
                :to="{name : 'fabricacionedit', params: { id: fabricacion.key }}"
                class="btn btn-primary"
              >Edit</router-link>
              <button @click.prevent="deleteUser(fabricacion.key)" class="btn btn-danger">Delete</button>
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
      Fabricacions: []
    };
  },
  created() {
    db.collection("fabricacions").onSnapshot(snapshotChange => {
      this.Fabricacions = [];
      snapshotChange.forEach(doc => {
        this.Fabricacions.push({
          key: doc.id,
          detalle: doc.data().detalle,
          fecha: doc.data().fecha,
          movimiento: doc.data().movimiento,
          cantidad: doc.data().cantidad,
          punitario: doc.data().punitario,
          totalObra: doc.data().totalObra,
          pobra: doc.data().pobra,
          pabonosaldo: doc.data().pabonosaldo,
          pcaja: doc.data().pcaja,
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("¿De verdad quieres eliminar?")) {
        db.collection("fabricacions")
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