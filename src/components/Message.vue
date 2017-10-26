<template>
  <div class="message-container">
    <div :class="getPosition">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',

    props: {
      message: {
        type: Object,
        required: true
      }
    },

    computed: {
      getPosition () {
        if (this.message.sender === this.$store.state.users.currentUser) {
          return 'my message'
        } else {
          return 'message'
        }
      }
    }
  }
</script>

<style lang="stylus">
  .my.message
    text-align: right
    padding .25em
  .message-container
    border 1px dotted silver
    border-right none
    border-left none
</style>
