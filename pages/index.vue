<template>
  <div class="container">
    <div class="f-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <span> Count: {{todos.length}}, Add click: {{savedTimes}}, Remove click: {{removeddTimes}}</span>
            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos" :key="todo.id">
                <a href="#" @click="remove(todo, index)"> {{ index+1 }}. {{todo.todo}}</a>
              </li>
            </ul>
            
            <form @submit.prevent="save">
              <div class="form-group">
                <input type="text" placeholder="Add a Todo" class="form-control mt-3" v-model="todo">
                <button type="submit" class="btn btn-outline-primary mt-3">Add Todo</button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {
  data() {
      return {
        todo: '',
      }
  },
  computed: {
    todos: function() {
      return this.$store.state.todos
    },
    savedTimes: function() {
      return this.$store.state.clicks.saveCounter
    },
    removeddTimes: function() {
      return this.$store.state.clicks.removeCounter
    },
  },
  mounted(){
    var todos = [];
    firebase.firestore().collection('todos').get().then( (res) => {
      res.forEach((row) => {
        todos.push( {id: row.data().id, todo: row.data().todo} );
      })
      this.$store.commit("setTodos", todos)
    })
  },
  methods: {
    save(){
      if (this.todo) {
        let newTodo = this.todo;
        firebase.firestore().collection('todos').add({}).then((res) => {
          firebase.firestore().collection('todos').doc(res.id).set({
            id: res.id,
            todo: newTodo
          }).then(() => {
            this.$store.commit("addTodo",  {id: res.id, todo: newTodo})
            this.$store.commit("clicks/saveIncrement")
          })
        })

        this.todo = '';
      } else {
        console.log("Cannot empty!", this.todo)  
      }
    },
    remove(todo, index) {
      firebase.firestore().collection('todos').doc(todo.id).delete().then(() => {
        this.$store.commit("removeTodo", index)
        this.$store.commit("clicks/removeIncrement")
      });
      
    }
  },
  components: {
  }
}
</script>

<style>
</style>
