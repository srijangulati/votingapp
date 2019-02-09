<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .element_block{
    margin-left: 7%;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .title{
    padding-bottom: 10px;
    font-size: 13px;
    font-family: "sans-serif";
    text-align: left;
  }
  button{
    line-height: 44px;
    border-radius: 2px;
    background-color: #ffbc00;
    color: #fff;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    width: 120px;
    color: #000;
    display: inherit;
  }
</style>
