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
                        <div v-if="signingUp" class="loading">
                            <p>Signing You Up...</p>
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
                signingUp: false
            }
        },
        methods: {
            signup() {
                this.signingUp = true;
                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password)
                    .then(res => {
                        this.$router.push('/home')
                    })
                }
            }
    }
</script>

<style scoped>

</style>