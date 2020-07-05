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
                    <span>Subscription</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <router-link
                    to="/addSubscription"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="col s12">
            <div class="container">
              <div class="row">
                <div class="col s12 m12 l12">
                  <div id="basic-tabs" class="card card card-default scrollspy">
                    <div class="card-content">
                        <h5>Your Tutor Subscription Plan</h5>
                      <div class="row">
                        <div class="col s12">
                          <div class="row">
                            <div class="plans-container">
                              <div class="col s12 m6 l4">
                                <div class="card hoverable animate fadeLeft">
                                  <div
                                    class="card-image gradient-45deg-light-blue-cyan waves-effect"
                                  >
                                    <div class="card-title">BASIC</div>
                                    <div class="price">
                                      <sup>$</sup>19
                                      <sub>
                                        /
                                        <span>mo</span>
                                      </sub>
                                    </div>
                                    <div class="price-desc">Free 1 month</div>
                                  </div>
                                  <div class="card-content">
                                    <ul class="collection">
                                      <li class="collection-item">500 emails</li>
                                      <li class="collection-item">Unlimited data</li>
                                      <li class="collection-item">1 users</li>
                                      <li class="collection-item">First 15 day free</li>
                                    </ul>
                                  </div>
                                  <div class="card-action center-align">
                                    <button
                                      class="waves-effect waves-light gradient-45deg-indigo-purple gradient-shadow btn"
                                    >
                                      Select
                                      Plan
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col s12 m6 l4">
                                <div class="card z-depth-1 hoverable animate fadeUp">
                                  <div class="card-image gradient-45deg-red-pink waves-effect">
                                    <div class="card-title">PROFESSIONAL</div>
                                    <div class="price">
                                      <sup>$</sup>29
                                      <sub>
                                        /
                                        <span>mo</span>
                                      </sub>
                                    </div>
                                    <div class="price-desc">Most Popular</div>
                                  </div>
                                  <div class="card-content">
                                    <ul class="collection">
                                      <li class="collection-item">2000 emails</li>
                                      <li class="collection-item">Unlimited data</li>
                                      <li class="collection-item">10 users</li>
                                      <li class="collection-item">First 30 day free</li>
                                    </ul>
                                  </div>
                                  <div class="card-action center-align">
                                    <button
                                      class="waves-effect waves-light gradient-45deg-indigo-purple gradient-shadow btn"
                                    >
                                      Select
                                      Plan
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col s12 m6 l4">
                                <div class="card hoverable animate fadeRight">
                                  <div
                                    class="card-image gradient-45deg-amber-amber accent-2 waves-effect"
                                  >
                                    <div class="card-title">PREMIUM</div>
                                    <div class="price">
                                      <sup>$</sup>49
                                      <sub>
                                        /
                                        <span>mo</span>
                                      </sub>
                                    </div>
                                    <div class="price-desc">Get 20% off</div>
                                  </div>
                                  <div class="card-content">
                                    <ul class="collection">
                                      <li class="collection-item">10,000 emails</li>
                                      <li class="collection-item">Unlimited data</li>
                                      <li class="collection-item">Unlimited users</li>
                                      <li class="collection-item">First 90 day free</li>
                                    </ul>
                                  </div>
                                  <div class="card-action center-align">
                                    <button
                                      class="waves-effect waves-light gradient-45deg-indigo-purple gradient-shadow btn"
                                    >
                                      Select
                                      Plan
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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