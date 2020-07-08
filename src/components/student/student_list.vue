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
                    <span>Students</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <a
                    class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2"
                  >Download</a>
                </div>
              </div>
            </div>
          </div>
          <!-- State Cards Start -->
          <br />
          <div class="row">
            <div class="col s12 m12 l12">
              <div id="responsive-table" class="card card card-default scrollspy">
                <div class="card-content">
                  <div class="row">
                    <div class="col s12">
                      <table class="responsive-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Dean Stanley</td>
                            <td>London, UK</td>
                            <td>+1 (705) 362 3654</td>
                            <td>SDean@education.com</td>
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
                            <td>Dean Stanley</td>
                            <td>London, UK</td>
                            <td>+1 (705) 362 3654</td>
                            <td>SDean@education.com</td>
                            <td>
                              <a class="btn-floating mb-1 waves-effect waves-light">
                                <i class="material-icons">visibility</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Dean Stanley</td>
                            <td>London, UK</td>
                            <td>+1 (705) 362 3654</td>
                            <td>SDean@education.com</td>
                            <td>
                              <a class="btn-floating mb-1 waves-effect waves-light">
                                <i class="material-icons">visibility</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Dean Stanley</td>
                            <td>London, UK</td>
                            <td>+1 (705) 362 3654</td>
                            <td>SDean@education.com</td>
                            <td>
                              <a class="btn-floating mb-1 waves-effect waves-light">
                                <i class="material-icons">visibility</i>
                              </a>
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