<template>
  <section class="chat">
    <h1 class="chat__title">Чат в реальном времени</h1>
    <div class="chat__inner">
      <div class="chat__messages">
        <p
          v-for="chat in state.chats"
          :key="chat"
          class="chat__item"
          :class="chat.userId == state.userId ? 'txt-lf' : ''"
        >
          {{ chat.message }}
        </p>
      </div>
      <input
        type="text"
        v-model="state.message"
        placeholder="Сообщение..."
        @keydown.enter="addMessage"
      />
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase, { chatsRef } from "../utilities/firebase";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
    });

    onMounted(async () => {
     

      chatsRef.on("child_added", (snapshot) => {
         state.userId = firebase.auth().currentUser.uid;
         state.chats.push({key:snapshot.key, ... snapshot.val()})
      });
    });

    function addMessage() {
      const newChat =  chatsRef.push();
      newChat.set({
        userId: state.userId,
        message: state.message,
      });
      state.message = "";
    }

    return { state, addMessage };
  },
};
</script>

<style>
.chat {
  max-width: 400px;
  margin: 0 auto;
}
.chat__title {
  text-align: center;
}
.chat__inner {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 10px;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chat__inner input {
  margin-bottom: 10px;
}
.chat__item {
  text-align: center;
  font-size: 1rem;
  text-align: right;
}
.txt-lf {
  text-align: left;
}
</style>