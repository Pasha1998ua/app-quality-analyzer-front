<template>
  <div class="display-calc-result">
    <h3>Init by existing check params</h3>
    <div>
      <button @click="getDataById">Find params by id</button>
      <input v-model="dataReqId" />
    </div>
    <h3>R - matrix</h3>
    <matrix-input :value="rMatrix" @input="rMatrix = $event" />
    <h3>S - matrix</h3>
    <matrix-input :value="sMatrix" @input="sMatrix = $event" />
    <button class="button" @click="makeRequest">Compute results</button>
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
import MatrixInput from '../components/MatrixInput';

export default {
  name: 'DisplayCalcResult',
  components: {
    MatrixTable,
    MatrixInput,
  },
  props: {},
  data() {
    return {
      dataReqId: 0,
      rMatrix: [
        [0, 0],
        [0, 0],
      ],
      sMatrix: [
        [0, 0],
        [0, 0],
      ],
      tMatrix: [[]],
      wMatrix: [[]],
      distribution: [],
    };
  },
  methods: {
    makeRequest() {
      axios({
        method: 'post',
        url: 'http://localhost:8081/calculate/',
        headers: {
          'Content-Type': 'text/plain',
        },
        data: {
          rMatrix: this.rMatrix,
          sMatrix: this.sMatrix,
        },
      })
        .then((res) => {
          if (res && res.data && res.data.result) {
            this.tMatrix = res.data.result.tMatrix;
            this.wMatrix = res.data.result.wMatrix;
            this.distribution = res.data.result.distribution;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getDataById() {
      axios({
        method: 'get',
        url: `http://localhost:8081/get-data-from-base/?id=${this.dataReqId}`,
      })
        .then((res) => {
          if (
            res &&
            res.data &&
            res.data.result &&
            typeof res.data.result === 'object'
          ) {
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

  .button {
    margin: 20px;
  }
}
</style>
