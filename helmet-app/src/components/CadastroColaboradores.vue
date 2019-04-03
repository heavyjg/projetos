<template>
<v-form v-model="valid" ref="form" lazy-validation>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <h2>Cadastro de colaboradores</h2>
        <v-text-field label="Nome do colaborador" maxlength=200 v-model="nome" :rules="nameRules" required></v-text-field>
        <v-text-field label="Cargo do colaborador" maxlength=100 v-model="cargo" :rules="cargoRules" required></v-text-field>
        <v-text-field label="CPF do colaborador" v-model="cpf" :mask="cpfMask" :rules="cpfRules" required></v-text-field>
        <v-text-field name="input-7-1" maxlength=600 label="Função do colaborador" v-model="description" multi-line></v-text-field>
        <v-btn @click="submit" color="info">
          Cadastrar
        </v-btn>
        <v-btn @click="clear">Limpar</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    description: '',
    genre: '',
    release_year: '',
    nameRules: [
      v => !!v || 'É necessário informar um nome!',
      v => v.length == 3 || 'O nome deve ter no mínimo 3 caracteres!',
    ],
    cargoRules: [
      v => !!v || 'É necessário informar o cargo do colaborador!',
      v => v.length == 3 || 'O cargo deve ter no mínimo 3 caracteres!',
    ],
    cpfRules: [
      v => !!v || 'É necessário informar o CPF do colaborador!',
      v => v.length == 11 || 'O CPF deve conter 11 números!',
    ],
    cpfMask: '###.###.###-##',
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        this.$swal("Ótimo!", "Colaborador salvo com sucesso!", "success");
        this.$refs.form.reset();
        return true;
      } else {
        this.$swal("Oops!", "Prencha os campos corretamente!", "error");
        return false;
      }
    },
    clear() {
      if (this.nome || this.cargo || this.cpf) {
        this.$swal("Os dados preenchidos serão perdidos, deseja prosseguir?", {
            buttons: {
              cancel: "Cancelar",
              limpar: {
                text: "Limpar",
                value: "limpar",
              },
            },
          })
          .then((value) => {
            switch (value) {

              case "cancel":
                break;

              case "limpar":
                this.$refs.form.reset();
                break;

              case "default":
                break;
            }
          });
      } else
        this.$refs.form.reset();
    },
  },
};
</script>
