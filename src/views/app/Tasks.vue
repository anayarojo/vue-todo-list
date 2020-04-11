<template>
  <layout name="App">
    <div class="view">
      <app-header title="Tareas"></app-header>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>Tareas</el-breadcrumb-item>
            <el-breadcrumb-item>Administrar</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="grid">
          
          <el-alert
            title="Caracteristicas en desarrollo, disculpe las molestias."
            type="info"
            show-icon>
          </el-alert>

        </div>
      </el-card>
    </div>
  </layout>
</template>

<script>
import Layout from '@/shared/layout';
import AppHeader from '@/components/AppHeader';

  export default {
    name: 'Tasks',
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
