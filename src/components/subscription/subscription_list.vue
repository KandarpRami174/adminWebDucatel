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
          <br />
          <div class="col s12">
            <div class="container">
              <div class="row">
                <div class="col s12 m12 l12">
                  <div id="basic-tabs" class="card card card-default scrollspy">
                    <div class="card-content">
                      <intersecting-circles-spinner
                        :animation-duration="1200"
                        :size="70"
                        color="#7b1fa2"
                        class="center-content"
                        v-if="isLoading"
                      />
                      <div
                        class="card-alert card gradient-45deg-amber-amber col s6 offset-s3"
                        v-if="isNoData"
                      >
                        <div class="card-content white-text">
                          <p>
                            <i class="material-icons">warning</i> WARNING : Data Not Available
                          </p>
                        </div>
                      </div>
                      <h5
                        v-if="isLoading == false && isNoData == false"
                      >Your Tutor Subscription Plan</h5>
                      <div v-if="isLoading == false && isNoData == false">
                        <div class="row">
                          <div class="col s12">
                            <div class="row">
                              <div v-for="data in subscriptionData" v-bind:key="data._id">
                                <div class="plans-container">
                                  <div class="col s12 m6 l4">
                                    <div class="card hoverable animate fadeLeft">
                                      <div
                                        class="card-image gradient-45deg-light-blue-cyan waves-effect"
                                      >
                                        <div class="card-title">{{data.subsTitle}}</div>
                                        <div class="price">
                                          <sup>$</sup>
                                          {{data.subsPrice}}
                                          <sub>
                                            /
                                            <span>mon</span>
                                            <div class="price-desc">{{data.subsMonth * data.subsPrice}} Total Pay</div>
                                          </sub>
                                        </div>
                                      </div>
                                      <div class="card-content">
                                        <span class="collection">
                                          <p
                                            style="font-size: 1.07rem; line-height: 1.6em; text-align: center; border-bottom: none; margin: 1rem 0rem;"
                                          >{{data.subsDetails}}</p>
                                        </span>
                                      </div>
                                      <div class="card-action center-align">
                                        <button
                                          class="waves-effect waves-light gradient-45deg-cyan-light-green gradient-shadow btn"
                                          @click="editSubs(data._id)"
                                        >Edit</button>
                                        <button
                                          class="ml-6 waves-effect waves-light gradient-45deg-red-pink gradient-shadow btn"
                                          @click="deleteSubs(data._id)"
                                        >Delete</button>
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
              </div>
            </div>
            <div class="content-overlay"></div>
          </div>
        </div>
      </div>
      <masterfoot v-bind:class="[isLowFoot ? fixedFooter : '']"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
import SubscriptionAPI from "../../api/Subscription/Subscription";
import { IntersectingCirclesSpinner } from "epic-spinners";

export default {
  name: "Subscriptions",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }

    document.title = "Subscriptions";

    this.getSubscriptionData();
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      getSubscription: [],
      subscriptionData: [],
      isLoading: false,
      isNoData: false,
      isLowFoot: false,
      fixedFooter: "pos-bottom",
    };
  },
  methods: {
    async getSubscriptionData() {
      this.isLoading = true;
      this.isLowFoot = true;
      try {
        this.getSubscription = await SubscriptionAPI.getSubscription();

        if (this.getSubscription.statusCode == 200) {
          this.subscriptionData = this.getSubscription.subscription;

          console.log(JSON.stringify(this.subscriptionData));

          if (this.subscriptionData.length > 0) {
            setTimeout(() => (this.isLoading = false, this.isLowFoot = false), 3000);
          } else {
            setTimeout(
              () => (this.isLoading = false, this.isNoData = true, this.isLowFoot = true),
              3000
            );
          }
        }
      } catch (err) {
        setTimeout(() => (this.isLoading = false), 3000);
        console.log(err);
      }
    },
    async deleteSubs(id) {
      if (confirm(`Are you sure you want to delete this subscription!!`)) {
        await SubscriptionAPI.deleteSubscription(id);
        this.getSubscriptionData();
      }
    },
    async editSubs(id) {
      sessionStorage.setItem("edit_subscriptionID", id);
      this.$router.push("addSubscription");
    },
  },
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