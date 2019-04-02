import Vue from 'vue'
import Router from 'vue-router'
import CadastroColaboradores from '@/components/CadastroColaboradores'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CadastroColaboradores',
      component: CadastroColaboradores
    }
  ]
})
