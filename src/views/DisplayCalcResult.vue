<template>
  <div class="display-calc-result">
    <matrix-table />
  </div>
</template>

<script>
import MatrixTable from '../components/MatrixTable';

export default {
  name: 'DisplayCalcResult',
  components: {
    MatrixTable,
  },
  props: {},
};
</script>

<style lang="scss">
.display-calc-result {
  width: 100%;
  height: 900px;
}
</style>
