<template>
  <div style="background: blue">

    <!--<ConversationContainer-->
      <!--v-for="conId in convoIds"-->
      <!--:conversation="conversations[conId]"-->
      <!--:id="conId"-->
      <!--:key="conId"-->
    <!--/>-->
    <ion-app>
      <ion-page class="show-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Ionic Chat</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <button @click="init">Initialize app base state</button>
          <button @click="fetchConversations">Get</button>
          <ion-list>
            <ion-item v-for="conId in convoIds" :key="conId">
              <ion-label full @click="openMessage(conId)">{{conId}}</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-page>
    </ion-app>
  </div>
</template>

<script>
  import ConversationContainer from './ConversationContainer.vue'
  import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'InitializeData',
    created () {
//      console.log(this.$store.state.db)
//      console.log(this.$store.state.users)
      this.fetchConversations();
    },
    mounted () {
//      this.fetchConversations();
    },
    methods: {
      init () {
        this.$store.dispatch('users/seed')
        this.$store.dispatch('conversations/seed')
      },
      fetchConversations () {
        this.$store.dispatch('users/get')
        this.$store.dispatch('conversations/get')
      },
      openMessage (conversationId) {
        this.$router.push({ path: '/conversations/'+conversationId})
      }
    },
    computed: {
      ...mapState({
        conversations: state => state.conversations.all,
        convoIds: state => state.conversations.allIds
      })
    },
    components: { 'ConversationContainer': ConversationContainer }
  }
</script>

<style lang="stylus">

</style>
