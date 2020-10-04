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
                    <span>Blog Category</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <router-link
                    to="/addBlogCat"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right"
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
                      <table
                        class="responsive-table"
                        v-if="isLoading == false && isNoData == false"
                      >
                        <thead>
                          <tr role="row">
                            <th>Category Name</th>
                            <th>Add On</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" v-for="data in CategoryData" v-bind:key="data._id">
                            <td>{{data.blogCatTitle}}</td>
                            <td style="width: 15rem">{{data.createdAt | formatDate}}</td>
                            <td style="width: 15rem">{{data.updatedAt | formatDate}}</td>
                            <td style="width: 5rem">
                              <button
                                type="button"
                                v-on:click="deleteLV(data._id)"
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-red-pink gradient-shadow"
                              >
                                <i class="material-icons">delete_forever</i>
                              </button>
                              <br />
                              <button
                                type="button"
                                v-on:click="editLV(data._id)"
                                class="mb-6 btn-floating waves-effect waves-light gradient-45deg-green-teal gradient-shadow"
                              >
                                <i class="material-icons">edit</i>
                              </button>
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
      <masterfoot v-bind:class="[isLimitData ? fixedFooter : '']"></masterfoot>
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
  name: "Blog Category",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }

    document.title = "Blog Category";

    this.getCategoryData()
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      getCategory: [],
      CategoryData: [],
      isLoading: false,
      isNoData: false,
      isLimitData: false,
      fixedFooter: "pos-bottom",
    };
  },
  methods: {
    async getCategoryData() {
      this.isLoading = true;
      this.isLimitData = true;
      try {
        this.getCategory = await BlogCategoryAPI.getCategory();

        if (this.getCategory.statusCode == 200) {
          this.CategoryData = this.getCategory.blogCategory;

          if (this.CategoryData.length > 0) {
            setTimeout(() => (this.isLoading = false, this.isLimitData = false), 3000);
          } else {
            setTimeout(
              () => ((this.isLoading = false, this.isNoData = true, this.isLimitData = false)),
              3000
            );
          }
        }
      } catch (err) {
        setTimeout(() => (this.isLoading = false), 3000);
        console.log(err);
      }
    },
    async deleteLV(id) {
      if (confirm(`Are you sure you want to delete this Category!!`)) {
        await BlogCategoryAPI.deleteCategory(id);
        this.getCategoryData();
      }
    },
    async editLV(id) {
      sessionStorage.setItem("edit_CategoryID", id);
      this.$router.push("addBlogCat");
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