<template>
  <div class="hello">
    <select v-model="selected">
      <option disabled value="0">Выберите один из вариантов</option>
      <option v-for="curr in currency " :value="curr"  v-bind:key="curr.r030._text">
        {{ curr.txt._text }}
      </option>
    </select>
    <div class="sum">
      Гривна<br>
      <input type="text" v-model="val1">
    </div>
    <div class="sum" v-if="val2name">
      {{val2name}}<br>
      <input type="text" v-model="val2">
    </div>

  </div>
</template>

<script>
import axios from 'axios'
var convert = require('xml-js')

export default {
  name: 'Conv',
  data () {
    return {
      val1: 1,
      currency: [],
      selected: 0
    }
  },
  computed: {
    coefficient: function () {
      return +(this.selected === 0 ? 1 : this.selected.rate._text)
    },
    val2: function () {
      return +this.val1 / this.coefficient
    },
    val2name: function () {
      return (this.selected === 0 ? '' : this.selected.txt._text)
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      var vm = this
      axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange').then(response => {
        var result = convert.xml2js(response.data, {ignoreComment: true, compact: true, textKey: true})
        vm.currency = result.exchange.currency
      })
    }
  }
}
</script>
