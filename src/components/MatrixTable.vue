<template>
  <div class="matrix-table">
    <table>
      <tr>
        <th
          v-for="i in matrix[0].length + 1"
          :key="i"
          :class="{
            ghost: i - 1 === 0,
          }"
        >
          y<sub>{{ i - 1 }}</sub>
        </th>
      </tr>
      <tr v-for="(row, i) of matrix" :key="i">
        <td>
          x<sub>{{ i + 1 }}</sub>
        </td>
        <td v-for="(cell, j) of row" :key="j">
          {{ cell }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MatrixTable',
  props: {
    matrix: {
      type: Array,
      default: () => {
        return [[]];
      },
    },
  },
};
</script>

<style lang="scss">
.matrix-table {
  display: flex;
  justify-content: center;

  table {
    border-collapse: collapse;
    border: 1px solid black;
  }

  th,
  td {
    padding: 5px 10px;
    border: 1px solid black;
    &:first-child {
      font-weight: 700;
    }
  }

  .ghost {
    opacity: 0;
  }
}
</style>
