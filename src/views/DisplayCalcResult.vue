<template>
  <div class="display-calc-result">
    <h3>R - matrix</h3>
    <matrix-table :matrix="rMatrix" />
    <h3>S - matrix</h3>
    <matrix-table :matrix="sMatrix" />
    <h3>T - matrix</h3>
    <matrix-table :matrix="tMatrix" />
    <h3>W - matrix</h3>
    <matrix-table :matrix="wMatrix" />
    <h3>Result</h3>
    <div style="width: fit-content">
      <p
        v-for="(row, index) of distribution"
        :key="index"
        style="text-align: left"
      >
        M<sub>{{ index + 1 }}</sub> = {
        <span v-for="val of distribution[index]" :key="val">
          x<sub>{{ val }}</sub>
          ,
        </span>
        }
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MatrixTable from '../components/MatrixTable';

export default {
  name: 'DisplayCalcResult',
  components: {
    MatrixTable,
  },
  props: {},
  data() {
    return {
      rMatrix: [[]],
      sMatrix: [[]],
      tMatrix: [[]],
      wMatrix: [[]],
      distribution: [],
    };
  },
  mounted() {
    axios({
      method: 'post',
      url: 'http://localhost:8081/calculate/',
      headers: {
        'Content-Type': 'text/plain',
      },
      data: {
        rMatrix: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
          [1, 1, 1, 1],
          [0.8, 0.4, 0.5, 0.9],
          [0.7, 0.3, 0.4, 0.8],
          [0.5, 0.8, 0.8, 0.2],
          [0.5, 0.5, 0.5, 0.5],
          [0.6, 0.7, 0.8, 0.5],
          [0.1, 0.1, 0.1, 0.1],
          [0, 0, 1, 1],
        ],
        sMatrix: [
          [0.9, 0.1, 0.5, 0.7],
          [0.5, 0.9, 0.6, 0.6],
          [0.4, 0.9, 0.5, 0.4],
          [0.8, 0.1, 0.5, 0.6],
        ],
      },
    })
      .then((res) => {
        if (res && res.data && res.data.result) {
          this.rMatrix = res.data.result.rMatrix;
          this.sMatrix = res.data.result.sMatrix;
          this.tMatrix = res.data.result.tMatrix;
          this.wMatrix = res.data.result.wMatrix;
          this.distribution = res.data.result.distribution;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style lang="scss">
.display-calc-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 900px;
}
</style>
