<template>
	<v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
								<v-icon>fa fa-lock</v-icon>
              </v-toolbar>
              <v-form ref="form" lazy-validation @submit.prevent="login" @keydown="form.onKeydown($event)" >

                <v-card-text class="pb-0 mt-3" >

                  <v-alert :value="alert" type="error" transition="scale-transition" outline >
                    {{message}}
                  </v-alert>
                  
									<v-text-field v-model="form.email" :rules="[rules.emailrequired, rules.email]" label="E-mail" type="email" name="email" required ></v-text-field>
                  
                  <v-text-field v-model="form.password" :append-icon="show ? 'visibility' : 'visibility_off'" :type="show ? 'text' : 'password'" name="password" :rules="[rules.passrequired, rules.min]" label="Password" hint="At least 8 characters" counter @click:append="show = !show" ></v-text-field>

									<v-checkbox v-model="form.remember" label="Remember Me" class="mt-1"></v-checkbox>

                </v-card-text>
                <v-card-actions class="pb-3" >
                  <v-spacer></v-spacer>
                  <v-btn color="error ma-0 mr-3" @click="clear" >
                    <v-icon left>refresh</v-icon>
                    Clear
                  </v-btn>
                  <v-btn color="primary ma-0" :disabled="form.busy" @click="login" >
                    <v-icon left>input</v-icon>
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  // Vform
  import { Form, HasError, AlertError } from 'vform'

  Vue.component(HasError.name, HasError)
  Vue.component(AlertError.name, AlertError)

  export default {
    data () {
      return {
        // Create a new form instance
        form: new Form({
          email: '',
          password: '',
          remember: true,
        }),

        // Validate Form
        show: false,
        checkbox: false,
        errors: '',
        alert: false,
        message: '',
        rules: {
          emailrequired: value => !!value || 'E-mail Required.',
          passrequired: value => !!value || 'Password Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'E-mail must be valid.'
          }
        }


      }
    },

    methods: {
      login () {
        if (this.$refs.form.validate()) {
          // Submit the form via a POST request
          this.form.post('/login')
          .then(({ data }) => {
            window.location.href = '/home';
          }).catch(err => {
              this.errors = err.response.data.errors;
              if (this.errors.email == 'These credentials do not match our records.') {
                this.alert = true;
                this.message = "The email and password you entered don\'t match";
              }else if (this.errors.password != '') {
                this.alert = true;
                this.message = this.errors.password;
              }
          });

        }
        
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
