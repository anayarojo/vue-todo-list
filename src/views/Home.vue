<template>
  <div class="home p-5">
    <com-form v-on:add-new-task="addNewTask" />
    <com-task-list :tasks="tasks" />
  </div>
</template>

<script>
import ComForm from '@/components/ComForm';
import ComTaskList from '@/components/ComTaskList';

export default {
  name: 'Home',
  components: {
    ComForm,
    ComTaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {},
  methods: {
    addNewTask: function(task) {
      this.tasks.push(task);
    },
  },
};
</script>
