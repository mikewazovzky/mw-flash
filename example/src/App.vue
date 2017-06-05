<template>
  <div id="app">
    <h1>Welcome</h1>
    <h2>Vue <strong>flash</strong> Component Example</h2>
    <blockquote class="quote">
      enter console command: <br><br>
      <code>
        flash({ message: 'Some text', level: 'danger' })
      </code>
    </blockquote>
    <flash data="Some text" events="on"></flash> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

.quote {
  background-color: #eee;
  padding: 10px;
}
</style>
