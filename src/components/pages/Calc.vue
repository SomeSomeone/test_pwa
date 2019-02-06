<template>
  <div class="hello">
    <br>
    <div class="sum">
      <input type="number" v-model="num1"> +
      <input type="number" v-model="num2"> =
      <input type="number" v-model="sum">
    </div>
    <hr>
    <div class="minus">
      <input type="number" v-model="num1"> -
      <input type="number" v-model="num2"> =
      <input type="number" v-model="minus">
    </div>
    <hr>
    <div class="division">
      <input type="number" v-model="num1"> /
      <input type="number" v-model="num2"> =
      <input type="number" v-model="division">
    </div>
    <hr>
    <div class="multiplication">
      <input type="number" v-model="num1"> *
      <input type="number" v-model="num2"> =
      <input type="number" v-model="multiplication">
    </div>
    <hr>
    <div class="exponentiation">
      <input type="number" v-model="num1"> ^
      <input type="number" v-model="num2"> =
      <input type="number" v-model="exponentiation">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Calc',
  data () {
    return {
      num1: 0,
      num2: 0
    }
  },
  computed: {
    sum: function () {
      return +this.num1 + +this.num2
    },
    minus: function () {
      return +this.num1 - +this.num2
    },
    division: function () {
      return +this.num1 / +this.num2
    },
    multiplication: function () {
      return +this.num1 * +this.num2
    },
    exponentiation: function () {
      return Math.pow(+this.num1, +this.num2)
    }
  }
}
</script>

<style scoped>
  hr{
    border-color: #E53935;
  }
  input{
    width: 5em;
    padding: 5px;
  }
</style>
