<template>
    <el-dialog :title="title" :visible="visible" @close="cancel">
        <el-form ref="dialogForm" :model="form" :rules="rules">
            <el-form-item prop="name">
                <el-input v-model="form.name" type="text" placeholder="Nombre"
                    maxlength="50" show-word-limit>
                    <i slot="prefix" class="el-input__icon el-icon-collection-tag"></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="description">
                <el-input v-model="form.description" @change="submit"
                    type="textarea" placeholder="Descripción"
                    maxlength="250" show-word-limit>
                    <i slot="prefix" class="el-input__icon el-icon-reading"></i>
                </el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancel">
                {{ cancelText }}
            </el-button>
            <el-button type="primary" @click="submit">
                {{ submitText }}
            </el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'GroupDialog',
  props: {
      title: {
          type: String,
          default: 'Title',
      },
      visible: {
          type: Boolean,
          default: false,
      },
      submitText: {
          type: String,
          default: 'Guardar',
      },
      cancelText: {
          type: String,
          default: 'Cancelar',
      },
      form: {
          type: Object,
          default: () => {
              return {
                  name: '',
                  description: '',
              };
          },
      },
      rules: {
          type: Object,
          default: () => {
              return {
                    name: [
                        {
                            required: true,
                            message: 'Favor de ingresar un nombre',
                            trigger: 'change'
                        },
                    ],
              };
          },
      }
  },
  methods: {
      submit() {
        this.$refs['dialogForm'].validate((valid) => {
            if (!valid) return false;
            this.$emit('submit', this.form);
        });
      },
      cancel() {
        this.reset();
        this.$emit('cancel', this.form);
      },
      reset() {
        this.$refs['dialogForm'].resetFields();
      },
  }
};
</script>
