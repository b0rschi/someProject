<template>
  <li>
    {{title}}
    <button v-on:click="$emit('remove')"> удалить задачу</button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
