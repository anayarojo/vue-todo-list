<template>
  <div class="login p-5">
    <com-container>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Iniciar sesión</span>
        </div>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="email">
            <el-input v-model="form.email" type="email" placeholder="Correo electrónico">
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" v-on:keyup.enter="submitForm('form')" 
              type="password" placeholder="Contraseña" show-password>
              <i slot="prefix" class="el-input__icon el-icon-key"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')" round>Iniciar</el-button>
            <el-button @click="cancel('form')" round>Cancelar</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="text-center mt-3">
        <p>
          ¿Aún no tienes cuenta?
          <span>
            <el-link class="ml-2 -mt-1 text-base" type="primary" @click="$router.push('register')">Regístrate</el-link>
          </span>
        </p>
      </div>
    </com-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ComContainer from '@/components/ComContainer';

  export default {
    name: 'Login',
    components: {
      ComContainer,
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        rules: {
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
          ],
          password: [
            {
              required: true,
              message: 'Favor de ingresar tu contraseña',
              trigger: 'blur'
            },
          ],
        },
      };
    },
    computed: {},
    methods: {
      async submitForm(formName) {
        return this.$refs[formName].validate(async (valid) => {
          if (!valid) return false;

          if (!await this.login(this.form)) {
              // this.error = 'Usuario y/o contraseña incorrecto, favor de intentar nuevamente.';
              // this.$notify.error({
              //   title: 'Error',
              //   message: 'Usuario y/o contraseña incorrecto, favor de intentar nuevamente.'
              // });
              this.$message({
                showClose: true,
                message: 'Usuario y/o contraseña incorrecto, favor de intentar nuevamente.',
                duration: 5000,
                type: 'error',
              });
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
      ...mapActions('session', [
        'login',
      ]),
    },
  };
</script>
