import Login from '../components/auth/login.vue'
import Dashboard from '../components/dashboard/dashboard.vue'
import Subject from '../components/subject/subject_list.vue'
import addSubject from '../components/subject/add_subject.vue'
import updateSubject from '../components/subject/updateSubject.vue'
import Level from '../components/level/level_list.vue'
import addLevel from '../components/level/add_level.vue'
import Location from '../components/location/location_list.vue'
import addLocation from '../components/location/add_location.vue'
import Subscription from '../components/subscription/subscription_list.vue'
import addSubscription from '../components/subscription/add_subscription.vue'
import adminUser from '../components/admin_user/user_list.vue'
import addAdminUser from '../components/admin_user/add_user.vue'
import blogCategory from '../components/blog/category.vue'
import addBlogCat from '../components/blog/addCategory.vue'
import Blogs from '../components/blog/blogs.vue'
import addBlogs from '../components/blog/addBlog.vue'
import updateBlogs from '../components/blog/updateBlog.vue'
import Parents from '../components/parent/parent_list.vue'
import ParentsInfo from '../components/parent/parent_info.vue'
import Students from '../components/student/student_list.vue'
import StudentsInfo from '../components/student/student_info.vue'
import Tutors from '../components/tutors/tutor_list.vue'
import TutorsInfo from '../components/tutors/tutor_info.vue'
import TutorsRequest from '../components/tutors/tutor_request.vue'
import TutorsRequestInfo from '../components/tutors/tutor_request_info.vue'

export const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/subject', component: Subject },
    { path: '/addSubject', component: addSubject },
    { path: '/updateSubject', component: updateSubject },
    { path: '/level', component: Level },
    { path: '/addLevel', component: addLevel },
    { path: '/location', component: Location },
    { path: '/addLocation', component: addLocation },
    { path: '/subscription', component: Subscription },
    { path: '/addSubscription', component: addSubscription },
    { path: '/adminUser', component: adminUser },
    { path: '/addAdminUser', component: addAdminUser },
    { path: '/blogCat', component: blogCategory },
    { path: '/addBlogCat', component: addBlogCat },
    { path: '/blogs', component: Blogs },
    { path: '/addBlog', component: addBlogs },
    { path: '/ViewNUpdateBlog', component: updateBlogs },
    { path: '/parents', component: Parents },
    { path: '/parentInfo', component: ParentsInfo },
    { path: '/students', component: Students },
    { path: '/StudentInfo', component: StudentsInfo },
    { path: '/tutor', component: Tutors },
    { path: '/TutorInfo', component: TutorsInfo },
    { path: '/tutorReq', component: TutorsRequest },
    { path: '/tutorReqInfo', component: TutorsRequestInfo },
]
