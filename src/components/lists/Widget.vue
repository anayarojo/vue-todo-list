<template>
    <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
            Categorias
            <el-dropdown class="float-right" trigger="click" @command="handleActions">
            <span class="el-dropdown-link">
                Acciones<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus" command="create">Crear</el-dropdown-item>
                <el-dropdown-item icon="el-icon-folder" command="admin">Administrar</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div>
            <div class="text-center">
                <i class="el-icon-notebook-2 text-6xl mb-3"></i>
                <p>Aún no tienes listas registradas</p>
                <el-link class="-mt-1 text-base" type="primary">
                    Nueva
                </el-link>
            </div>
        </div>
    </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ListsWidget',
  props: {
  },
  created() {
      this.listLists();
  },
  computed: {
    ...mapState({
      lists: state => state.lists.all 
    }),
  },
  methods: {
      handleActions(command) {
        switch(command) {
          case 'create':
            this.$router.push({ name: 'Lists' });
            break;
          case 'admin':
            this.$router.push({ name: 'Lists' });
            break;
        }
      },
    ...mapActions('lists', [
      'listLists',
      'createList',
      'updateList',
      'deleteList',
    ]),
  }
};
</script>
