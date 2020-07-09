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
                    <span>Tutor Request Info</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/tutorReq" tag="a">Tutors Request</router-link>
                    </li>
                    <li class="breadcrumb-item active">Tutor Request Info</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="col offset-m1 offset-l1 s12 m10 l10">
            <div id="basic-form" class="card card card-default scrollspy">
              <div class="card-content">
                <form>
                  <div class="row">
                    <div class="col s12 m4">
                      <img
                        src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/avatar/avatar-6.png"
                        alt="users view avatar"
                        class="z-depth-4 circle"
                        height="200"
                        width="200"
                      />
                    </div>
                    <div class="col s12 m8">
                      <!-- Name -->
                      <div class="row">
                        <div class="input-field col s12">
                          <input type="text" id="name" value="John Carter" />
                          <label for="name" class="active">Name</label>
                        </div>
                      </div>
                      <!-- Study -->
                      <div class="row">
                        <div class="input-field col s12">
                          <input type="text" id="study" value="King's College London" />
                          <label for="study" class="active">Study</label>
                        </div>
                      </div>
                      <!-- Location -->
                      <div class="row">
                        <div class="input-field col s12">
                          <input type="text" id="location" value="Birmingham, UK" />
                          <label for="location" class="active">Location</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- About Tutor -->
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="aboutTutor" class="materialize-textarea" spellcheck="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sunt libero illum commodi cupiditate! Beatae totam repudiandae dolorum omnis iusto eaque nisi enim. Ducimus, maiores at architecto facere quam debitis animi quaerat corporis enim, sit expedita quo explicabo nam repellat.</textarea>
                      <label for="aboutTutor" class="active">About Tutor</label>
                    </div>
                  </div>
                  <!-- About Session -->
                  <div class="row">
                    <div class="input-field col s12">
                      <textarea id="aboutSession" class="materialize-textarea" spellcheck="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sunt libero illum commodi cupiditate! Beatae totam repudiandae dolorum omnis iusto eaque nisi enim. Ducimus, maiores at architecto facere quam debitis animi quaerat corporis enim, sit expedita quo explicabo nam repellat.</textarea>
                      <label for="aboutSession" class="active">About Session</label>
                    </div>
                  </div>
                  <!-- Subscription -->
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        type="text"
                        id="subscription"
                        value="12 Month Plan, $50/mo"
                        readonly="true"
                      />
                      <label for="subscription" class="active">Subscription</label>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col s12">
                      <table class="responsive-table">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Web</th>
                            <th>Thur</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>San</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/gallery/sunrise.png"
                                alt="sunrise"
                                class="mr-6"
                                height="30"
                                width="30"
                              />
                              Pre 12
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/gallery/sun.png"
                                alt="sunrise"
                                class="mr-6"
                                height="30"
                                width="30"
                              />
                              12-5pm
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/gallery/sunset.png"
                                alt="sunrise"
                                class="mr-6"
                                height="30"
                                width="30"
                              />
                              After 12
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                            <td>
                              <i class="material-icons dp48 green-text">check</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col s12">
                      <table class="responsive-table">
                        <thead>
                          <th>Subject</th>
                          <th>Qualification</th>
                          <th>Grade</th>
                          <th></th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Maths</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>English Literature</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>French</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>Environmental Studies</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>Physical Education</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>Biology</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>Theory of Knowledge</td>
                            <td>International Baccalaureate (IB)</td>
                            <td>2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col s12">
                      <table class="responsive-table">
                        <thead>
                          <th>Subject</th>
                          <th>Qualification</th>
                          <th>Price</th>
                          <th></th>
                        </thead>
                        <tbody
                          id="activeTutoredSubjectsTable_data"
                          class="ui-datatable-data ui-widget-content"
                        >
                          <tr>
                            <td>French</td>
                            <td>A Level</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>Biology</td>
                            <td>GCSE</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>English</td>
                            <td>GCSE</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>English Literature</td>
                            <td>GCSE</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>French</td>
                            <td>GCSE</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>Maths</td>
                            <td>GCSE</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>Physical Education</td>
                            <td>GCSE</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>French</td>
                            <td>IB</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>Theory of Knowledge</td>
                            <td>IB</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>MLAT (Modern Languages)</td>
                            <td>University</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>English</td>
                            <td>11 Plus</td>
                            <td>£36 /hr</td>
                          </tr>
                          <tr>
                            <td>Maths</td>
                            <td>11 Plus</td>
                            <td>£36 /hr</td>
                          </tr>
                          <tr>
                            <td>English</td>
                            <td>13 Plus</td>
                            <td>£36 /hr</td>
                          </tr>
                          <tr>
                            <td>French</td>
                            <td>13 Plus</td>
                            <td>£36 /hr</td>
                          </tr>
                          <tr>
                            <td>Maths</td>
                            <td>13 Plus</td>
                            <td>£36 /hr</td>
                          </tr>
                          <tr>
                            <td>Biology</td>
                            <td>KS3</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>English</td>
                            <td>KS3</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>Maths</td>
                            <td>KS3</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>English</td>
                            <td>KS2</td>
                            <td>£38 /hr</td>
                          </tr>
                          <tr>
                            <td>Maths</td>
                            <td>KS2</td>
                            <td>£38 /hr</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="input-field col s12">
                      <router-link
                        to="/tutorReq"
                        class="btn red waves-effect waves-light right ml-3"
                      >
                        Reject
                        <i class="material-icons right">close</i>
                      </router-link>
                      <router-link
                        to="/tutorReq"
                        class="btn cyan waves-effect waves-light right"
                      >
                        Approved
                        <i class="material-icons right">check</i>
                      </router-link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
  name: "Parent",
  created() {
    document.title = "Parent";
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