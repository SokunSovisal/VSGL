<template>
  <nav>
    <v-toolbar app flat>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>VSGL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey" @click="dialog = true">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

      <v-form action="/logout" method="POST" id="log-out" style="display: none;">
        <v-text-field v-model="csrf_token" type="hidden" name="_token"></v-text-field>
      </v-form>
    </v-toolbar>
    

    <v-dialog v-model="dialog" max-width="295">
      <v-card>
        <v-card-title class="subheading">Are you sure you want to sign out?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" flat="flat" @click="dialog = false" >
            Disagree
            <v-icon right>fa fa-times</v-icon>
          </v-btn>

          <v-btn color="green darken-1" flat="flat"  @click="logout"  >
            Logout
            <v-icon right>exit_to_app</v-icon>
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      floating
      persistent
      mobile-break-point="991"
      width="260"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in navitems "
          :key="item.title"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>

</template>

<script>

  export default {
    data() {
      return {
        drawer: true,
        dialog: false,
        csrf_token : $('meta[name="csrf-token"]').attr('content'),
        navitems: [
          { icon: 'dashboard', title: 'Dashboard', route: '/' },
          { icon: 'fa fa-users', title: 'users', route: '/users' },
          { icon: 'fa fa-user-cog', title: 'userroles', route: '/userroles' }
        ]
      }
    },
    methods: {
      logout(){
        event.preventDefault();
        document.getElementById("log-out").submit();
      }
    }
  }
</script>