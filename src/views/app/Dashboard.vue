<template>
    <div class="dashboard p-5">
      <div class="container">
        <com-app-header title="Tareas" />
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
                <el-breadcrumb-item>Tareas</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="xl:w-4/12 lg:w-6/12 md:w-8/12 mt-5 mx-auto">
              <com-task-form class="mb-5" shadow="hover" @add-task="createTask" />
              <com-task-list class="mb-5" shadow="hover" :tasks="tasks" @update-task="updateTask" @delete-task="deleteTask" />
            </div>
          </el-card>
        </div>
      </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Helper from '@/shared/helper';
import ComAppHeader from '@/components/ComAppHeader';
import ComTaskForm from '@/components/ComTaskForm';
import ComTaskList from '@/components/ComTaskList';

  export default {
    name: 'Dashboard',
    components: {
      ComAppHeader,
      ComTaskForm,
      ComTaskList,
    },
    data() {
      return {};
    },
    computed: {
      ...mapGetters('session', [
        'isLogged',
      ]),
      ...mapState({
        tasks: state => state.tasks.all 
      }),
    },
    async created() {
      if (this.tasks == null || this.tasks.length == 0) {
        await this.loadTasks();
      }
    },
    methods: {
      async loadTasks() {
        const response = await this.$store.dispatch('tasks/loadTasks');
        if (!response.success) {
          Helper.handleError(this, response);
        } else {
          Helper.handleSuccess(this, 'Tareas listadas correctamente.', 'Tareas listas');
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
