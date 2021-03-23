<template>
  <div>
    <h1>Minha Lista de Tarefas!</h1>
    <button @click="handleShowList()">Mostrar Lista</button>
    <br />
    <input type="text" v-focus v-model="state.currentTask" @keyup.enter="add" />
    <ul v-if="state.showList">
      <Item
        v-for="(task, index) in state.tasks"
        :key="`${task}-${index}`"
        :task="task"
        @dblclick="complete(task)"
        @remove="remove"
        class="task-item"
        :class="{
          'line-through': task.isDone
        }"
      />
    </ul>
    <p v-else>Lista de tarefas escondidas</p>
  </div>
</template>

<script>
  import Item from './item'
  import { reactive } from 'vue'
  const focus = {
    inserted: (elem) => {
      elem.focus()
    }
  }
  export default {
    components: { Item },
    directives: {
      focus
    },
    setup() {
      const state = reactive({
        currentTask: '',
        showList: false,
        tasks: [{ title: 'Fazer o curso', isDone: false }]
      })

      function handleShowList() {
        state.showList = !state.showList
      }
      function remove(task) {
        state.tasks = state.tasks.filter((t) => t.title !== task.title)
      }
      function complete(task) {
        state.tasks = state.tasks.map((t) => {
          if (t.title === task.title) {
            return { ...t, isDone: !t.isDone }
          }
          return { ...t }
        })
      }
      function add() {
        state.tasks = [
          ...state.tasks,
          { title: state.currentTask, isDone: false }
        ]
        state.currentTask = ''
      }

      return {
        state,
        add,
        complete,
        remove,
        handleShowList
      }
    }
  }
</script>

<style scoped>
  .line-through {
    text-decoration: line-through;
  }
  .task-item {
    cursor: pointer;
  }
</style>
