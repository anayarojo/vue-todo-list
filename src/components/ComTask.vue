<template>
  <div class="component-task">
    <div class="flex flex-row items-center justify-between px-5">
      <el-checkbox
        v-model="task.completed"
        @change="updateTask"
        class="mr-3"
        label=""
      />
      <input
        type="text"
        class="flex-auto text-left"
        :class="task.completed ? 'line-through' : ''"
        v-model="task.description"
        v-on:keyup.enter="updateTask"
      />
      <i
        v-on:click="deleteTask"
        class="el-icon-close cursor-pointer hover:text-red-500"
      />
    </div>
    <el-divider v-if="index != length - 1" class="my-2" />
  </div>
</template>

<script>
export default {
  name: 'ComTask',
  components: {},
  props: {
    index: {
      type: Number,
    },
    length: {
      type: Number,
    },
    task: {
      type: Object,
    },
  },
  computed: {
    icon() {
      return this.task.completed === true ? 'el-icon-check' : 'el-icon-minus';
    },
  },
  methods: {
    updateTask() {
      if (this.task.description.trim() === '') return;
      this.$emit('update-task', this.task);
    },
    deleteTask() {
      this.$emit('delete-task', this.task);
    },
  },
};
</script>

<style scoped>
textarea:focus,
input:focus {
  outline: none;
}
</style>
