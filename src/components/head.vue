<template>
  <div class="big-block">
    <div class="block">
      <router-link to="/" exact class="logo-svg">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="15 10 24 34" version="1.1">
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M26.864,14.379c0.088,0.025,0.176,0.059,0.263,0.077c0.692,0.152,1.214,0.55,1.543,1.156    c0.276,0.511,0.506,1.048,0.707,1.592c1.634,4.451,3.258,8.907,4.882,13.361c0.143,0.393,0.121,0.445-0.275,0.599    c-0.803,0.312-1.604,0.625-2.406,0.937c-0.305,0.119-0.392,0.081-0.502-0.226c-0.351-0.959-0.701-1.916-1.037-2.878    c-0.064-0.186-0.147-0.261-0.357-0.259c-2.149,0.008-4.299,0.008-6.447,0c-0.193,0-0.281,0.055-0.344,0.237    c-0.346,0.97-0.703,1.934-1.057,2.901c-0.109,0.306-0.193,0.343-0.502,0.223c-0.81-0.313-1.617-0.628-2.428-0.943    c-0.357-0.137-0.393-0.214-0.264-0.571c1.217-3.33,2.434-6.661,3.65-9.993c0.487-1.332,0.971-2.666,1.461-3.997    c0.197-0.527,0.438-1.029,0.826-1.448c0.364-0.393,0.814-0.632,1.347-0.716c0.042-0.006,0.081-0.035,0.124-0.052    C26.319,14.379,26.588,14.379,26.864,14.379z M28.834,25.636c-0.791-2.37-1.57-4.705-2.35-7.042    c-0.02,0.003-0.042,0.004-0.061,0.006c-0.777,2.336-1.557,4.672-2.344,7.036C25.68,25.636,27.235,25.636,28.834,25.636z"/>
              <path d="M26.454,40.895c-2.699,0-5.402,0-8.104,0c-0.351,0-0.397-0.05-0.397-0.401c0-0.912,0-1.822,0-2.733    c0-0.313,0.064-0.384,0.375-0.384c5.42-0.001,10.838-0.001,16.256,0c0.309,0,0.377,0.072,0.377,0.384    c0.003,0.92,0.003,1.839,0,2.759c0,0.313-0.064,0.376-0.379,0.376C31.872,40.895,29.163,40.895,26.454,40.895z"/>
            </g>
          </g>
        </svg>
      </router-link>
      <router-link to="/Calc" exact>Калькулятор</router-link>
      <router-link to="/Conv" exact>Конвектор валют</router-link>
      <router-link to="/Chat" exact>Чат</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {}
  },
  computed: {}
}
</script>

<style scoped>
  .big-block {
    background: #E53935;
  }
  a {
    color: #FFF;
    text-decoration: none;
    padding: 12px 24px;
    font-family: sans-serif;
    font-size: 18px;
    transition: 0.35s ease all ;
  }

  a.router-link-active, a:hover{
    background: #FFF;
    color: #E53935;
  }
  a.logo-svg{
    padding:0 12px;
  }

  a.logo-svg svg{
    width: calc(1em + 24px) ;
    height: calc(1em + 24px) ;
  }
  a.logo-svg svg path{
    fill: #FFF;
    transition: 0.35s ease all ;
  }
  a.logo-svg.router-link-active svg path, a.logo-svg:hover svg path{
    fill: #E53935
  }
  @media only screen and (max-width: 600px) {
    a {
      padding: 12px;
      font-size: 12px;
    }
  }

</style>


