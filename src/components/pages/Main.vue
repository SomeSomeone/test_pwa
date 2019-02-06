<template>
  <div class="hello">
    <div class="slides">
      <div class="slide">
        <div class="box">Saple1</div>
        <div class="box">Saple2</div>
        <div class="box">Saple3</div>
        <div class="box">Saple4</div>
        <div class="box">Saple5</div>
        <div class="box">Saple6</div>
        <div class="box">Saple7</div>
        <div class="box">Saple8</div>
        <div class="box">Saple9</div>
        <div class="box">Saple10</div>
      </div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
    <h1>Хей это мой сайт <sub><small>Или приложение</small></sub></h1>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {}
  }
}
</script>
<style scoped>
  div.slide{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
</style>
