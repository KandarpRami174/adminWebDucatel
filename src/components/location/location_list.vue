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
                    <li class="breadcrumb-item active">Add Your States Here</li>
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
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg/1200px-Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">California</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://www.fodors.com/wp-content/uploads/2019/04/ACLU-florida.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Florida</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://cdn.theatlantic.com/thumbor/H2BQzp2tNk8qMwS-pZdhGrsgJCY=/900x588/media/img/photo/2020/04/ohio-photos-1/s00_1026322538/original.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Ohio</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg/1200px-Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">California</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg/1200px-Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">California</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://www.fodors.com/wp-content/uploads/2019/04/ACLU-florida.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Florida</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://cdn.theatlantic.com/thumbor/H2BQzp2tNk8qMwS-pZdhGrsgJCY=/900x588/media/img/photo/2020/04/ohio-photos-1/s00_1026322538/original.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">Ohio</a>
                    </h6>
                  </div>
                </div>
                <div class="col s12 m3 l3 card-width">
                  <div class="card-panel border-radius-6 mt-10 card-animation-1">
                    <img
                      class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg/1200px-Rodeo_Drive_%26_Via_Rodeo%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg"
                      alt="images"
                    />
                    <h6 class="center" style="margin-top:1.5rem !important;">
                      <a href="#" class="mt-5">California</a>
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