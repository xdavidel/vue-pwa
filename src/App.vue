<template>
  <div id="app">
    <header>
      <a class="logo">
        <img src="./assets/logo.png" alt="Vue.js PWA">
      </a>
      <span>Vue.js PWA App</span>       
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
  text-align: center;
}

.logo img {
  height: 45px;
  padding: 6px;
  cursor: pointer;
  float: left;
}

header span {
  font-size: 150%;
  line-height: 2.5;
}
</style>
