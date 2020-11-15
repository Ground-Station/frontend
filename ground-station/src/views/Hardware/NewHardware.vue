<template>
<sidebar
    pageTitle="Novo hardware"
  >
  <div>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateHardware">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">Hardwares</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('microcontroller')">
                <label for="microcontroller">Nome do microcontrolador</label>
                <md-input name="microcontroller" id="microcontroller" v-model="form.microcontroller" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.microcontroller.required">Nome do microcontrolador é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.microcontroller.minlength">Deve conter no mínimo 6 caracteres.</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-50">
              <md-field :class="getValidationClass('baudrate')">
                <label for="baudrate">Baudrate</label>
                <md-input type="number" id="baudrate" name="baudrate" autocomplete="baudrate" v-model="form.baudrate" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.baudrate.required">Baudrate é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.baudrate.maxlength">Deve conter no máximo 6 caracteres.</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-50">
              <md-field :class="getValidationClass('serialPort')">
                <label for="serial-port">Porta serial</label>
                <md-input name="serial-port" id="serial-port" v-model="form.serialPort" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.serialPort.required">Porta serial é obrigatória.</span>
                <span class="md-error" v-else-if="!$v.form.serialPort.minlength">Deve conter no mínimo 6 caracteres.</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Criar hardware</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="hardwareSaved">Hardware {{ lastHardware }} criado com sucesso!</md-snackbar>
    </form>
  </div>
  </sidebar>
</template>

<script>
  import Sidebar from '../../components/Sidebar.vue'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    components: { Sidebar },
    mixins: [validationMixin],
    data: () => ({
      form: {
        microcontroller: null,
        serialPort: null,
        baudrate: null,
      },
      hardwareSaved: false,
      sending: false,
      lastHardware: null
    }),
    validations: {
      form: {
        microcontroller: {
          required,
          minLength: minLength(6)
        },
        serialPort: {
          required,
          minLength: minLength(6)
        },
        baudrate: {
          required,
          maxLength: maxLength(6)
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
        this.form.baudrate = null
      },
      saveHardware () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastHardware = `${this.form.microcontroller}`
          this.hardwareSaved = true
          this.sending = false
          this.clearForm()
          this.$router.push("/hardwareCommands");
        }, 1500)
      },
      validateHardware () {
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
</style>