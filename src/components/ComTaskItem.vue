<template>
  <div class="component-task-item">
    <div class="flex flex-row items-center justify-between px-5">
      <el-checkbox
        v-model="task.completed"
        @change="updateTask"
        class="mr-3" label=""
      />
      <input
        v-model="task.description"
        v-on:keyup.enter="updateTask"
        v-on:change="isEditing = true"
        type="text" class="flex-auto text-left"
        :class="inputClass"
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
  name: 'ComTaskItem',
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
  data() {
    return {
      isEditing: false,
    };
  },
  computed: {
    icon() {
      return this.task.completed === true ? 'el-icon-check' : 'el-icon-minus';
    },
    inputClass() {
      const completed = this.task.completed ? 'line-through' : ''
      const edit = this.isEditing === true ? 'text-gray-500' : 'text-black';
      return `${edit} ${completed}`;
    },
  },
  methods: {
    updateTask() {
      if (this.task.description.trim() === '') return;
      this.$emit('update-task', this.task);
      this.isEditing = false;
    },
    deleteTask() {
      this.$emit('delete-task', this.task);
    },
  },
};
</script>