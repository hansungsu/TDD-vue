<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button :label="args.label" :primary=args.primary />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './stories/Button.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
  },
  data() {
    return {
      args: {
        primary: true,
        label: 'Button11'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
