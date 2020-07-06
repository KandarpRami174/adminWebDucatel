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
                    <span>Admin Users</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <router-link
                    to="/addAdminUser"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="col s12">
            <div class="container">
              <!-- users list start -->
              <div class="card-panel">
                <div class="row">
                  <div class="col s12 m6 l5">
                    <label for="users-list-role">Role</label>
                    <div class="input-field">
                      <select class="form-control" id="users-list-role">
                        <option value>All</option>
                        <option value="Admin">Admin</option>
                        <option value="Bloger">Bloger</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div class="col s12 m6 l4">
                    <label for="users-list-status">Status</label>
                    <div class="input-field">
                      <select class="form-control" id="users-list-status">
                        <option value>All</option>
                        <option value="Active">Active</option>
                        <option value="Close">Close</option>
                        <option value="Banned">Banned</option>
                      </select>
                    </div>
                  </div>
                  <div class="col s12 m6 l3 display-flex align-items-center show-btn">
                    <button type="submit" class="btn btn-block indigo waves-effect waves-light">Show</button>
                  </div>
                </div>
              </div>
              <div class="users-list-table">
                <div class="card">
                  <div class="card-content">
                    <!-- datatable start -->
                    <div class="responsive-table">
                      <table id="users-list-datatable" class="table">
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>Name</th>
                            <th>Last Activity</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Kandarp0174</a>
                            </td>
                            <td>Kandarp Rami</td>
                            <td>02/06/2020</td>
                            <td>Admin</td>
                            <td>
                              <span class="chip green lighten-5">
                                <span class="green-text">Active</span>
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i class="material-icons">edit</i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- datatable ends -->
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
  name: "Location",
  created() {
    document.title = "Location";
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