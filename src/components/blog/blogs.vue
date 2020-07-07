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
                <div class="col s12 m4 l4 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-1162712755.jpg?w=1390&crop=1"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Paytm, Vijay Shekhar Sharma to acquire insurance firm Raheja QBE for $76M</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m4 l4 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://techcrunch.com/wp-content/uploads/2020/07/Man_Holding_iPhone_Mockup_copy.jpg?w=1390&crop=1"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Lydia expands credit offering in partnership with Younited Credit</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m4 l4 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1213541630.jpg?w=1390&crop=1"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Uber reportedly agrees to acquire Postmates for $2.65 billion</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m4 l4 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://techcrunch.com/wp-content/uploads/2019/09/GettyImages-1162712755.jpg?w=1390&crop=1"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Paytm, Vijay Shekhar Sharma to acquire insurance firm Raheja QBE for $76M</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m4 l4 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://techcrunch.com/wp-content/uploads/2020/07/Man_Holding_iPhone_Mockup_copy.jpg?w=1390&crop=1"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Lydia expands credit offering in partnership with Younited Credit</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m4 l4 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1213541630.jpg?w=1390&crop=1"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Uber reportedly agrees to acquire Postmates for $2.65 billion</a>
                    </h6>
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
  name: "Blogs",
  created() {
    document.title = "Blogs";
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