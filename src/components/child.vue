<template>
  <div>
    <p>data 1: {{ data1 }}</p>
    <p>data 2: {{ data2 }}</p>
  </div>
</template>

<script>
  export default {
    name: "child",
    model: {
      prop: ["data1", "data2"],
    },
    props: ["data1", "data2"],
  };
</script>
