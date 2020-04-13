<template>
    <el-form ref="loginForm" :model="form" :rules="rules">
        <el-form-item prop="email">
            <el-input v-model="form.email" type="email" placeholder="Correo electrónico">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="Contraseña" show-password
                @keyup.enter.native="submit">
                <i slot="prefix" class="el-input__icon el-icon-key"></i>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit" round>Iniciar</el-button>
            <el-button @click="cancel" round>Cancelar</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    name: 'ComLoginForm',
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
    methods: {
      submit() {
        this.$refs['loginForm'].validate((valid) => {
            if (valid) {
                this.$emit('submit', this.form);
            }
        });
      },
      cancel() {
        this.reset();
        this.$emit('cancel')
      },
      reset() {
        this.$refs['loginForm'].resetFields();
      },
    },
  };
</script>
