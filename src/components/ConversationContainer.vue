<template>
  <div>
    <Message
      v-for="message in conversation.messages"
      :message="message"
      :key="message.created"
    />
    <br />
    <ion-item>
      <ion-label @click="send(newMessageText)" color="primary">Send</ion-label>
      <ion-input v-model="newMessageText" placeholder="Type something..."  @keyup.enter="send(newMessageText)"></ion-input>
    </ion-item>
  </div>
</template>

<script>
  import Message from './Message.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'ConversationContainer',
    data () {
      return {
        newMessageText: ''
      }
    },
    props: {
      conversation: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },

    created () {
      this.$store.state.db.collection('conversations').doc(this.id).onSnapshot(convo => {
        let source = convo.metadata.hasPendingWrites ? 'Local' : 'Server'

        console.log(`Source ${source}`)

        if (convo && convo.data()) {
          convo.data().messages.forEach(message =>
            this.$store.commit('conversations/ADD_MESSAGE', { conversationId: this.id, message })
          )
        }
      })
    },
    methods: {
      send (newMessageText) {
        this.$store.dispatch('conversations/sendMessage', {
          text: newMessageText,
          created: Date.now(),
          conversationId: this.id,
          sender: this.$store.state.users.currentUser
        })
        this.newMessageText = '';
      }
    },

    components: {
      Message
    }
  }
</script>

<style lang="stylus">

</style>
