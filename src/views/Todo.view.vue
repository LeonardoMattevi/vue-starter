<template>
  <div class="todoPage">
    <h1>To Do</h1>
    <todo-list :list="todoList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoList from "@/components/todo/TodoList.vue";

export default {
  name: "TodoView",
  data() {
    return {};
  },
  computed: {
    ...mapState("todoModule", {
      todoList: function(state) {
        return state.todoList;
      }
    })
  },
  components: {
    TodoList
  }
};
</script>

