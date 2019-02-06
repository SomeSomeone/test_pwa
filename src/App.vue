<template>
  <div id="app">
    <router-view class="main-parent" name="head"/>
    <div class="big-block">
      <div class="block">
        <router-view class="body-parent" name="body"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
