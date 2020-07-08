<template>
  <main>
    <div class="2-columns" data-open="click" data-menu="vertical-modern-menu" data-col="2-columns">
      <master-head></master-head>
      <master-nav></master-nav>
      <div id="main">
        <div class="row">
          <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
          <div class="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
            <!-- Search for small screen-->
            <div class="container">
              <div class="row">
                <div class="col s10 m6 l6">
                  <h5 class="breadcrumbs-title mt-0 mb-0">
                    <span>Parent Info</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/parents" tag="a">Parent</router-link>
                    </li>
                    <li class="breadcrumb-item active">Parent Info</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <!-- Cards Start -->
          <div class="col s12">
            <div class="container">
              <!-- users view start -->
              <div class="section users-view">
                <!-- users view media object start -->
                <div class="card-panel">
                  <div class="row">
                    <div class="col s12 m7">
                      <div class="display-flex media">
                        <a href="#" class="avatar">
                          <img
                            src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/avatar/avatar-10.png"
                            alt="users view avatar"
                            class="z-depth-4 circle"
                            height="64"
                            width="64"
                          />
                        </a>
                        <div class="media-body ml-3">
                          <h6 class="media-heading">
                            <span class="users-view-name">Dean Stanley</span>
                          </h6>
                          <span class="users-view-id">+1 (705) 362 3654</span>
                          <br />
                          <span class="users-view-id mt-1">Londonm, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- users view media object ends -->
                <!-- users view card data start -->
                <div class="card">
                  <div class="card-content">
                    <h5>My Students</h5>
                    <div class="row">
                      <div class="col s12">
                        <table class="responsive-table">
                          <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Student 001</td>
                              <td>Stu001@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip green lighten-5 green-text"
                                >Active</span>
                              </td>
                              <td>
                                <router-link
                                  to="/StudentInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                            <tr>
                              <td>Student 002</td>
                              <td>Stu002@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip green lighten-5 green-text"
                                >Active</span>
                              </td>
                              <td>
                                <router-link
                                  to="/StudentInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                            <tr>
                              <td>Student 003</td>
                              <td>Stu003@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip green lighten-5 green-text"
                                >Active</span>
                              </td>
                              <td>
                                <router-link
                                  to="/StudentInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- users view card data ends -->
                <div class="card">
                  <div class="card-content">
                    <h5>My All Tutors</h5>
                    <div class="row">
                      <div class="col s12">
                        <table class="responsive-table">
                          <thead>
                            <th>Tutor</th>
                            <th>Student</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tutor 001</td>
                              <td>Student 001</td>
                              <td>Tutor001@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip green lighten-5 green-text"
                                >Complete</span>
                              </td>
                              <td>
                                <router-link
                                  to="/TutorInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                            <tr>
                              <td>Tutor 002</td>
                              <td>Student 001</td>
                              <td>Tutor002@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip orange lighten-5 orange-text"
                                >On Going</span>
                              </td>
                              <td>
                                <router-link
                                  to="/TutorInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                            <tr>
                              <td>Tutor 003</td>
                              <td>Student 003</td>
                              <td>Tutor003@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip green lighten-5 green-text"
                                >Complete</span>
                              </td>
                              <td>
                                <router-link
                                  to="/TutorInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                            <tr>
                              <td>Tutor 003</td>
                              <td>Student 002</td>
                              <td>Tutor003@gmail.com</td>
                              <td>
                                <span
                                  class="users-view-status chip orange lighten-5 orange-text"
                                >On Going</span>
                              </td>
                              <td>
                                <router-link
                                  to="/TutorInfo"
                                  class="btn-floating mb-1 waves-effect waves-light"
                                  tag="a"
                                >
                                  <i class="material-icons">visibility</i>
                                </router-link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-overlay"></div>
          </div>
        </div>
      </div>
      <masterfoot></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";

export default {
  name: "Parent",
  created() {
    document.title = "Parent";
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot
  }
};
</script>

<style>
</style>