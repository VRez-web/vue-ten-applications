import {
    createRouter,
    createWebHistory
} from 'vue-router'
import DcHearoes from './pages/DcHeroes'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Markdown from './pages/Markdown'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dcHeroes',
        component: DcHearoes
    },
    {
        path: '/calendar',
        component: Calendar
    },
    {
        path: '/markdown',
        component: Markdown
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;