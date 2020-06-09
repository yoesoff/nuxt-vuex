<template>
  <div class="container">
    <div class="f-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">

            <ul class="list-group">
              <li class="list-group-item" v-for="todo in todos" :key="todo">{{todo}}</li>
            </ul>
            
            <form @submit.prevent="sub">
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
        todos: ["Makan nasi", "Minum cola", "Berenang di sungai"]
      }
  },
  methods: {
    sub(){
      if (this.todo) {
        this.todos.push(this.todo)
        this.todo = '';
        alert("Todo saved!")
      } else {
        alert("Cannot empty!")  
      }
      
    }
  },
  components: {
  }
}
</script>

<style>
</style>
