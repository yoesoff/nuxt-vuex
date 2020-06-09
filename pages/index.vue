<template>
  <div class="container">
    <div class="f-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <span> Count: {{todos.length}}, Add click: {{savedTimes}}, Remove click: {{removeddTimes}}</span>
            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos" :key="todo">
                <a href="#" @click="remove(index)">{{todo}}</a>
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
      return this.$store.state.clicks.saveCounter;
    },
    removeddTimes: function() {
      return this.$store.state.clicks.removeCounter;
    },
  },
  mounted(){
    console.log("All todos", this.$store.state.todos);
  },
  methods: {
    save(){
      if (this.todo) {

        this.$store.commit("addTodo", this.todo);
        this.$store.commit("clicks/saveIncrement");

        this.todo = '';
      } else {
        console.log("Cannot empty!", this.todo)  
      }
      
    },
    remove(index) {
      this.$store.commit("removeTodo", index);
      this.$store.commit("clicks/removeIncrement");
    }
  },
  components: {
  }
}
</script>

<style>
</style>
