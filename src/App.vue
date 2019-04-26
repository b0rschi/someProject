<template>
  <v-app id='app' >
    <v-toolbar dark color="primary" app>
      <v-toolbar-title class="white--text">TODO List</v-toolbar-title>
       <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>view_list</v-icon>
    </v-btn>
    </v-toolbar>
  <v-content>
    <v-container >
      <v-layout column justify-space-around>
        
          <v-container >
          
            <v-flex xs10 offset-xs1>
              
            <form v-on:submit.prevent='todoAddTask'>
              <v-layout wrap>
                <v-text-field 
                    label="Текст новой задачи"
                    single-line
                    v-model='todoAddText'></v-text-field>
                
             <v-btn type='submit' color='success' large >Добавить задачу</v-btn>
             </v-layout>
            </form>

          </v-flex>
          
          
          </v-container>
        

        <v-layout   row fill-height wrap >
          <todo-item
            v-for='(todo, index) in todoList'
            v-bind:key='todo.id'
            v-bind:title='todo.title'
            v-on:remove='todoList.splice(index, 1)'
          ></todo-item>
        </v-layout>
      </v-layout>
      
    </v-container>
  </v-content>
      
    </v-app>
</template>

<script>
import todoItem from './components/todoItem.vue'

export default {
  name: 'app',
  
  data(){
    return {
        todoAddText: '',
        todoNextIndex: 3
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
