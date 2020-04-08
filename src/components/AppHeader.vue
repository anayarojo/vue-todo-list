<template>
    <div class="flex justify-between items-center mb-5">
        <h1 class="font-bold text-4xl">
            {{ title }}
        </h1>
        <el-dropdown v-if="user" trigger="click" @command="handleUserActions">
            <span class="el-dropdown-link">
            {{ user.name }}
            <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-lock" command="logout">Cerrar sesión</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import { Authentication } from '@/shared/api';

export default {
  name: 'AppHeader',
  props: {
    title: {
        type: String,
        default: 'Title',
    },
    className: {
        type: String,
        default: '',
    },
  },
  data() {
    return {
      isLoading : {
        tasks: false,
      },
      user: null,
    };
  },
  async created() {
    await this.loadUser();
  },
  methods: {
    handleUserActions(command) {
      console.log(command);
      switch(command) {
        case 'logout':
          Authentication.logout();
          this.$router.push({ name: 'Home' });
          break;
      }
    },
    async loadUser() {
      this.isLoading.user = true;
      this.user = await Authentication.getUser();
      this.isLoading.user = false;
    }
  },
};
</script>
