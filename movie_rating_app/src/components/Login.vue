<template>
<v-form v-model="valid" ref="form" lazy-validation>
  <v-text-field label="Email" v-model="email" :rules="emailRules" required></v-text-field>
  <v-text-field label="Password" v-model="password" required></v-text-field>
  <v-btn @click="submit" :disabled="!valid">
    submit
  </v-btn>
  <v-btn @click="clear">clear</v-btn>
</v-form>
</template>
<script>
  import axios from 'axios';
  import bus from './../bus';

  export default{
    data: () => ({
      valid: true,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'É necessário informar o email!',
        v => /\S+\@\S+\.\S+/.test(v) || 'Email inválido!',
      ],
    }),
    methods: {
      async submit(){
        return axios({
          method: 'post',
          data: {
            email: this.email,
            password: this.password,
          },
          url: 'http://localhost:8081/users/login',
          headers: {
            'Content-type': 'application/json',
          },
        })
        .then((response) => {
          window.localStorage.setItem('auth',response.data.token);
          this.$swal('Ótimo!', 'Você está pronto para começar!', 'success');
          bus.$emit('refreshUser');
          this.$router.push({name: 'Home'});
        })
        .catch((error) => {
          const message = error.response.data.message;
          this.$swal('Oh não!', `${message}`, 'error');
          this.$router.push({name: 'Login'});
        });
      },
      clear() {
        this.$refs.form.reset();
      },
    },
  };
</script>
