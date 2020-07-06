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
                    <span>Add Users</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/adminUser" tag="a">User List</router-link>
                    </li>
                    <li class="breadcrumb-item active">Add User</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="col s12">
            <div class="container">
              <div class="row">
                <div class="col s12 m6 l6 offset-m3 offset-l3">
                  <div id="basic-form" class="card card card-default scrollspy">
                    <div class="card-content">
                      <h4 class="card-title">Basic Form</h4>
                      <form _lpchecked="1">
                        <div class="row">
                          <div class="input-field col s12">
                            <input type="text" id="Name" />
                            <label for="Name">Name</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="email" type="email" />
                            <label for="email" class>Email</label>
                          </div>
                        </div>
                        <div class="row">
                          <label for="role">Role</label>
                          <div class="input-field col s12" id="role">
                            <select class="form-control">
                              <option value>All</option>
                              <option value="Admin">Admin</option>
                              <option value="Bloger">Bloger</option>
                              <option value="HR">HR</option>
                              <option value="Marketing">Marketing</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="row center">
                            <div class="input-field col s12">
                              <button type="submit" class="btn indigo">Save</button>
                              <button type="button" class="btn btn-light ml-4">Cancel</button>
                            </div>
                          </div>
                        </div>
                      </form>
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
  name: "Add Admin User",
  created() {
    document.title = "Add Admin User";
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