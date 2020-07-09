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
                    <span>Level</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <a
                    class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2 mt-5"
                  >Download</a>
                  <router-link
                    to="/addLevel"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right mt-5"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col s12 m12 l12">
              <div id="responsive-table" class="card card card-default scrollspy">
                <div class="card-content">
                  <div class="row">
                    <div class="col s12">
                      <table class="responsive-table">
                        <thead>
                          <tr role="row">
                            <th>Name</th>
                            <th>Add On</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" class="odd">
                            <td>Master</td>
                            <td>2020-07-03</td>
                            <td>
                              <a
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                              >
                                <i class="material-icons">delete_forever</i>
                              </a>
                              <br />
                              <a
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                              >
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr role="row" class="even">
                            <td>Pro</td>
                            <td>2020-02-06</td>
                            <td>
                              <a
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                              >
                                <i class="material-icons">delete_forever</i>
                              </a>
                              <br />
                              <a
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                              >
                                <i class="material-icons">edit</i>
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
  name: "Level",
  created() {
    document.title = "Level";
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