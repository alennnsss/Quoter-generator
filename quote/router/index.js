import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import RegisterView from "../src/views/RegisterView.vue";
import AboutView from "../src/views/AboutView.vue";
import QuoteView from "../src/views/AddQuoteView.vue";
import LoginView from "../src/views/LoginView.vue";

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'main'
    },
    {
        path:'/register',
        component: RegisterView,
        name: 'register'
    },
    {
        path:'/about',
        component: AboutView,
        name: 'about'
    },
    {
        path: '/quote',
        component: QuoteView,
        name: 'quote'
    },
    {
        path: '/login',
        component: LoginView,
        name: 'login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;