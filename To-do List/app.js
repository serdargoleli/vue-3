const app = Vue.createApp({
  data() {
    return {
      todoText: "",
      todoList: [],
    };
  },
  methods: {
    addListItem() {
      this.todoList.push(this.todoText);
      this.todoText = "";
    },
  },
}).mount("#app");
