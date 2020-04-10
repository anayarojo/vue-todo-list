<template>
    <div id="layout" class="app-layout w-full min-h-screen bg-gray-100 p-5" :class="className">
        <div class="container">
          <div class="flex justify-between items-center mb-5">
            <h1 class="font-bold text-4xl">
              {{ shared.title }}
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
          <slot></slot>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'AppLayout',
  props: {
    shared: {
      type: Object,
      default: () => {},
    },
    className: {
        type: String,
        default: '',
    }
  },
  computed: {
    ...mapGetters('session', [
      'isLogged',
    ]),
    ...mapState({
      user: state => state.session.user,
    }),
  },
  methods: {
    handleUserActions(command) {
      switch(command) {
        case 'logout':
          this.logout();
          this.$router.push({ name: 'Home' });
          break;
      }
    },
    ...mapActions('session', [
      'logout',
    ]),
  }
};
</script>
