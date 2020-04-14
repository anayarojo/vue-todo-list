<template>
  <!-- <layout name="Web"> -->
    <div class="home p-5">
      <com-container>
        <com-task-form class="mb-5" @add-task="addTask" />
        <com-task-list class="mb-5" :tasks="tasks" @update-task="updateTask" @delete-task="deleteTask" />
        <com-task-footer :logged="isLogged" />
      </com-container>
    </div>
  <!-- </layout> -->
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
// import Layout from '@/shared/layout';
import ComContainer from '@/components/ComContainer';
import ComTaskForm from '@/components/ComTaskForm';
import ComTaskList from '@/components/ComTaskList';
import ComTaskFooter from '@/components/ComTaskFooter';

export default {
  name: 'Home',
  components: {
    // Layout,
    ComContainer,
    ComTaskForm,
    ComTaskList,
    ComTaskFooter,
  },
  computed: {
    ...mapGetters('session', [
      'isLogged',
    ]),
    ...mapState({
      tasks: state => state.localTasks.all 
    }),
  },
  methods: {
    ...mapActions('localTasks', [
      'addTask',
      'updateTask',
      'deleteTask',
    ]),
  }
};
</script>
