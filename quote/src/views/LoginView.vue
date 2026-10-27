<template>
    <Header />

    <form class="login" @submit.prevent="submitForm">
        <div class="login-intro">
            <h1>Welcome back</h1>
            <p>Sign in to continue to Quote-generator.</p>
        </div>

        <div class="login-input">
            <h2>Enter email:</h2>
            <input
                v-model="v$.email.$model"
                type="email"
                name="email"
                placeholder="Enter your email"
            >
            <span v-for="error in v$.email.$errors" :key="error.$uid" class="error">
                {{ error.$message }}
            </span>
        </div>

        <div class="login-input">
            <h2>Password</h2>
            <input
                v-model="v$.password.$model"
                type="password"
                name="password"
                placeholder="Enter your password"
            >
            <span v-for="error in v$.password.$errors" :key="error.$uid" class="error">
                {{ error.$message }}
            </span>
        </div>

        <button type="submit">Sign in</button>

        <div class="login-footer">
            <p>Don't have an account?</p>
            <router-link to="/register">Sign up</router-link>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import {
    required,
    email,
    minLength,
    maxLength,
    helpers
} from '@vuelidate/validators'

import Header from '../components/Header.vue'

const form = reactive({
    email: '',
    password: ''
})

const rules = {
    email: {
        required: helpers.withMessage('Email is required', required),
        email: helpers.withMessage(
            'Please enter a valid email address',
            email
        )
    },

    password: {
        required: helpers.withMessage('Password is required', required),
        minLength: helpers.withMessage(
            'Password must be at least 8 characters long',
            minLength(8)
        )
    },
}

const v$ = useVuelidate(rules, form)

async function submitForm() {
    const isValid = await v$.value.$validate()

    if (!isValid) return

    console.log('Registration data:', form)
}
</script>

<style scoped lang="scss">
    .login {
        display: flex;
        flex-direction: column;
        gap: 19px;
        padding: 32px;
        background-color: #FFFFFF;
        border-radius: 8px;
        margin: 0 auto;
        border: 1px solid #E5E5EB;
        height: 643px;
        max-width: 436px;
        &-intro {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        &-input {
            display: flex;
            flex-direction: column;
            gap: 8px;
            h2 {
                font-weight: 600;
                font-size: 13px;
                color: #000000;
            }
        }
        &-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 40px;
            gap: 4px;
        }
    }
    input {
        width: 100%;
        padding: 10px;
        height: 50px;
        border-radius: 8px;
        border: 1px solid #eee;
        background-color: #FFFFFF;
        
    }
    h1 {
        color: #000000;
        font-weight: 700;
        font-size: 26px;

    }
    span {
        color: #000000;
        font-weight: 700;
        font-size: 500;
    }
    p {
        color: #777783;
        font-weight: 400;
        font-size: 14px;
    }
    button {
        border: none;
        background-color: #A8A6FE;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        border-radius: 9px;
        cursor: pointer;
    }
    a {
        color: #4D49FC;
        font-size: 13px;
        font-weight: 600;
    }
    .error {
        color: #e53935;
        font-size: 12px;
        font-weight: 400;
    }

    .register-input input:focus {
        outline: 1px solid #4D49FC;
        border-color: #4D49FC;
    }
</style>