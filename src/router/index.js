import Vue from 'vue'
import Router from 'vue-router'

//auth
import AuthContainer from '../components/auth/AuthContainer.vue'
import LoginPage from '../components/auth/LoginPage.vue'
import SignUpPage from '../components/auth/SignUpPage.vue'
import ResetPasswordPage from '../components/auth/ResetPasswordPage.vue'

//profile
import Profile from '../components/profile/Profile.vue'
import Resume from '../components/profile/Resume.vue'


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

    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile',
        props: true,
        children: [
            { path: 'resume', name: 'resume', component: Resume }
        ]
    }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})