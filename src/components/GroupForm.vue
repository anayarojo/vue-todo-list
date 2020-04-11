<template>
  <div class="group-form">
        <el-card class="box-card" shadow="never">
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="name">
                <el-input v-model="form.name" type="text" placeholder="Nombre">
                    <i slot="prefix" class="el-input__icon el-icon-collection-tag"></i>
                </el-input>
                </el-form-item>
                <el-form-item prop="description">
                <el-input v-model="form.description" @change="submitForm('form')"
                    type="textarea" placeholder="Descripción">
                    <i slot="prefix" class="el-input__icon el-icon-reading"></i>
                </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="()=> {}" round>Guardar</el-button>
                    <el-button @click="()=> {}" round>Buscar</el-button>
                    <el-button @click="()=> {}" round>Limpiar</el-button>
                    <el-button @click="()=> {}" round>Eliminar</el-button>
                </el-form-item>
            </el-form>
        </el-card>
  </div>
</template>

<script>
export default {
  name: 'GroupForm',
  components: {
  },
  props: {},
  data() {
    return {
        form: {
          name: '',
          description: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: 'Favor de ingresar un nombre',
              trigger: 'blur'
            },
          ],
        },
      };
  },
  computed: {},
  methods: {},
};
</script>
