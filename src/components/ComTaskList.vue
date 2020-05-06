<template>
  <div class="component-task-list" :class="className">
    <el-card v-if="tasks.length > 0" class="box-card" :shadow="shadow" :body-style="{ padding: '20px 0px' }">
        <com-task
          v-for="(task, index) in tasks" :key="task.id" 
          :index="index" :task="task" :length="tasks.length"
          @update-task="updateTask" @delete-task="deleteTask"
        />
      </el-card>
  </div>
</template>

<script>
import ComTask from '@/components/ComTaskItem';

export default {
  name: 'ComTaskList',
  components: {
    ComTask,
  },
  props: {
    tasks: {
      type: Array,
    },
    shadow: {
      type: String,
      default: 'always',
    },
    className: {
      type: String,
    },
  },
  methods: {
    updateTask(task) {
      return this.$emit('update-task', task);
    },
    deleteTask(task) {
      return this.$emit('delete-task', task);
    }
  }
};
</script>
