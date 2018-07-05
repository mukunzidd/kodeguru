<template>
  <div id="app">
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/login'>login</router-link> |
      <router-link to='/register'>register</router-link> |
      <router-link to='/profile'>profile</router-link> |
      <router-link to='/new'>New post</router-link> |
      <a href="" @click="signOut">Sign Out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
    const fb = require('../firebaseConfig.js')

    export default {
        methods: {
            signOut() {
                fb.auth.signOut().then(() => {
                    this.$store.dispatch('clearData')
                    this.$router.push('/login')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
</style>
