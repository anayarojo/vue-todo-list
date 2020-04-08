import Vue from 'vue';

export default {
  name: 'Layout',
  props: {
    name: {
      type: String,
      required: true,
    },
    shared: {
      type: Object,
      required: false,
    },
  },
  created() {
    // Check if the layout component
    // has already been registered.
    if (!Vue.options.components[this.name]) {
      Vue.component(
        this.name,
        () => import(`@/views/layouts/${this.name}.vue`),
      );
    }

    this.$parent.$emit('update:layout', this.name);
    this.$parent.$emit('update:shared', this.shared);
  },
  render() {
    return this.$slots.default[0];
  },
};
