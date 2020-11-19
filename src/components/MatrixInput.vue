<template>
  <div class="matrix-input">
    <div class="select-container">
      <select-number class="select" :value="xSize" @input="xSize = $event" />
      <select-number class="select" :value="ySize" @input="ySize = $event" />
    </div>
    <table>
      <tr>
        <th
          v-for="i in value[0].length + 1"
          :key="i"
          :class="{
            ghost: i - 1 === 0,
          }"
        >
          y<sub>{{ i - 1 }}</sub>
        </th>
      </tr>
      <tr v-for="(row, i) of value" :key="i">
        <td>
          x<sub>{{ i + 1 }}</sub>
        </td>
        <td v-for="(cell, j) of row" :key="j">
          <input
            :value="cell"
            @blur="updateMatrix($event, i, j)"
            @keyup.enter="$event.target.blur()"
            @focus="updateMatrix('', i, j)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import SelectNumber from '../components/SelectNumber';

export default {
  name: 'MatrixInput',
  components: {
    SelectNumber,
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return [
          [0, 0],
          [0, 0],
        ];
      },
    },
  },
  emits: {
    input: null,
  },
  data() {
    return {
      xSize: 2,
      ySize: 2,
    };
  },
  watch: {
    xSize() {
      this.initMatrix();
    },
    ySize() {
      this.initMatrix();
    },
  },
  methods: {
    initMatrix() {
      const matrix = [];
      for (let i = 0; i < this.ySize; i += 1) {
        const row = [];
        for (let j = 0; j < this.xSize; j += 1) {
          row[j] = 0;
        }
        matrix[i] = row;
      }
      this.$emit('input', matrix);
    },
    updateMatrix(val, i, j) {
      const matrixCopy = [...this.value];
      let num;
      if (val && val.target) {
        num = parseFloat(val.target.value);
      } else {
        num = NaN;
      }
      matrixCopy[i][j] = Number.isNaN(num) ? null : num;
      this.$emit('input', matrixCopy);
    },
  },
};
</script>

<style lang="scss">
.matrix-input {
  display: flex;
  flex-direction: column;
  align-items: center;

  .select-container {
    display: flex;
    justify-content: space-evenly;
    width: 160px;
    margin-bottom: 20px;
  }

  table {
    border-collapse: collapse;
    border: 1px solid black;
  }

  th,
  td {
    padding: 0;
    border: 1px solid black;
    &:first-child {
      padding: 5px 10px;
      font-weight: 700;
    }

    input {
      margin: 0;
      padding: 5px;
      border: none;
      width: 60px;
      outline: none;
    }
  }

  .ghost {
    opacity: 0;
  }
}
</style>
