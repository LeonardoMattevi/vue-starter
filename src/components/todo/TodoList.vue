<template>
  <div class="list-group">
    <div class="list-group-item" v-for="(todo, index) in list" :key="index">
      <i
        class="fa btn btn-sm"
        :class="{'fa-check-square':todo.doneIt, 'fa-square':!todo.doneIt}"
        @click="todo.doneIt = !todo.doneIt"
      ></i>
      {{todo.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    list: { type: Array, default: () => [] }
  }
};
</script>