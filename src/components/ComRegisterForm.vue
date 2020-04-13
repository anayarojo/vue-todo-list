<template>
    <el-form ref="registerForm" :model="form" :rules="rules">
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
            <el-input v-model="form.password_confirmation" @keyup.enter.native="submit" 
            type="password" placeholder="Confirmar contraseña" autocomplete="off">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
        </el-form-item>
        <el-form-item class="mt-10">
            <el-button type="primary" @click="submit" round>Crear</el-button>
            <el-button @click="cancel" round>Cancelar</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import Validators from "@/api/validators";

  export default {
    name: 'Register',
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
            this.$refs['registerForm'].validateField('password_confirmation');
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
      };
    },
    methods: {
      submit() {
        this.$refs['registerForm'].validate((valid) => {
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
        this.$refs['registerForm'].resetFields();
      },
    },
  };
</script>
