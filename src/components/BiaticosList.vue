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
          <tr v-for="biatico in Biaticos" :key="biatico.key">
            <td>{{ biatico.detalle }}</td>
            <td>{{ biatico.fecha }}</td>
            <td>{{ biatico.movimiento }}</td>
            <td>{{ biatico.cantidad }}</td>
            <td>{{ biatico.punitario}}</td>
            <td>{{ biatico.cantidad * biatico.punitario }}</td>
            <td>
              <router-link
                :to="{name : 'biaticosedit', params: { id: biatico.key }}"
                class="btn btn-primary"
              >Editar</router-link>
              <button @click.prevent="deleteBiaticos(biatico.key)" class="btn btn-danger">Eliminar</button>
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
      Biaticos: []
    };
  },
  created() {
    db.collection("biaticos").onSnapshot(snapshotChange => {
      this.Biaticos = [];
      snapshotChange.forEach(doc => {
        this.Biaticos.push({
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
    deleteBiaticos(id) {
      if (window.confirm("¿De verdad quieres eliminar?")) {
        db.collection("biaticos")
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