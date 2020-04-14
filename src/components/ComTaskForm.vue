<template>
  <div class="component-task-form" :class="className">
    <el-card class="box-card" :shadow="shadow">
      <input v-model="description" v-on:keyup.enter="submit"
        type="text" class="w-full outline-none" placeholder="¿Qué pendiente hay?"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ComTaskForm',
  props: {
    shadow: {
      type: String,
      default: 'always',
    },
    className: {
      type: String,
    },
  },
  data() {
    return {
      description: '',
    };
  },
  methods: {
    submit: function() {
      if (this.description.trim() !== '') {
          this.$emit('add-task', this.description.trim());
          this.description = '';  
      }
    },
  },
};
</script>
