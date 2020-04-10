<template>
  <div class="component-form">
    <com-container>
      <el-card class="box-card">
        <input
          type="text"
          class="w-full outline-none"
          placeholder="¿Qué pendiente hay?"
          v-model="input"
          v-on:keyup.enter="addNewTask"
        />
      </el-card>
    </com-container>
  </div>
</template>

<script>
import Guid from '@/shared/guid';
import ComContainer from '@/components/ComContainer';

export default {
  name: 'ComForm',
  components: {
    ComContainer,
  },
  props: {},
  data() {
    return {
      input: '',
    };
  },
  computed: {},
  methods: {
    addNewTask: function() {
      if (this.input.trim() === '') return;
      this.$emit('add-new-task', {
        uuid: Guid.get(),
        description: this.input,
        completed: false,
      });
      this.input = '';
    },
  },
};
</script>
