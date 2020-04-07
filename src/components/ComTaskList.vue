<template>
  <div class="component-task-list" :class="className">
    <com-form @add-new-task="addTask" />
    <com-container>
      <bounce-loader
        class="mx-auto my-3"
        :loading="isLoading.tasks"
        :size="100"
        :color="'#409EFF'"
      />
      <el-card v-if="!isLoading.tasks && tasks && tasks.length > 0" class="box-card" :body-style="{ padding: '20px 0px' }">
        <com-task
          v-for="(task, index) in tasks"
          :key="task.uuid"
          :index="index"
          :task="task"
          :length="tasks.length"
          @update-task="updateTask"
          @delete-task="deleteTask"
        />
      </el-card>
      <div v-if="!isLoading.user" class="text-center mt-3">
        <p>¿Quieres guardar tus listas en la nube?</p>
        <template v-if="!user">
          <p>
            <span>
              <el-link class="-mt-1 text-base" type="primary" @click="$router.push('register')">
                Regístrate
              </el-link>
            </span>
            o
            <span>
              <el-link class="-mt-1 text-base" type="primary" @click="$router.push('login')">
                Inicia sesión
              </el-link>
            </span>
          </p>
        </template>
        <template v-else>
          <p>
            <span>
              <el-link class="-mt-1 text-base" type="primary" @click="$router.push('dashboard')">
                Ir al dashboard
              </el-link>
            </span>
          </p>
        </template>
      </div>
    </com-container>
  </div>
</template>

<script>
import { Authentication } from '@/shared/api';
import Tasks from '@/shared/tasks';
import ComForm from '@/components/ComForm';
import ComTask from '@/components/ComTask';
import ComContainer from '@/components/ComContainer';

export default {
  name: 'ComTaskList',
  components: {
    ComContainer,
    ComForm,
    ComTask,
  },
  props: {
    uuid: {
      type: String,
    },
    className: {
      type: String,
    },
  },
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
    addTask(task) {
      Tasks.addTask(task, this.uuid);
      this.loadTasks(false);
    },
    updateTask(task) {
      Tasks.updateTask(task, this.uuid);
      this.loadTasks(false);
    },
    deleteTask(task) {
      Tasks.deleteTask(task.uuid, this.uuid);
      this.loadTasks(false);
    },
    async loadTasks(showLoading = true) {
      if (showLoading) this.isLoading.tasks = true;
      const group = Tasks.getTasks(this.uuid);
      this.tasks = group.list;
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
