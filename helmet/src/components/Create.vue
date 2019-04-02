// Create.vue

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Cadastro de Cliente</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addCliente">
                    <div class="form-group">
                        <label>Nome:</label>
                        <input type="text" class="form-control" v-model="cliente.nome"/>
                    </div>
                    <div class="form-group">
                        <label>Endereço:</label>
                        <input type="text" class="form-control" v-model="cliente.endereco"/>
                    </div>
                    <div class="form-group">
                        <label>Número:</label>
                        <input type="text" class="form-control" v-model="cliente.numero"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Cadastrar Cliente"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            name: 'AddCliente'
        },
        data() {
            return {
                cliente: {}
            }
        },
        methods: {
            addCliente() {
                let uri = 'http://localhost:4000/clientes/add';
                this.axios.post(uri, this.cliente).then((response) => {
                    console.log(response.data)
                });
            }
        }
    }
</script>