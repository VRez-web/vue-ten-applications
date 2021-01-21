import {
    createRouter,
    createWebHistory
} from 'vue-router'
import DcHearoes from './pages/DcHeroes'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import ReuseableModal from './pages/ReuseableModal'

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
    {
        path: '/slider',
        component: Slider
    },
    {
        path: '/calculator',
        component: Calculator
    },
    {
        path: '/reuseable-modal',
        component: ReuseableModal
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;