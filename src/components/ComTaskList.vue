<template>
  <div class="component-task-list">
    <com-form @add-new-task="addTask" />
    <div class="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-9/12 mt-5 mx-auto">
      <bounce-loader
        class="mx-auto my-3"
        :loading="isLoadingTasks"
        :size="100"
        :color="'#409EFF'"
      />
      <!-- eslint-disable-next-line prettier/prettier -->
      <el-card v-if="!isLoadingTasks && tasks && tasks.lenght > 0" class="box-card" :body-style="{ padding: '20px 0px' }">
        <com-task
          v-for="(task, index) in tasks"
          :key="task.uuid"
          :index="index"
          :task="task"
          :length="tasks.length"
          @update-task="updateTask"
        />
      </el-card>
    </div>
  </div>
</template>

<script>
import Storage from '@/shared/storage';
import ComForm from '@/components/ComForm';
import ComTask from '@/components/ComTask';

export default {
  name: 'ComTaskList',
  components: {
    ComForm,
    ComTask,
  },
  props: {
    uuid: {
      type: String,
    },
  },
  data() {
    return {
      isLoadingTasks: false,
      tasks: null,
    };
  },
  created() {
    this.loadTasks();
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
      Storage.addTask(task, this.uuid);
    },
    updateTask(task) {
      Storage.updateTask(task, this.uuid);
    },
    deleteTask(task) {
      Storage.deleteTask(task.uuid, this.uuid);
    },
    loadTasks() {
      this.isLoadingTasks = true;
      const group = Storage.getTasks(this.uuid);
      this.$set(this.tasks, group.list);
      this.isLoadingTasks = false;
    },
  },
};
</script>
