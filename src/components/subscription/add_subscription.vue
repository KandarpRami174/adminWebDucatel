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
                    <span>Add New Subscription</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/subscription" tag="a">Subscription</router-link>
                    </li>
                    <li class="breadcrumb-item active" v-if="!isUpdate">Add New Subscription</li>
                    <li class="breadcrumb-item active" v-if="isUpdate">Edit Subscription</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="col offset-m3 offset-l3 s12 m6 l6">
            <div id="basic-form" class="card card card-default scrollspy">
              <div class="card-content">
                <intersecting-circles-spinner
                  :animation-duration="1200"
                  :size="70"
                  color="#7b1fa2"
                  class="center-content"
                  v-if="isLoading"
                />
                <form v-if="isLoading==false">
                  <!-- Title -->
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="text" id="title" v-model="subscriptionTitle" />
                      <label for="title">Title</label>
                    </div>
                  </div>
                  <!-- Fetures -->
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="txtDesc" v-model="subscriptionDesc" class="materialize-textarea" spellcheck="true"></textarea>
                      <label for="txtDesc">Description</label>
                    </div>
                  </div>
                  <!-- Month -->
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="number" id="month" v-model="subscriptionMonth" />
                      <label for="month">Months</label>
                    </div>
                  </div>
                  <!-- Price -->
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="number" id="price" v-model="subscriptionPrice"/>
                      <label for="price">Price</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <button
                        type="button"
                        v-on:click="callAPIMethod"
                        class="btn cyan waves-effect waves-light right"
                      >Submit</button>
                    </div>
                  </div>
                </form>
                <div class="card-alert card green lighten-5" v-if="isMessage">
                  <div class="card-content green-text">
                    <p>{{responseMsg}}</p>
                  </div>
                </div>
              </div>
            </div>
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
import { IntersectingCirclesSpinner } from "epic-spinners";
import SubscriptionAPI from "../../api/Subscription/Subscription";

export default {
  name: "Add Subscription",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }

    document.title = "Add Subscription";

    if (sessionStorage.getItem("edit_subscriptionID") != null) {
      this.SubID = sessionStorage.getItem("edit_subscriptionID");
      this.isUpdate = true;
      this.loadSubs();
    }
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      isLoading: false,
      isMessage: false,
      isFirstLoad: false,
      isUpdate: false,
      isLowFoot: false,
      fixedFooter: "pos-bottom",
      SubID: "",
      responseMsg: "",
      resSaveData: [],
      subscriptionTitle: "",
      subscriptionDesc: "",
      subscriptionMonth: 0,
      subscriptionPrice: 0.0,
      subscriptionID: null,
    };
  },
  methods: {
    async loadSubs() {
      this.resSaveData = await SubscriptionAPI.getSubscriptionByID(this.SubID);
      const subsData = this.resSaveData.subscription;
      if (this.resSaveData.statusCode == 200) {
        this.subscriptionTitle = subsData.subsTitle;
        this.subscriptionDesc = subsData.subsDetails;
        this.subscriptionMonth = subsData.subsMonth;
        this.subscriptionPrice = subsData.subsPrice;
      }
    },
    async callAPIMethod() {
      console.log(this.subscriptionTitle.trim().length);
      console.log(this.subscriptionDesc.trim().length);
      console.log(this.subscriptionMonth);
      console.log(this.subscriptionPrice);
      if (
        this.subscriptionTitle.trim().length == 0 &&
        this.subscriptionDesc.trim().length == 0 &&
        this.subscriptionMonth == 0 &&
        this.subscriptionPrice == 0
      ) {
        this.alertMessage(false, true, "Enter Value In Every Field!!");
      } else {
        this.isLoading = true;
        this.isLowFoot = true;
        this.isFirstLoad = true;
        if (this.isUpdate == true) {
          this.resSaveData = await SubscriptionAPI.updateSubscription(
            this.SubID,
            this.subscriptionTitle,
            this.subscriptionDesc,
            this.subscriptionMonth,
            this.subscriptionPrice
          );

          if (this.resSaveData.statusCode == 200) {
            this.alertMessage(
              false,
              true,
              "Subscription Updated Successfully!!"
            );
            sessionStorage.clear();
            this.$router.push("subscription");
          } else {
            this.alertMessage(
              false,
              true,
              "Oops, Something went wrong, please try again!!"
            );
          }
        } else {
          this.resSaveData = await SubscriptionAPI.addSubscription(
            this.subscriptionTitle,
            this.subscriptionDesc,
            this.subscriptionMonth,
            this.subscriptionPrice
          );

          if (this.resSaveData.statusCode == 201) {
            this.alertMessage(
              false,
              true,
              "Subscription Created Successfully!!"
            );
          } else {
            this.alertMessage(
              false,
              true,
              "Oops, Something went wrong, please try again!!"
            );
          }
        }
      }
    },
    alertMessage(loading, message, resMsg) {
      this.isLoading = loading;
      this.isLowFoot = loading;
      this.isMessage = message;
      this.responseMsg = resMsg;
      setTimeout(
        () => (
          (this.responseMsg = ""),
          (this.subscriptionTitle = ""),
          (this.subscriptionDesc = ""),
          (this.subscriptionMonth = 0),
          (this.subscriptionPrice = 0.0),
          (this.isLoading = false),
          (this.isMessage = false),
          (this.isFirstLoad = false)
        ),
        3000
      );
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