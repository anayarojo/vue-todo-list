<template>
  <div class="login p-5">
    <com-container>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Iniciar sesión</span>
        </div>
        <el-form ref="loginForm" :model="form" :rules="rules">
          <el-form-item prop="email">
            <el-input v-model="form.email" type="email" placeholder="Correo electrónico">
              <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" @change="submit"
              type="password" placeholder="Contraseña" show-password>
              <i slot="prefix" class="el-input__icon el-icon-key"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit" round>Iniciar</el-button>
            <el-button @click="cancel" round>Cancelar</el-button>
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
    beforeMount() {
      if (this.$store.getters['session/isLogged']) {
          this.$router.push('dashboard');
      }
    },
    methods: {
      async submit() {
        return this.$refs['loginForm'].validate(async (valid) => {
          if (!valid) return false;
          const response = await this.login(this.form);

          if (!response.success) {
              this.$notify.error({
                title: 'Error',
                duration: 5000,
                message: response.message,
              });
              return false;
          }

          this.$router.push('dashboard');
        });
      },
      reset() {
        this.$refs['loginForm'].resetFields();
      },
      cancel() {
        this.reset();
        this.$router.push({ name: 'Home' })
      },
      ...mapActions('session', [
        'login',
      ]),
    },
  };
</script>
