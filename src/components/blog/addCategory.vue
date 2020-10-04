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
                    <span>Add Category</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/blogCat" tag="a">Category</router-link>
                    </li>
                    <li class="breadcrumb-item active">Add Category</li>
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
                  <div class="row">
                    <div class="input-field col s12">
                      <input type="text" id="fn" v-model="BCTitle" />
                      <label for="fn">Name</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <button
                        type="button"
                        v-on:click="saveData"
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
      <masterfoot class="pos-bottom"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
import { IntersectingCirclesSpinner } from "epic-spinners";
import BlogCategoryAPI from "../../api/Blog/BCategory";

export default {
  name: "Add Category",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }

    document.title = "Add Category";

    if (sessionStorage.getItem("edit_CategoryID") != null) {
      this.isLoading = true;
      this.loadData();
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
      responseMsg: "",
      BCTitle: "",
      resData: [],
      BCID: "",
    };
  },
  methods: {
    async loadData() {
      this.BCID = sessionStorage.getItem("edit_CategoryID");
      this.resData = await BlogCategoryAPI.getCategoryID(this.BCID);
      if (this.resData.statusCode == 200) {
        this.BCTitle = this.resData.blogCategory.blogCatTitle;
        this.isLoading = false;
      }
    },
    async saveData() {
      if (this.BCTitle.trim().length == 0) {
        this.alertMessage(false, true, "Enter Blog Category Title!!");
      } else {
        this.isLoading = true;

        if (this.BCID != null) {
          this.resData = await BlogCategoryAPI.updateCategory(
            this.BCID,
            this.BCTitle
          );
          console.log(JSON.stringify(this.resData));

          if (this.resData.statusCode == 200) {
            this.alertMessage(false, true, "Blog Category Updated Successfully!!");
            setTimeout(
              () => (sessionStorage.clear(), this.$router.push("blogCat")),
              1000
            );
          } else {
            this.alertMessage(
              false,
              true,
              "Oops, Something went wrong, please try again!!"
            );
          }
        } else {
          this.resData = await BlogCategoryAPI.addCategory(this.BCTitle);
          console.log(JSON.stringify(this.resData));

          if (this.resData.statusCode == 201) {
            this.alertMessage(
              false,
              true,
              "Blog Category Created Successfully!!"
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
      this.isMessage = message;
      this.responseMsg = resMsg;
      setTimeout(
        () => (
          (this.isMessage = false),
          (this.responseMsg = ""),
          (this.BCTitle = ""),
          (this.isLoading = false)
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