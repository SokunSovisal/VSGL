<template>
  <v-app>
    <Drawer/>
    <v-content class="mx-4 py-5 mt-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  import Drawer from './components/Drawer'

  export default {
    components: { Drawer },
    name: 'App',
    data () {
      return {
        
      }
    }
  }
</script>
