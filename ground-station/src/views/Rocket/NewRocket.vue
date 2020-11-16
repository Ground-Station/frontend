<template>
<sidebar
    pageTitle="Novo hardware"
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
                <md-input name="rocketName" id="rocketName" v-model="form.rocketName" :disabled="sending" />
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
                <span class="md-error" v-else-if="!$v.form.emptyWeight.minLength">Deve conter no mínimo 5 caracteres.</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-50">
              <md-field :class="getValidationClass('fullWeight')">
                <label for="fullWeight">Peso cheio</label>
                <md-input type="number" name="fullWeight" id="fullWeight" v-model="form.fullWeight" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.fullWeight.required">Peso cheio é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.fullWeight.minLength">Deve conter no mínimo 5 caracteres.</span>
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
      lastRocket: null
    }),
    validations: {
      form: {
        rocketName: {
          required,
          minLength: minLength(6)
        },
        fullWeight: {
          required,
          minLength: minLength(5)
        },
        emptyWeight: {
          required,
          minLength: minLength(5)
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
      saveHardware () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastRocket = `${this.form.rocketName}`
          this.rocketSaved = true
          this.sending = false
          this.clearForm()
          this.$router.push("/newHardware");
        }, 1500)
      },
      validateRocket () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveHardware()
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