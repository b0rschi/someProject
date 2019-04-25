<template>
  <v-card class='mx-3 mb-3' min-width='310px' dark>
  	<v-card-title primary-title>
  		<div>{{title}}</div>
  	</v-card-title>
    <v-card-actions>
    	<v-btn small color='info' v-on:click="$emit('remove')"> удалить</v-btn>
	</v-card-actions>
  </v-card>
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
