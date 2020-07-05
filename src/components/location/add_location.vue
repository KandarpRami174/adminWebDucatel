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
                    <span>Add New Level</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/location" tag="a">State</router-link>
                    </li>
                    <li class="breadcrumb-item active">Add New State</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="col offset-m3 offset-l3 s12 m6 l6">
            <div id="basic-form" class="card card card-default scrollspy">
              <div class="card-content">
                <form>
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="text" id="fn" />
                      <label for="fn">State Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <router-link to="/location" class="btn cyan waves-effect waves-light right">
                        Submit
                        <i class="material-icons right">send</i>
                      </router-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <masterfoot class="pos-bottom"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
export default {
  name: "Add New Level",
  created() {
    document.title = "Add New Level";
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot
  }
};
</script>

<style>
.pos-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>