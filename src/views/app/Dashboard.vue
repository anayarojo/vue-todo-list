<template>
  <layout name="App" :shared="{ title: 'Dashboard' }">
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
                <el-dropdown-item icon="el-icon-folder">Administrar</el-dropdown-item>
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
                <el-dropdown-item icon="el-icon-folder">Administrar</el-dropdown-item>
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
                <el-dropdown-item icon="el-icon-folder">Administrar</el-dropdown-item>
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
  </layout>
</template>

<script>
import Layout from '@/shared/layout';

  export default {
    name: 'Dashboard',
    components: {
      Layout,
    },
    data() {
      return {};
    },
    created() {
    },
    methods: {
    },
  };
</script>
