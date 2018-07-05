<template>
    <div>
        <section>
            <div class="col1">
                <h1>KODEGURU</h1>
                <p>It's a beutiful day</p>
            </div>
            <div class="col2">
                <form @submit.prevent>
                    <label for="name">Name</label>
                    <input v-model.trim="signupForm.name" type="text" placeholder="Name" id="name" />
                    <br>
                    <label for="email2">Email</label>
                    <input v-model.trim="signupForm.email" type="text" placeholder="your@email.com" id="email" />
                    <br>
                    <label for="password2">Password</label>
                    <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password" />
                    <br>
                    <button @click="signup" class="button">Register</button>
                    <transition name="fade">
                        <div  class="loading">
                            <p v-if="signingUp">Loading...</p>
                            <p v-if="signUpError">Error Registering You: {{ signUpError }}</p>
                        </div>
                    </transition>

                    <div class="extras">
                        <a>Back to Log In</a>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    const fb = require('../../firebaseConfig.js')

    export default {
        data() {
            return {
                signupForm: {
                    name: '',
                    email: '',
                    password: ''
                },
                signingUp: false,
                signUpError: ''
            }
        },
        methods: {
            signup() {
                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user)

                    // create user obj
                    fb.usersCollection.doc(user.user.uid).set({
                        name: this.signupForm.name
                    }).then(() => {
                        this.$store.dispatch('fetchUserProfile')
                        this.$router.push('/home')
                    }).catch(err => {
                        console.log(err)
                    })
                }).catch(err => {
                    this.signUpError = err.message
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>