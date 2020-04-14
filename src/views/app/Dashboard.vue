<template>
  <layout name="App">
    <div class="view">
      <com-app-header title="Tareas" />
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
            <el-breadcrumb-item>Tareas</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="xl:w-4/12 lg:w-6/12 md:w-8/12 mt-5 mx-auto">
          <com-task-form class="mb-5" shadow="never" @add-task="createTask" />
          <com-task-list class="mb-5" shadow="never" :tasks="tasks" @update-task="updateTask" @delete-task="deleteTask" />
        </div>
      </el-card>
    </div>
  </layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Layout from '@/shared/layout';
import Helper from '@/shared/helper';
import ComAppHeader from '@/components/ComAppHeader';
import ComTaskForm from '@/components/ComTaskForm';
import ComTaskList from '@/components/ComTaskList';

  export default {
    name: 'Dashboard',
    components: {
      Layout,
      ComAppHeader,
      ComTaskForm,
      ComTaskList,
    },
    data() {
      return {};
    },
    mounted() {
      this.loadTasks();
    },
    computed: {
      ...mapGetters('session', [
        'isLogged',
      ]),
      ...mapState({
        tasks: state => state.tasks.all 
      }),
    },
    methods: {
      async loadTasks() {
        const response = await this.$store.dispatch('tasks/listTasks');
        if (!response.success) {
          Helper.handleError(this, response);
        } else {
          Helper.handleSuccess(this, 'Tareas cargadas correctamente.', 'Cargadas');
        }
      },
      async createTask(description) {
        const response = await this.$store.dispatch('tasks/createTask', { form: { description } });
        if (!response.success) {
          Helper.handleError(this, response);
        } else {
          Helper.handleSuccess(this, 'Tarea creada correctamente.', 'Creada');
        }
      },
      async updateTask(task) {
        const response = await this.$store.dispatch('tasks/updateTask', { id: task.id, form: task });
        if (!response.success) {
          Helper.handleError(this, response);
        } else {
          Helper.handleSuccess(this, 'Tarea actualizada correctamente.', 'Actualizada');
        }
      },
      async deleteTask(task) {
        const response = await this.$store.dispatch('tasks/deleteTask',{ id: task.id });
        if (!response.success) {
          Helper.handleError(this, response);
        } else {
          Helper.handleSuccess(this, 'Tarea eliminada correctamente.', 'Eliminada');
        }
      },
    },
  };
</script>
