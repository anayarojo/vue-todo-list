<template>
  <layout name="App">
    <div class="view">
      <app-header title="Dashboard"></app-header>
      <el-card class="box-card">
        <el-alert
          title="Caracteristicas en desarrollo, disculpe las molestias."
          type="info"
          show-icon>
        </el-alert>
        <div slot="header" class="clearfix">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
            <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <br>
        <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-4">

          <categories-widget/>
          <lists-widget/>
          <tasks-widget/>

        </div>
      </el-card>
    </div>
  </layout>
</template>

<script>
import Layout from '@/shared/layout';
import AppHeader from '@/components/AppHeader';
import CategoriesWidget from '@/components/categories/Widget';
import ListsWidget from '@/components/lists/Widget';
import TasksWidget from '@/components/tasks/Widget';

  export default {
    name: 'Dashboard',
    components: {
      Layout,
      AppHeader,
      CategoriesWidget,
      ListsWidget,
      TasksWidget,
    },
    data() {
      return {};
    },
    methods: {
    },
  };
</script>
