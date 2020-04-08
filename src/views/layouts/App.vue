<template>
    <div id="app" class="app-layout w-full min-h-screen bg-gray-100" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AppLayout',
  props: {
    className: {
        type: String,
        default: '',
    }
  },
};
</script>
