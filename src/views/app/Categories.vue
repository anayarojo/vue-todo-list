<template>
  <layout name="App">
    <div class="view">
      <app-header title="Categorias"></app-header>
      <el-card class="box-card">
        
        <div slot="header" class="clearfix">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
            <el-breadcrumb-item>Categorias</el-breadcrumb-item>
            <el-breadcrumb-item>Administrar</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div>

          <el-alert
            title="Caracteristicas en desarrollo, disculpe las molestias."
            type="info"
            show-icon>
          </el-alert>
          <br>



          <group-form></group-form>

        </div>

      </el-card>
    </div>
  </layout>
</template>

<script>
import Layout from '@/shared/layout';
import AppHeader from '@/components/AppHeader';
import GroupForm from '@/components/GroupForm';

  export default {
    name: 'Categories',
    components: {
      Layout,
      AppHeader,
      GroupForm,
    },
    data() {
      return {};
    },
    methods: {
    },
  };
</script>
