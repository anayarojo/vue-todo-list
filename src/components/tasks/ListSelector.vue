<template>
    <el-select v-model="value" @change="change" 
        class="w-full" placeholder="Seleccionar lista" filterable>
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'ListSelector',
  props: {
    className: {
        type: String,
        default: '',
    }
  },
  data() {
      return {
          value: '',
      };
  },
  created() {
      this.listLists();
  },
  computed: {
    ...mapGetters('lists', [
      'options',
    ]),
    ...mapState({
      lists: state => state.lists.all 
    }),
  },
  methods: {
      change(value) {
          this.$emit('change', value);
      },
    ...mapActions('lists', [
      'listLists',
    ]),
  }
};
</script>
