<template>
  <div class="component-task-list" :class="className">
    <com-form @add-new-task="addTask" />
    <com-container>
      <el-card v-if="tasks.length > 0" class="box-card" :body-style="{ padding: '20px 0px' }">
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
      <div class="text-center mt-3">
        <p>¿Quieres guardar tus listas en la nube?</p>
        <template v-if="!isLogged">
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
import { mapGetters, mapActions, mapState } from 'vuex';
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
    className: {
      type: String,
    },
  },
  computed: {
    ...mapGetters('session', [
      'isLogged',
    ]),
    ...mapGetters('tasks', [
      'completedTasks',
      'pendingTasks',
    ]),
    ...mapState({
      tasks: state => state.tasks.all 
    }),
  },
  methods: {
    ...mapActions('tasks', [
      'addTask',
      'updateTask',
      'deleteTask',
    ]),
  }
};
</script>
