<template>
    <div id="layout" class="web-layout w-full min-h-screen bg-gray-100" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'WebLayout',
  components: {},
  props: {
    className: {
        type: String,
        default: '',
    }
  },
};
</script>
