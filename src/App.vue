<template>
  <div id='app' >
      <form v-on:submit.prevent='todoAddTask'>
        <label for='todoAdd'></label>
        <input id='todoAdd' size=50 placeholder="Добавить новую задачу" v-model='todoAddText'>
        <button>Добавить задачу</button>
      </form>
      <ul>
        <li
        is='todo-item'
        v-for='(todo, index) in todoList'
        v-bind:key='todo.id'
        v-bind:title='todo.title'
        v-on:remove='todoList.splice(index, 1)'
        ></li>
      </ul>
    </div>
</template>

<script>
import todoItem from './components/todoItem.vue'

export default {
  name: 'app',
  
  data(){
    return {
        todoAddText: '',
        todoNextIndex: 2
    }
  },
  computed: {
    todoList(){
      return this.$store.getters.TODOS
    }
  },
    methods:{
        todoAddTask: function(){
          this.$store.dispatch('SAVE_TODO',
          {
            id: this.todoNextIndex++,
            title: this.todoAddText
          });
          this.todoAddText = '';
        }
      },
  components: {
    todoItem
  }
}
</script>

<style>

</style>
