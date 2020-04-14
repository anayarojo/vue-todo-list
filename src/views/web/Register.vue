<template>
  <div class="register p-5">
    <com-container>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Crear cuenta</span>
          </div>
          <com-register-form @submit="submit" @cancel="cancel" />
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
import { mapActions } from 'vuex';
import Helper from '@/shared/helper';
import ComContainer from '@/components/ComContainer';
import ComRegisterForm from '@/components/ComRegisterForm';

  export default {
    name: 'Register',
    components: {
      ComContainer,
      ComRegisterForm
    },
    methods: {
      async submit(form) {
        const response = await this.register(form);
        if (!response.success) Helper.handleError(this, response);
        this.$router.push('dashboard');
      },
      cancel() {
        this.$router.push({ name: 'Home' })
      },
      ...mapActions('session', [
        'register',
      ]),
    },
  };
</script>
