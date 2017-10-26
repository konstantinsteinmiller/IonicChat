<template>
  <div>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Conversation</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ConversationContainer v-if="conversations[conversationId]"
                               :conversation="conversations[conversationId]"
                               :id="conversationId"
                               :key="conversationId"
        />
        <button ion-button
                class="conversation__back-button" @click="goBackToConversationsList">back</button>
      </ion-content>
    </ion-page>
  </div>
</template>

<script>
  import ConversationContainer from './ConversationContainer.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Conversation',
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
      this.fetchConversations();
      this.$forceUpdate()
    },
    methods: {
      goBackToConversationsList () {
        this.$router.push({ path: '/'})
      },
      fetchConversations () {
        this.$store.dispatch('users/get')
        this.$store.dispatch('conversations/get')
      },
    },
    computed: {
      conversationId (){
          console.log('this.$route.params.conversationId: ', this.$route.params.conversationId);
        return (this.$route.params.conversationId) ? this.$route.params.conversationId: ''
      },
      ...mapState({
        conversations: state => state.conversations.all,
        convoIds: state => state.conversations.allIds
      })
    },
    components: { 'ConversationContainer': ConversationContainer }
  }
</script>

<style lang="stylus">
  .conversation
    display flex
    flex-direction column
    justify-content flex-end
    &__back-button
      margin-top 2em
      flex 1 1 auto
</style>
