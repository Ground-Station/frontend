<template>
<sidebar
    pageTitle="Novo hardware"
  >
  <div>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateHardware">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">Comandos</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('commandName')">
                <label for="CommandName">Nome do comando</label>
                <md-input name="CommandName" id="CommandName" v-model="form.commandName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.commandName.required">Nome do comando é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.commandName.minlength">Deve conter no mínimo 6 caracteres.</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('commandContent')">
                <label for="commandContent">Conteúdo</label>
                <md-input type="number" id="commandContent" name="commandContent" autocomplete="commandContent" v-model="form.commandContent" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.commandContent.required">Valor do comando é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.commandContent.maxlength">Deve conter no máximo 20 caracteres.</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Criar comando</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="commandSaved">Comando {{ lastCommand }} criado com sucesso!</md-snackbar>
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
        commandName: null,
        commandContent: null,
      },
      commandSaved: false,
      sending: false,
      lastCommand: null
    }),
    validations: {
      form: {
        commandName: {
          required,
          minLength: minLength(6)
        },
        commandContent: {
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
        this.form.commandName = null
        this.form.commandContent = null
      },
      saveCommand () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastCommand = `${this.form.commandName}`
          this.commandSaved = true
          this.sending = false
          this.clearForm()
          this.$router.push("/newHardware");
        }, 1500)
      },
      validateHardware () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveCommand()
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