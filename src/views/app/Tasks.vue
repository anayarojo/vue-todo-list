<template>
  <layout name="App" :shared="{ title: 'Tareas' }">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }">Dashboard</el-breadcrumb-item>
          <el-breadcrumb-item>Tareas</el-breadcrumb-item>
          <el-breadcrumb-item>Administrar</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="grid grid-cols-3 grid-flow-col gap-4">
        
        

      </div>
    </el-card>
  </layout>
</template>

<script>
import Layout from '@/shared/layout';

  export default {
    name: 'Tasks',
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
