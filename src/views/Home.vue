<template>
  <div class="home p-5">
    <div class="flex flex-row-reverse">
      <!-- eslint-disable-next-line prettier/prettier -->
      <el-button @click="$router.push('register')" class="ml-3" type="primary" round>Crear cuenta</el-button>
      <!-- eslint-disable-next-line prettier/prettier -->
      <el-button @click="$router.push('login')" round>Iniciar sesión</el-button>
    </div>
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
