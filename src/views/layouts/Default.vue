<template>
    <div id="app" class="default-layout w-full min-h-screen bg-gray-100" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  props: {
    className: {
        type: String,
        default: '',
    }
  },
};
</script>
