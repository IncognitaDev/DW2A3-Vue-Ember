<template>
  <li>
    {{ task.title }}
    <button @click="() => $emit('remove', task)">
      &times;
    </button>
  </li>
</template>

<script>
  export default {
    props: ['task'],
    data: () => {
      return {}
    }
  }
</script>

<style></style>
