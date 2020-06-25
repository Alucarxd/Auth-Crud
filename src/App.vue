<template>
  <div id="app">
    <b-navbar class="text-center" toggleable="md" type="dark" variant="info" id="nav">
      <b-container>
        <b-navbar-brand href="#">Inox Hierro</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/register">Registar</b-nav-item>
            <b-nav-item-dropdown text="Opciones" right>
              <b-dropdown-item to="/secret">Compras</b-dropdown-item>
              <b-dropdown-item to="/fabricacion">Fabricacion</b-dropdown-item>
              <b-dropdown-item to="/biaticos">Biaticos</b-dropdown-item>
              <b-dropdown-item to="/personal">Personal</b-dropdown-item>
              <b-dropdown-item to="/stock">Stock</b-dropdown-item>
              <b-dropdown-item to="/gpersonal">G.Personales</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Vista" right>
              <b-dropdown-item to="/ComprasList">Compras</b-dropdown-item>
              <b-dropdown-item to="/BiaticosList">Biaticos</b-dropdown-item>
              <b-dropdown-item to="/FabricacionList">Fabricacion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
    <top-header></top-header>
  </div>
</template>
<script>
import TopHeader from "./components/Top-Header";
export default {
  components: { "top-header": TopHeader }
};
</script>

<style lang="scss">
</style>
