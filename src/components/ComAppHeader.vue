<template>
    <div class="component-app-header" :class="className">
        <div class="flex justify-between items-center mb-5">
            <h1 class="font-bold text-4xl">
                {{ title }}
            </h1>
            <div class="flex items-center">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <el-dropdown v-if="user" class="ml-3" trigger="click" @command="handleUserActions">
                <span class="el-dropdown-link">
                    {{ user.name }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-lock" command="logout">Cerrar sesión</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'ComAppHeader',
  components: {
  },
  props: {
    title: {
      type: String,
      default: '',
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
      user: state => state.session.user 
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
