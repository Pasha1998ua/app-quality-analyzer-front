<template>
  <div class="select-number">
    <select :value="value" @change="update">
      <option v-for="num in maxSize" :key="num">
        {{ num }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectNumber',
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  emits: {
    input: null,
  },
  data() {
    return {
      maxSize: 20,
    };
  },
  methods: {
    update(elem) {
      this.$emit('input', Number.parseInt(elem.target.value, 10));
    },
  },
};
</script>

<style lang="scss">
.select-number {
  display: flex;
}
</style>
