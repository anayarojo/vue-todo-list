<template>
  <div class="home p-5">
    <com-task-list uuid="default" />
  </div>
</template>

<script>
import ComTaskList from '@/components/ComTaskList';

export default {
  name: 'Home',
  components: {
    ComTaskList,
  },
  computed: {},
  methods: {},
};
</script>
