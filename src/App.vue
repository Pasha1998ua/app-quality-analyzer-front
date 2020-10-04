<template>
  <h1>App</h1>
  <display-calc-result />
</template>

<script>
import DisplayCalcResult from './views/DisplayCalcResult';

export default {
  name: 'App',
  components: {
    DisplayCalcResult,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
