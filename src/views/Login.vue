<template>
    <div>
        <section>
            <div class="col1">
                <h1>KODEGURU</h1>
                <p>It's a beutiful day</p>
            </div>
            <div class="col2">
                <form @submit.prevent>
                    <h1>Login here and have a blast:</h1>

                    <label for="email">Email</label>
                    <input type="text" v-model.trim="loginForm.email" placeholder="you@email.com" id="email1" />
                    <br>
                    <label for="password1">Password</label>
                    <input type="password" v-model.trim="loginForm.password" placeholder="******" id="password" />
                    <br>
                    <button @click="login" class="button">Log In</button>
                
                    <transition name="fade">
                        <div v-if="signingIn" class="loading">
                            <p>Loading...</p>
                        </div>
                    </transition>

                    <div class="extras">
                        <a>Forgot Password</a>
                        <router-link to="/register">Create an Account</router-link>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    const fb = require('../../firebaseConfig.js')
    export default {
        data(){
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                signingIn: false
            }
        },
        methods: {
            login() {
                this.signingIn = true;
                fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user)
                    this.$store.dispatch('fetchUserProfile')
                    this.$router.push('/home')
                    this.signingIn = false;
                }).catch(err => {
                    this.signingIn = false;
                    console.log('Login Failed: ', err)
                })
            }
        }
    }
</script>

<style scoped>

</style>