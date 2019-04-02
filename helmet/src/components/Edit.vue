// Edit.vue

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Alteração de Cliente</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Nome:</label>
                        <input type="text" class="form-control" v-model="cliente.nome"/>
                    </div>
                    <div class="form-group">
                        <label>Endereço:</label>
                        <input type="text" class="form-control" v-model="cliente.endereco" />
                    </div>
                    <div class="form-group">
                        <label>Número:</label>
                        <input type="text" class="form-control" v-model="cliente.numero" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Alterar Cliente"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                cliente:{}
            }
        },

        created: function(){
            this.getCliente();
        },

        methods: {
            getItem()
            {
                let uri = 'http://localhost:4000/clientes/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.cliente = response.data;
                });
            },

            updateItem()
            {
                let uri = 'http://localhost:4000/clientes/update/' + this.$route.params.id;
                this.axios.post(uri, this.cliente).then((response) => {
                    this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>