<template>
  <div class="component-task-list">
    <div class="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-9/12 mt-5 mx-auto">
      <el-card class="box-card" :body-style="{ padding: '20px 0px' }">
        <com-task
          v-for="(task, index) in tasks"
          :key="task.uuid"
          :index="index"
          :task="task"
          :list="tasks"
        />
      </el-card>
    </div>
  </div>
</template>

<script>
import ComTask from '@/components/ComTask';

export default {
  name: 'ComTaskList',
  components: {
    ComTask,
  },
  props: {
    tasks: {
      type: Array,
    },
  },
};
</script>
