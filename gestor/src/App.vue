<template>
<v-app id="inspire">
  <nprogress-container></nprogress-container>
  <v-navigation-drawer stateless value="true" v-model="drawer" clipped fixed app>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group prepend-icon="fas fa-users" value="true">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Clientes</v-list-tile-title>
          </v-list-tile>
        </template>
        <router-link v-for="(acaoCliente, i) in cliente" :key="i" v-bind:to="{ name: acaoCliente[2] }" class="side_bar_link">
        <v-list-tile >
            <v-list-tile-title v-text="acaoCliente[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="acaoCliente[1]"></v-icon>
            </v-list-tile-action>

        </v-list-tile>
        </router-link>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title>
      <v-icon color="blue">fas fa-torii-gate</v-icon> <b>Gestor</b>
    </v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <div id="app">
        <router-view />
      </div>
    </v-container>
  </v-content>
  <v-footer app>
    <span>&copy Helmet System, FACIT, NIEEPE; 2019</span>
  </v-footer>
</v-app>
</template>

<script>
import './assets/stylesheets/main.css';
export default {
  data: () => ({
    drawer: null,
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cliente: [
      ['Cadastrar', 'add', 'CadastroClientes'],
      ['Listar', 'insert_drive_file', 'CadastroColaboradores']
    ]
  }),
  props: {
    source: String
  },

}
</script>
