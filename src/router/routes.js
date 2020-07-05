import Login from '../components/auth/login.vue'
import Dashboard from '../components/dashboard/dashboard.vue'
import Subject from '../components/subject/subject_list.vue'
import addSubject from '../components/subject/add_subject.vue'

export const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/subject', component: Subject },
    { path: '/addSubject', component: addSubject },
]
