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
                    <span>Blogs</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item active"></li>
                  </ol>
                </div>
                <div class="col s2 m6 l6">
                  <router-link
                    to="/addBlog"
                    class="btn waves-effect waves-light gradient-45deg-light-blue-cyan breadcrumbs-btn right"
                  >
                    <a>Add</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- State Cards Start -->
          <br />
          <br />
          <div class="col s12">
            <div class="container">
              <div class="row">
                <div class="col s12 m2 l2 offset-m5 offset-l5 card-width" v-if="isLoading">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <intersecting-circles-spinner
                      :animation-duration="1200"
                      :size="70"
                      color="#7b1fa2"
                      class="center-content"
                    />
                  </div>
                </div>
                <div v-if="isLoading == false">
                  <div v-for="data in ContentData" v-bind:key="data._id">
                    <div class="col s12 m4 l4 card-width">
                      <div class="card-panel border-radius-6 mt-10 card-animation-1">
                        <img
                          class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                          v-bind:src="'http://assetsmaster.fuegoinfotech.com/webducatel/uploadBase/blogImage/'+data.bgContImage"
                          alt="images"
                        />
                        <h6
                          class="center"
                          style="margin-top:1.5rem !important; color: #0277bd"
                        >{{data.bgContTitle}}</h6>
                        <div class="card-action border-non center mt-5">
                          <button
                            type="button"
                            v-on:click="editBGCon(data._id)"
                            class="waves-effect waves-light btn gradient-45deg-blue-indigo box-shadow"
                          >View</button>
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
      <masterfoot v-bind:class="[isNoData ? fixedFooter : '']"></masterfoot>
    </div>
  </main>
</template>

<script>
import Head from "../master/head.vue";
import Nav from "../master/navbar.vue";
import Foot from "../master/footer.vue";
import { IntersectingCirclesSpinner } from "epic-spinners";
import BlogContentAPI from "../../api/Blog/BContent";

export default {
  name: "Blogs",
  created() {
    if (localStorage.getItem("userRole") == null) {
      this.$router.push("/");
    }

    document.title = "Blogs";

    this.getContentData();
  },
  components: {
    masterHead: Head,
    masterNav: Nav,
    masterfoot: Foot,
    IntersectingCirclesSpinner,
  },
  data() {
    return {
      getContents: [],
      ContentData: [],
      isLoading: false,
      isNoData: false,
      fixedFooter: "pos-bottom",
    };
  },
  methods: {
    async getContentData() {
      this.isLoading = true;
      this.isNoData = true;
      try {
        this.getContents = await BlogContentAPI.getContent();

        if (this.getContents.statusCode == 200) {
          this.ContentData = this.getContents.blogContent;

          if (this.ContentData.length > 0) {
            if (this.ContentData.length <= 3) {
              setTimeout(
                () => ((this.isLoading = false), (this.isNoData = true)),
                3000
              );
            } else {
              setTimeout(() => (this.isLoading = false), 3000);
            }
          } else {
            setTimeout(
              () => ((this.isLoading = false), (this.isNoData = true)),
              3000
            );
          }
        }
      } catch (err) {
        setTimeout(() => (this.isLoading = false), 3000);
        console.log(err);
      }
    },
    async deleteBGCon(id) {
      if (confirm(`Are you sure you want to delete this Content!!`)) {
        await BlogContentAPI.deleteContent(id);
        this.getContentData();
      }
    },
    async editBGCon(id) {
      sessionStorage.setItem("edit_ContentID", id);
      this.$router.push("ViewNUpdateBlog");
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