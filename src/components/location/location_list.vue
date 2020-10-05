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
                    <span>Location</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active">List OF States</li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <a
                    class="btn waves-effect waves-light breadcrumbs-btn right gradient-45deg-green-teal ml-2 mt-5"
                  >Download</a>
                  <router-link
                    to="/addLocation"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right mt-5"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- State Cards Start -->
          <div class="col s12 mt-5">
            <div class="container">
              <div class="row">
                <div class="row">
                  <div class="col s12">
                    <ul class="collapsible collapsible-accordion">
                      <li class="active">
                        <div class="collapsible-header" tabindex="0">
                          <i class="material-icons">mic_none</i> Country
                          <div class="content-right">Hey</div>
                        </div>
                        <div class="collapsible-body" style>
                          <div class="row">
                            <div class="col s12">
                              <ul class="collapsible collapsible-accordion">
                                <li class="active">
                                  <div class="collapsible-header" tabindex="0">
                                    <i class="material-icons">mic_none</i> Stats 1.0
                                  </div>
                                  <div class="collapsible-body" style>
                                    <div class="row"> 
                                      <div class="col s12">
                                        <ul class="collapsible collapsible-accordion">
                                          <li class>
                                            <div class="collapsible-header" tabindex="0">
                                              <i class="material-icons">mic_none</i> City 1.0
                                            </div>
                                            <div class="collapsible-body" style></div>
                                          </li>
                                          <li>
                                            <div class="collapsible-header" tabindex="0">
                                              <i class="material-icons">mic_none</i> City 2.0
                                            </div>
                                            <div class="collapsible-body" style></div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li class>
                                  <div class="collapsible-header" tabindex="0">
                                    <i class="material-icons">mic_none</i> Stats 2.0
                                  </div>
                                  <div class="collapsible-body" style>
                                    <div class="row"> 
                                      <div class="col s12">
                                        <ul class="collapsible collapsible-accordion">
                                          <li class>
                                            <div class="collapsible-header" tabindex="0">
                                              <i class="material-icons">mic_none</i> City 1.0
                                            </div>
                                            <div class="collapsible-body" style></div>
                                          </li>
                                          <li>
                                            <div class="collapsible-header" tabindex="0">
                                              <i class="material-icons">mic_none</i> City 2.0
                                            </div>
                                            <div class="collapsible-body" style></div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
    masterfoot: Foot,
  },
};
</script>

<style>
</style>