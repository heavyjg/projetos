import Vue from 'vue'
import Router from 'vue-router'
import CadastroClientes from '@/components/CadastroClientes'
import CadastroEPI from '@/components/CadastroEPI'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CadastroClientes',
      component: CadastroClientes
    },
    {
      path: '/epi/cadastro',
      name: 'CadastroEPI',
      component: CadastroEPI
    }
  ]
})
