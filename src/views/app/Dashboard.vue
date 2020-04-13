<template>
  <layout name="App">
    <div class="view">
      <app-header title="Tareas"></app-header>
      <el-card class="box-card">
        <el-alert
          title="Caracteristicas en proceso de desarrollo, disculpe las molestias."
          type="info"
          show-icon>
        </el-alert>
        <div slot="header" class="clearfix">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
            <el-breadcrumb-item>Tareas</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <br>
        <div class="xl:w-4/12 lg:w-6/12 md:w-8/12 mt-5 mx-auto">

        </div>
      </el-card>
    </div>
  </layout>
</template>

<script>
import Layout from '@/shared/layout';
import AppHeader from '@/components/AppHeader';


  export default {
    name: 'Dashboard',
    components: {
      Layout,
      AppHeader,
    },
    data() {
      return {};
    },
    methods: {
    },
  };
</script>
