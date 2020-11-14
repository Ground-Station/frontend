<template>
  <sidebar
    pageTitle="Novo Hardware"
  >
    <div>

      <md-card>
        <md-card-content>
          <form novalidate class="md-layout" @submit.prevent="validateMicrocontroller">
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-100">
                <md-field :class="getValidationClass('microcontroller')">
                  <label for="microcontroller">Nome do micro controlador</label>
                  <md-input name="microcontroller" id="microcontroller" v-model="form.microcontroller" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.microcontroller.required">Nome do microcontrolador é obrigatório.</span>
                  <span class="md-error" v-else-if="!$v.form.microcontroller.minlength">Nome curto demais, deve ter no mínimo 6 caracteres</span>
                </md-field>
              </div>
          
              <div class="md-layout-item md-size-50">
                <md-field :class="getValidationClass('serialPort')">
                  <label for="serialPort">Porta serial</label>
                  <md-input name="serialPort" id="serialPort" v-model="form.serialPort" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.serialPort.required">É necessário haver uma porta serial</span>
                  <span class="md-error" v-else-if="!$v.form.serialPort.minlength">Porta serial inválida</span>
                </md-field>
              </div>

              <div class="md-layout-item md-size-50">
                <md-field :class="getValidationClass('baudrate')">
                  <label for="baudrate">Baudrate</label>
                  <md-input name="baudrate" id="baudrate" v-model="form.baudrate" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.baudrate.required">É necessário haver uma porta serial</span>
                  <span class="md-error" v-else-if="!$v.form.baudrate.minlength">Porta serial inválida</span>
                </md-field>
              </div>

            </div>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
            </md-card-actions>
            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
          </form>
        </md-card-content>
      <!-- Tabela de comandos -->
      <md-table>
        <md-table-toolbar>
          <h1 class="md-title">Users</h1>
        </md-table-toolbar>

        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Name</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>baudrate</md-table-head>
          <md-table-head>Job Title</md-table-head>
        </md-table-row>

        <md-table-row>
          <md-table-cell md-numeric>1</md-table-cell>
          <md-table-cell>alooou Dubbin</md-table-cell>
          <md-table-cell>sdubbin0@geocities.com</md-table-cell>
          <md-table-cell>Male</md-table-cell>
          <md-table-cell>Assistant Media Planner</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell md-numeric>2</md-table-cell>
          <md-table-cell>Odette Demageard</md-table-cell>
          <md-table-cell>odemageard1@spotify.com</md-table-cell>
          <md-table-cell>Female</md-table-cell>
          <md-table-cell>Account Coordinator</md-table-cell>
        </md-table-row>

        <md-table-row>
          <md-table-cell md-numeric>3</md-table-cell>
          <md-table-cell>Vera Taleworth</md-table-cell>
          <md-table-cell>vtaleworth2@google.ca</md-table-cell>
          <md-table-cell>Male</md-table-cell>
          <md-table-cell>Community Outreach Specialist</md-table-cell>
        </md-table-row>
      </md-table>
      </md-card>
    </div>
  </sidebar>
</template>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import Sidebar from '../../components/Sidebar.vue'
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

export default {
    name: 'NewHardware',
    components: { Sidebar },
   mixins: [validationMixin],
    data: () => ({
      form: {
        microcontroller: null,
        serialPort: null,
        baudrate: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        microcontroller: {
          required,
          minLength: minLength(3)
        },
        serialPort: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        baudrate: {
          required
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.microcontroller = null
        this.form.serialPort = null
        this.form.age = null
        this.form.baudrate = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.microcontroller} ${this.form.serialPort}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateMicrocontroller () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>