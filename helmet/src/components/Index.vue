// Index.vue

<template>
    <div>
        <h1>Clientes</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Nome</td>
                <td>Endereco</td>
                <td>Número</td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="cliente in clientes" :key="cliente._id">
                <td>{{ cliente.nome }}</td>
                <td>{{ cliente.endereco }}</td>
                <td>{{ cliente.numero }}</td>
                <td><router-link :to="{name: 'Edit', params: { id: cliente._id }}" class="btn btn-primary">Alterar</router-link></td>
                <td><button class="btn btn-danger"  v-on:click="deleteItem(cliente._id)">Excluir</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                clientes: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                let uri = 'http://localhost:4000/clientes';
                this.axios.get(uri).then((response) => {
                    this.clientes = response.data;
                });
            },
            deleteItem(id)
            {
                let uri = 'http://localhost:4000/clientes/delete/'+id;
                this.clientes.splice(id, 1);
                this.axios.get(uri);
            }
        }
    }
</script>