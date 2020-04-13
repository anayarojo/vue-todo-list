<template>
    <el-select v-model="value" @change="change" 
        class="w-full" placeholder="Seleccionar categoría" filterable>
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
  name: 'CategorySelector',
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
      this.listCategories();
  },
  computed: {
    ...mapGetters('categories', [
      'options',
    ]),
    ...mapState({
      categories: state => state.categories.all 
    }),
  },
  methods: {
      change(value) {
          this.$emit('change', value);
      },
    ...mapActions('categories', [
      'listCategories',
    ]),
  }
};
</script>
