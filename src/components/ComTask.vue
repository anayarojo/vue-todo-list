<template>
  <div class="component-task">
    <div class="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-9/12 mx-auto">
      <el-card class="box-card">
        <!-- eslint-disable-next-line prettier/prettier -->
        <el-input placeholder="¿Qué pendiente hay?" :clearable="true" v-model="input"></el-input>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTask",
  components: {},
  data() {
    return {
      input: ""
    };
  }
};
</script>
