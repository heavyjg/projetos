<template>

  <div
    id="demo"
    :class="[{'collapsed' : collapsed}]"
  >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <div class="demo">
      <router-view/>
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @collapse="onCollapse"
        @itemClick="onItemClick"
      />
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  name: 'App',
  data () {
    return {
      menu: [
          {
              header: true,
              title: 'Sistema de Gerenciamento',
              // component: componentName
              // visibleOnCollapse: true
          },
          {
              href: '/',
              title: 'Dashboard',
              icon: 'fa fa-area-chart',
              
              disabled: true
              /*
              badge: {
                  text: 'new',
                  // class:''
              }
              */
          },
          {
              title: 'Clientes',
              icon: 'fa fa-user',
              child: [
                  {
                      href: '/create',
                      title: 'Cadastrar',
                  },
                  {
                      href: '/index',
                      title: 'Listar todos',
                  }
              ]
          }
      ],
      collapsed: false,
      themes: ['', 'white-theme'],
      selectedTheme: ''
    }
  },
  methods: {
    onCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      // console.log(event)
      // console.log(item)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}

#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}

.demo {
  padding: 50px;
}

.badge-danger {
  background-color: #ff2a2a;
  color: #fff;
}

.container {
  max-width: 600px;
}

pre {
  color: #2a2a2e;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  overflow: auto;
}
</style>
