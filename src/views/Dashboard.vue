<template>
  <div class="dashboard p-5">
    <div class="container">
      <div class="flex justify-between items-center mb-5">
        <h1 class="font-bold text-4xl">Dashboard</h1>
        <el-dropdown v-if="user" trigger="click" @command="handleUserActions">
          <span class="el-dropdown-link">
            {{ user.name }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-lock" command="logout">Cerrar sesión</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
              <el-dropdown class="float-right" trigger="click">
                <span class="el-dropdown-link">
                  Acciones<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">Crear</el-dropdown-item>
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
              <el-dropdown class="float-right" trigger="click">
                <span class="el-dropdown-link">
                  Acciones<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">Crear</el-dropdown-item>
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
              <el-dropdown class="float-right" trigger="click">
                <span class="el-dropdown-link">
                  Acciones<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">Crear</el-dropdown-item>
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
  </div>
</template>

<script>
import { Authentication } from '@/shared/api';

  export default {
    name: 'Dashboard',
    components: {},
    data() {
      return {
        isLoading : {
          tasks: false,
          user: false
        },
        tasks: [],
        user: null,
      };
    },
    async created() {
      await this.loadUser();
      await this.loadTasks();
    },
    methods: {
      handleUserActions(command) {
        console.log(command);
        switch(command) {
          case 'logout':
            Authentication.logout();
            this.$router.push({ name: 'Home' });
            break;
        }
      },
      async loadTasks(showLoading = true) {
        if (showLoading) this.isLoading.tasks = true;
        if (showLoading) this.isLoading.tasks = false;
      },
      async loadUser() {
        this.isLoading.user = true;
        this.user = await Authentication.getUser();
        this.isLoading.user = false;
      }
    },
  };
</script>
