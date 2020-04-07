<template>
  <div class="register p-5">
    <com-container>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Crear cuenta</span>
          </div>
          <el-alert v-if="error"
            class="mb-5"
            :title="error"
            @close="error = null"
            type="error"
            show-icon>
          </el-alert>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="Nombre">
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="form.email" type="email" placeholder="Correo electrónico">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password" type="password" placeholder="Contraseña" autocomplete="off">
                <i slot="prefix" class="el-input__icon el-icon-key"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password_confirmation">
              <el-input v-model="form.password_confirmation" type="password" placeholder="Confirmar contraseña" autocomplete="off">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item class="mt-10">
              <el-button type="primary" @click="submitForm('form')" round>Crear</el-button>
              <el-button @click="cancel('form')" round>Cancelar</el-button>
            </el-form-item>
          </el-form>
        </el-card>
        <div class="text-center mt-3">
        <p>
          ¿Ya tienes una cuenta?
          <span>
            <el-link class="ml-2 -mt-1 text-base" type="primary" @click="$router.push('login')">
              Inicia sesión
            </el-link>
          </span>
        </p>
      </div>
      </com-container>
  </div>
</template>

<script>
import { Validators, Authentication } from "@/shared/api";
import ComContainer from '@/components/ComContainer';

  export default {
    name: 'Register',
    components: {
      ComContainer,
    },
    data() {
      const validateEmailAvailability = (rule, value, callback) => {
        Validators.emailAvailability(value).then((available) => {
          if (available === false) {
            callback(new Error('El correo electrónico ingresado ya se encuentra ocupado'));
          } else {
            callback();
          }
        });
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Favor de ingresar una contraseña'));
        } else if (value.length < 6) {
          callback(new Error('La contraseña debe de tener al menos 6 caracteres'));
        } else {
          if (this.form.password_confirmation !== '') {
            this.$refs.form.validateField('password_confirmation');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Favor de confirmar tu contraseña'));
        } else if (value !== this.form.password) {
          callback(new Error('Las contraseñas no coinciden'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: 'Favor de ingresar tu nombre',
              trigger: 'blur'
            },
          ],
          email: [
            {
              required: true,
              message: 'Favor de ingresar tu correo eletrónico',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: 'Favor de ingresar un correo eletrónico válido',
              trigger: 'blur'
            },
            { validator: validateEmailAvailability, trigger: 'blur' },
          ],
          password: [
            { validator: validatePass, trigger: 'blur' },
          ],
          password_confirmation: [
            { validator: validatePass2, trigger: 'blur' },
          ],
        },
        error: null,
      };
    },
    computed: {},
    methods: {
      async submitForm(formName) {
        return this.$refs[formName].validate(async (valid) => {
          if (!valid) return false;
          if (!await Authentication.register(this.form)) {
              this.error = 'No fue posible crear la cuenta, favor de intentar en otro momento';
              return false;
          }
          this.$router.push('dashboard');
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancel(formName) {
        this.resetForm(formName);
        this.$router.go(-1);
      },
    },
  };
</script>
