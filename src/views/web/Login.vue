<template>
  <div class="login p-5">
    <com-container>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Iniciar sesión</span>
        </div>
        <com-login-form @submit="submit" @cancel="cancel" />
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
import Helper from '@/shared/helper';
import ComContainer from '@/components/ComContainer';
import ComLoginForm from '@/components/ComLoginForm';

  export default {
    name: 'Login',
    components: {
      ComContainer,
      ComLoginForm
    },
    methods: {
      async submit(form) {
        const response = await this.login(form);
        if (!response.success) Helper.handleError(this, response);
        this.$router.push('dashboard');
      },
      cancel() {
        this.$router.push({ name: 'Home' })
      },
      ...mapActions('session', [
        'login',
      ]),
    },
  };
</script>
