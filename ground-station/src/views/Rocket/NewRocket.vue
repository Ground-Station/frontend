<template>
<sidebar
    pageTitle="Novo foguete"
  >
  <div>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateRocket">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Novo Foguete</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('rocketName')">
                <label for="rocketName">Nome do foguete</label>
                <md-input name="rocketName" id="rocketName" v-model="form.rocketName" :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.rocketName.required">Nome do foguete é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.rocketName.minlength">Deve conter no mínimo 6 caracteres.</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-50">
              <md-field :class="getValidationClass('emptyWeight')">
                <label for="emptyWeight">Peso vazio</label>
                <md-input type="number" id="emptyWeight" name="emptyWeight" autocomplete="emptyWeight" v-model="form.emptyWeight" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.emptyWeight.required">Peso vazio é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.emptyWeight.minLength">Deve conter no mínimo 3 caracteres.</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-50">
              <md-field :class="getValidationClass('fullWeight')">
                <label for="fullWeight">Peso cheio</label>
                <md-input type="number" name="fullWeight" id="fullWeight" v-model="form.fullWeight" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.fullWeight.required">Peso cheio é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.fullWeight.minLength">Deve conter no mínimo 3 caracteres.</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-50">
              <md-switch v-model="form.gps" class="md-primary"
                name="gps" id="gps" >GPS</md-switch>
              <md-switch v-model="form.height" class="md-primary"
                name="height" id="height" >Altitude</md-switch>
              <md-switch v-model="form.velocity" class="md-primary"
                name="velocity" id="velocity" >Velocidade</md-switch>
              <md-switch v-model="form.pressure" class="md-primary"
                name="pressure" id="pressure" >Pressão</md-switch>
            </div>
            <div class="md-layout-item md-small-size-50">
              <md-switch v-model="form.weight" class="md-primary"
                name="weight" id="weight" >Peso</md-switch>
              <md-switch v-model="form.temperature" class="md-primary"
                name="temperature" id="temperature" >Temperature</md-switch>
              <md-switch v-model="form.gyroscope" class="md-primary"
                name="gyroscope" id="gyroscope" >Giroscópio</md-switch>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Criar foguete</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="rocketSaved">Foguete {{ lastRocket }} criado com sucesso!</md-snackbar>
    </form>
  </div>
  </sidebar>
</template>

<script>
  import Sidebar from '../../components/Sidebar.vue'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength
  } from 'vuelidate/lib/validators'
  import * as axios from 'axios'

  export default {
    name: 'FormValidation',
    components: { Sidebar },
    mixins: [validationMixin],
    data: () => ({
      form: {
        rocketName: null,
        fullWeight: null,
        emptyWeight: null,
        gps: true,
        height: true,
        velocity: true,
        pressure: true,
        weight: true,
        temperature: true,
        gyroscope: true
      },
      rocketSaved: false,
      sending: false,
      lastRocket: null,
      rocketId: null
    }),
    validations: {
      form: {
        rocketName: {
          required,
          minLength: minLength(6)
        },
        fullWeight: {
          required,
          minLength: minLength(3)
        },
        emptyWeight: {
          required,
          minLength: minLength(3)
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
        this.form.rocketName = null
        this.form.fullWeight = null
        this.form.emptyWeight = null
      },
      async saveRocket () {
           this.sending = true
           const headers = { 
              "content-type": "application/json"
          };
          const rocket = { nome: this.form.rocketName , pesoVazio: parseFloat(this.form.fullWeight), pesoCheio: parseFloat(this.form.emptyWeight)  };
          await axios.post("http://127.0.0.1:3000/foguetes", rocket, { headers })
          .then(() => {
            console.log("Deu certo!");
          },
          this.$router.push("/newHardware"))
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            console.log(error.response.data);
          });
      },
      validateRocket () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveRocket()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .md-switch {
    display: flex;
  }
</style>