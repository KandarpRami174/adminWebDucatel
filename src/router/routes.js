import Login from '../components/auth/login.vue'
import Dashboard from '../components/dashboard/dashboard.vue'
import Subject from '../components/subject/subject_list.vue'
import addSubject from '../components/subject/add_subject.vue'
import Level from '../components/level/level_list.vue'
import addLevel from '../components/level/add_level.vue'
import Location from '../components/location/location_list.vue'
import addLocation from '../components/location/add_location.vue'
import Subscription from '../components/subscription/subscription_list.vue'
import addSubscription from '../components/subscription/add_subscription.vue'

export const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/subject', component: Subject },
    { path: '/addSubject', component: addSubject },
    { path: '/level', component: Level },
    { path: '/addLevel', component: addLevel },
    { path: '/location', component: Location },
    { path: '/addLocation', component: addLocation },
    { path: '/subscription', component: Subscription },
    { path: '/addSubscription', component: addSubscription },
]
