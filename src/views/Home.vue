<template>
  <layout name="Web">
    <div class="home p-5">
      <com-task-list uuid="default" />
    </div>
  </layout>
</template>

<script>
import Layout from '@/shared/layout';
import ComTaskList from '@/components/ComTaskList';

export default {
  name: 'Home',
  components: {
    Layout,
    ComTaskList,
  },
  computed: {},
  methods: {},
};
</script>
