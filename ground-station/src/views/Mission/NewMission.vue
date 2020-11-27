<template>
<sidebar
    pageTitle="Nova missão"
  >
  <div>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="validateMission">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Nova missão</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('missionName')">
                <label for="missionName">Nome da missão</label>
                <md-input name="missionName" id="missionName" v-model="form.missionName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.missionName.required">Nome da missão é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.missionName.minlength">Deve conter no mínimo 6 caracteres.</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('apogee')">
                <label for="apogee">Apogeu esperado</label>
                <md-input type="number" id="apogee" name="apogee" autocomplete="apogee" v-model="form.apogee" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.apogee.required">Apogeu é obrigatório.</span>
                <span class="md-error" v-else-if="!$v.form.apogee.minLength">Deve conter no mínimo 3 caracteres.</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Próximo</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="missionSaved">Foguete {{ lastMission }} criado com sucesso!</md-snackbar>
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
        missionName: null,
        apogee: null
      },
      missionSaved: false,
      sending: false,
      lastMission: null
    }),
    validations: {
      form: {
        missionName: {
          required,
          minLength: minLength(6)
        },
        apogee: {
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
        this.form.missionName = null
        this.form.apogee = null
      },
      async saveMission () {
         this.sending = true
           const headers = { 
              "content-type": "application/json"
          };
          const mission = { apogeuEsperado: parseFloat(this.form.apogee) , nomeMissao: this.form.missionName};
          await axios.post("http://127.0.0.1:3000/missoes", mission, { headers })
          .then(() => {
            console.log("Deu certo!");
          },
          this.$router.push("/mission"))
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            console.log(error.response.data);
          });
      },
      validateMission () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveMission()
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