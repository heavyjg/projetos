import Vue from 'vue'
import Router from 'vue-router'
import CadastroColaboradores from '@/components/CadastroColaboradores'
import CadastroEPI from '@/components/CadastroEPI'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CadastroColaboradores',
      component: CadastroColaboradores
    },
    {
      path: '/epi/cadastro',
      name: 'CadastroEPI',
      component: CadastroEPI
    }
  ]
})
