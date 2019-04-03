<template>
<v-app id="inspire">
  <nprogress-container></nprogress-container>
  <v-navigation-drawer v-model="drawer" clipped fixed app>
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Painel principal</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <router-link v-bind:to="{ name: 'CadastroColaboradores' }">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fas fa-users</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Colaboradores</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
      <router-link v-bind:to="{ name: 'CadastroEPI' }">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>fas fa-user-shield</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>EPI's</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Configurações</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title>
      <v-icon color="blue">fas fa-hard-hat</v-icon> Helmet
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
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
export default {
  components: {
    NprogressContainer
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
