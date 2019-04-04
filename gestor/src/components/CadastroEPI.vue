<template>
<v-form v-model="valid" ref="form" lazy-validation>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex sm12>
        <h2>Cadastro de EPI's</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex (xs6 | md12)>
        <v-text-field label="Modelo do EPI" maxlength=200 v-model="modelo" :rules="nameRules" required></v-text-field>
        <v-text-field label="Categoria do EPI" maxlength=100 v-model="categoria" :rules="cargoRules" required></v-text-field>
        <v-text-field label="Descrição do EPI" maxlength=600 v-model="descricao" :rules="cpfRules" multi-line></v-text-field>
      </v-flex>
      <v-flex (xs6 | md12)>
        <img :src="imageUrl" height="150" v-if="imageUrl" />
        <v-text-field label="Selecione uma imagem" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
        <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm12>
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
    title: "Seleção de Imagem",
    dialog: false,
    imageName: '',
    imageUrl: '',
    imageFile: ''
  }),

  methods: {
    pickFile() {
      this.$refs.image.click()
    },

    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    }
  }
};
</script>
