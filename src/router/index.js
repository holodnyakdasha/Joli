import Vue from 'vue'
import Router from 'vue-router'

import AuthContainer from '../components/auth/AuthContainer.vue'
import LoginPage from '../components/auth/LoginPage.vue'
import SignUpPage from '../components/auth/SignUpPage.vue'
import ResetPasswordPage from '../components/auth/ResetPasswordPage.vue'

Vue.use(Router)

const routes = [{
    path: '/account',
    component: AuthContainer,
    props: true,
    children: [
        { path: 'login', name: 'login', component: LoginPage },
        { path: 'signup', name: 'signup', component: SignUpPage },
        { path: 'reset', name: 'reset', component: ResetPasswordPage }
    ]

}]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})