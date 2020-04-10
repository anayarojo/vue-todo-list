<template>
  <layout name="App">
    <div class="view">
      <app-header title="Dashboard"></app-header>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
            <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="grid grid-cols-3 grid-flow-col gap-4">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              Categorias
              <el-dropdown class="float-right" trigger="click" @command="handleCategoriesActions">
                <span class="el-dropdown-link">
                  Acciones<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus" command="create">Crear</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-folder" command="admin">Administrar</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="flex justify-between items-center">
              <i class="el-icon-notebook-1 text-4xl"></i>
              <h2 class="font-bold text-4xl">0</h2>
            </div>
          </el-card>

          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              Listas
              <el-dropdown class="float-right" trigger="click" @command="handleListsActions">
                <span class="el-dropdown-link">
                  Acciones<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus" command="create">Crear</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-folder" command="admin">Administrar</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="flex justify-between items-center">
              <i class="el-icon-notebook-2 text-4xl"></i>
              <h2 class="font-bold text-4xl">0</h2>
            </div>
          </el-card>

          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              Tareas
              <el-dropdown class="float-right" trigger="click" @command="handleTasksActions">
                <span class="el-dropdown-link">
                  Acciones<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus" command="create">Crear</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-folder" command="admin">Administrar</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="flex justify-between items-center">
              <i class="el-icon-tickets text-4xl"></i>
              <h2 class="font-bold text-4xl">0</h2>
            </div>
          </el-card>

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
      handleCategoriesActions(command) {
        switch(command) {
          case 'create':
            this.$router.push({ name: 'Categories' });
            break;
          case 'admin':
            this.$router.push({ name: 'Categories' });
            break;
        }
      },
      handleListsActions(command) {
        switch(command) {
          case 'create':
            this.$router.push({ name: 'Lists' });
            break;
          case 'admin':
            this.$router.push({ name: 'Lists' });
            break;
        }
      },
      handleTasksActions(command) {
        switch(command) {
          case 'create':
            this.$router.push({ name: 'Tasks' });
            break;
          case 'admin':
            this.$router.push({ name: 'Tasks' });
            break;
        }
      },
    },
  };
</script>
