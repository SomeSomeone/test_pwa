import Vue from 'vue'
import Router from 'vue-router'
import Calc from '@/components/pages/Calc'
import Conv from '@/components/pages/Conv'
import Main from '@/components/pages/Main'
import Chat from '@/components/pages/Chat'
import Head from '@/components/head'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'App',
    components: {
      body: Main,
      head: Head
    }
  },
  {
    path: '/Calc',
    name: 'App',
    components: {
      body: Calc,
      head: Head
    }
  },
  {
    path: '/Conv',
    name: 'App',
    components: {
      body: Conv,
      head: Head
    }
  },
  {
    path: '/Chat',
    name: 'App',
    components: {
      body: Chat,
      head: Head
    }
  }
]
export default new Router({
  routes
})
