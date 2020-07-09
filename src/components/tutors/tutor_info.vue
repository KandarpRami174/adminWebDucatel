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
                    <span>Tutor Info</span>
                  </h5>
                  <ol class="breadcrumbs mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/tutor" tag="a">Tutors</router-link>
                    </li>
                    <li class="breadcrumb-item active">Tutor Info</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <!-- Cards Start -->
          <div class="col s12">
            <div class="container">
              <!-- users view start -->
              <div class="section users-view">
                <!-- users view media object start -->
                <div class="card-panel">
                  <div class="row">
                    <div class="col s12 m7">
                      <div class="display-flex media">
                        <a href="#" class="avatar">
                          <img
                            src="http://webducatel.assets.fuegoinfotech.com/app-assets/images/avatar/avatar-6.png"
                            alt="users view avatar"
                            class="z-depth-4 circle"
                            height="64"
                            width="64"
                          />
                        </a>
                        <div class="media-body ml-3">
                          <h6 class="media-heading">
                            <span class="users-view-name">John Carter</span>
                          </h6>
                          <span class="users-view-id">+1 (755) 412 1022</span>
                          <br />
                          <span class="users-view-id mt-1">Birmingham, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="row">
                      <div class="col s12 m6">
                        <table class="striped">
                          <tbody>
                            <tr>
                              <td>Study In:</td>
                              <td>King's College London</td>
                            </tr>
                            <tr>
                              <td>Days:</td>
                              <td
                                class="users-view-latest-activity"
                              >Mon, Tue, Wed, Thur, Fri, Sat, San</td>
                            </tr>
                            <tr>
                              <td>Availability:</td>
                              <td class="users-view-verified">Pre 12pm, 12 - 5pm, After 5pm</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="col s12 m6">
                        <table class="striped">
                          <tbody>
                            <tr>
                              <td>Subscription:</td>
                              <td class="users-view-role">12 Month Plan, $50/mo</td>
                            </tr>
                            <tr>
                              <td>Subscription End:</td>
                              <td class="users-view-role">June 5th, 2021</td>
                            </tr>
                            <tr>
                              <td>Status:</td>
                              <td>
                                <span
                                  class="users-view-status chip green lighten-5 green-text"
                                >Active</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <h5>About Tutor</h5>
                    <div class="row">
                      <div class="col s12">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, culpa ipsum, amet adipisci omnis dignissimos nisi vero porro necessitatibus a deleniti, incidunt quidem sunt corporis explicabo recusandae nam sit iure. Sint vel praesentium corrupti repellat? Quas, corporis minus quo distinctio odit sequi placeat! Et esse rerum a assumenda commodi recusandae ratione saepe adipisci consequatur sequi. Numquam, suscipit soluta pariatur provident ipsum, veniam recusandae neque quisquam, doloremque eos hic ipsam molestiae tenetur? Nostrum quo eum, distinctio iusto laboriosam cum nam a fuga laborum, aliquam beatae natus dolore culpa blanditiis soluta dignissimos aspernatur neque delectus nesciunt perferendis dicta veritatis suscipit, similique fugit.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <h5>About Session</h5>
                    <div class="row">
                      <div class="col s12">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, culpa ipsum, amet adipisci omnis dignissimos nisi vero porro necessitatibus a deleniti, incidunt quidem sunt corporis explicabo recusandae nam sit iure. Sint vel praesentium corrupti repellat? Quas, corporis minus quo distinctio odit sequi placeat! Et esse rerum a assumenda commodi recusandae ratione saepe adipisci consequatur sequi. Numquam, suscipit soluta pariatur provident ipsum, veniam recusandae neque quisquam, doloremque eos hic ipsam molestiae tenetur? Nostrum quo eum, distinctio iusto laboriosam cum nam a fuga laborum, aliquam beatae natus dolore culpa blanditiis soluta dignissimos aspernatur neque delectus nesciunt perferendis dicta veritatis suscipit, similique fugit.
                      </div>
                    </div>
                  </div>
                </div>
                <!-- users view media object ends -->
                <div class="card">
                  <div class="card-content">
                    <h5>Qualifications</h5>
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
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <h5>Subjects offered</h5>
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